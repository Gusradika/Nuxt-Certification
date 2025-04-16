<template>
  <div>
    <!-- Overriding. make sure definePageMeta 'layout' set to 'false' -->
    <!-- <NuxtLayout name="blue"> -->
    <h1>This is chat</h1>
    <ChatWindow />
    <!-- </NuxtLayout> -->
  </div>
</template>

<!-- Layout Setup per Page -->
<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
