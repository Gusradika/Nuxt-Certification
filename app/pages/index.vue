<template>
  <UContainer class="page-container">
    <h1 class="title">Nuxt Chat</h1>
    <span class="text-2xl font-bold mb-2">
      {{ appConfig.title }}
    </span>
    <UButton class="button" @click="handleCreateChat"> Start Chat </UButton>
  </UContainer>
</template>
<script setup lang="ts">
const appConfig = useAppConfig();

const { createChat } = useChats();
function handleCreateChat() {
  createChat();
}
</script>
<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.title {
  font-size: 2.25rem;
  font-weight: bold;
}

.button {
  margin-top: 1rem;
}
</style>
