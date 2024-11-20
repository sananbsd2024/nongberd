<template>
    <div class="left-section bg-light p-3">
      <h4>{{ title }}</h4>
      <ul class="nav flex-column">
        <li v-for="(menuItem, index) in menuItems" :key="index" class="nav-item">
          <a class="nav-link" :href="menuItem.link">{{ menuItem.label }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "LeftSection",
    props: {
      title: {
        type: String,
        default: "Left Section",
      },
      menuItems: {
        type: Array,
        default: () => [
          { label: "Home", link: "#" },
          { label: "About", link: "#" },
          { label: "Contact", link: "#" },
        ],
      },
    },
  };
  </script>
  
  <style scoped>
  .left-section {
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  .left-section h4 {
    color: #007bff;
  }
  .left-section .nav-link {
    color: #333;
    transition: color 0.3s ease;
  }
  .left-section .nav-link:hover {
    color: #007bff;
  }
  </style>