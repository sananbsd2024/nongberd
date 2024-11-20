<template>
    <aside class="sidebar-menu">
      <h2>Menu</h2>
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: "SidebarMenu",
    data() {
      return {
        menuItems: [
          { name: "Home", link: "/" },
          { name: "About", link: "/about" },
          { name: "Services", link: "/services" },
          { name: "Contact", link: "/contact" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .sidebar-menu {
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #333;
    color: white;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  
  .sidebar-menu h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
  
  .sidebar-menu ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar-menu li {
    margin-bottom: 15px;
  }
  
  .sidebar-menu a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
  
  .sidebar-menu a:hover {
    color: #00bcd4;
  }
  </style>
  