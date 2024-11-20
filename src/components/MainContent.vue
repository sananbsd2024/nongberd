<template>
    <main class="main-content">
      <slot />
    </main>
  </template>
  
  <script>
  export default {
    name: "MainContent",
  };
  </script>
  
  <style scoped>
  .main-content {
    padding: 2rem;
  }
  </style>
  