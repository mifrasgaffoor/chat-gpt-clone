

import { OpenAIApi, Configuration } from "openai";

const apiKey = "sk-jg7CcK9KjZ";
const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAi(message) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      temperature: 0.7,
      max_tokens: 250,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error sending message to OpenAI:", error);
    throw error; // Handle the error as needed
  }
}
