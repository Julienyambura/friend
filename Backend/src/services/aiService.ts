import axios from "axios";

export const validateAnswersWithAI = async (
  answers: Record<string, string>
): Promise<boolean> => {
  try {
    // Replace this URL with your AI service endpoint
    const response = await axios.post("https://gemini.google.com/app", {
      answers,
    });
    return response.data.isValid;
  } catch (error) {
    console.error("Error validating answers with AI:", error);
    return false;
  }
};
