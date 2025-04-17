import type { ChatMessage } from "../types";
// import { MOCK_CHAT } from "./mockData";

// Defining default function. (like main function)
// AUTO IMPORT
export default function useChat(chatId: string) {
  // useSomeComposable(); // contoh mengambil composable, harus di top level
  const { chats } = useChats();
  const chat = computed(() => chats.value.find((c) => c.id == chatId));

  // defining reactive state
  // const chat = ref<Chat>(MOCK_CHAT);
  const messages = computed<ChatMessage[]>(() => chat.value?.messages || []);

  function createMessage(message: string, role: ChatMessage["role"]) {
    const id = messages.value.length.toString();

    return {
      id,
      role,
      content: message,
    };
  }

  async function sendMessage(message: string) {
    messages.value.push(createMessage(message, "user"));

    // with $fetch we dont need json parsing
    const data = await $fetch<ChatMessage>("/api/ai", {
      method: "POST",
      body: {
        messages: messages.value,
      },
    });

    messages.value.push(data);
    // setTimeout(() => {
    //   messages.value.push(createMessage(`You said: ${message}`, "assistant"));
    // }, 200);
  }

  return {
    chat,
    messages,
    sendMessage,
  };
}
