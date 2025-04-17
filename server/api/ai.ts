import {
  createOllamaModel,
  createOpenAIModel,
  generateChatResponse,
} from "../services/ai-service";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { messages } = body;
  const id = messages.length.toString();
  // const lastMessage = messages[messages.length - 1];

  // define openaiKey
  const openaiApiKey = useRuntimeConfig().openaiApiKey;
  const openaiModel = createOpenAIModel(openaiApiKey);

  const ollamaModel = createOllamaModel();
  console.log(ollamaModel);
  const response = await generateChatResponse(openaiModel, messages);

  // console log to server
  console.log(useRuntimeConfig());
  // returning object
  return {
    id,
    role: "assistant",
    content: `${response}`,
  };
});
