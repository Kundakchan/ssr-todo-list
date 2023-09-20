<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup></script>

<template>
  <div class="kt-layout">
    <header class="kt-header">
      <HeaderKt />
    </header>
    <main class="kt-content">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}
</style>