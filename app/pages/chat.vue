<template>
  <div>
    <!-- Overriding. make sure definePageMeta 'layout' set to 'false' -->
    <!-- <NuxtLayout name="blue"> -->
    <h1>This is chat</h1>
    <ChatWindow :chat :messages @send-message="sendMessage" />
    <!-- </NuxtLayout> -->
  </div>
</template>

<!-- Layout Setup per Page -->
<script setup lang="ts">
const { chat, messages, sendMessage } = useChat();
definePageMeta({
  layout: false,
});

useHeadSafe({
  title: chat.value.title, // added to <html tag>
  htmlAttrs: {
    class: "my-really-cool-class", // added to <html tag>
  },
  // script: [
  //   {
  //     innerHTML: 'window.analytics = window.analytics || ["hi"]', // not safe, only appliable in useHead, useHeadSafe will decline instead
  //   },
  // ],
});
</script>
