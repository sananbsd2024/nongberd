<template>
    <div class="right-section bg-light p-3">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <ul class="list-group">
        <li v-for="(item, index) in items" :key="index" class="list-group-item">
          {{ item }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "RightSection",
    props: {
      title: {
        type: String,
        default: "หนังสือราชการ",
      },
      content: {
        type: String,
        default: "This is the content of the right section.",
      },
      items: {
        type: Array,
        default: () => ["Item 1", "Item 2", "Item 3"],
      },
    },
  };
  </script>
  
  <style scoped>
  .right-section {
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  .right-section h2 {
    color: #007bff;
  }
  </style>
  