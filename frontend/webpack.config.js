const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // Your entry point
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "[name].[contenthash].js", // Use contenthash for better caching
    chunkFilename: "[id].[contenthash].js", // Name for dynamically loaded chunks
    publicPath: "/", // Ensure correct path for public resources
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Resolve extensions for .ts, .tsx, .js
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Handle TypeScript files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript", // Enable TypeScript support
            ],
          },
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: [
          "style-loader", // Injects CSS into DOM
          "css-loader", // Resolves CSS imports
          "postcss-loader", // Processes CSS with PostCSS (Tailwind CSS)
        ],
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg)$/i, // Handle image formats
        type: "asset/resource", // Handle images and output them to the dist folder
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all", // Split both vendor and app code
      minSize: 20000, // Minimum size of a chunk (in bytes)
      maxSize: 500000, // Maximum size of a chunk (in bytes)
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/, // Vendor libraries from node_modules
          name: "vendor", // Vendor chunk
          chunks: "initial", // Split only the initial chunks (for main libraries like React)
          priority: 10, // Higher priority for vendor chunk
        },
        common: {
          minChunks: 2, // If a module is used in more than 2 chunks, create a common chunk
          priority: 5, // Lower priority compared to vendor
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve static files from dist
    },
    compress: true, // Enable compression
    port: 3000, // Development server runs on port 3000
    historyApiFallback: true, // Enable routing support for single-page apps
  },
};
