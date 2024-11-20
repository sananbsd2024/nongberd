<template>
    <div class="list-menu">
      <h3 class="menu-header">เมนู</h3>
      <ul>
        <li><a href="#home">หน้าแรก</a></li>
        <li><a href="#about">เกี่ยวกับเรา</a></li>
        <li><a href="#services">บริการ</a></li>
        <li><a href="#contact">ติดต่อเรา</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "ListMenu",
  };
  </script>
  
  <style scoped>
  /* สไตล์ List Menu */
  .list-menu {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    max-width: 250px;
  }
  
  .menu-header {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin: 10px 0;
  }
  
  a {
    text-decoration: none;
    color: #007bff;
    font-size: 16px;
  }
  
  a:hover {
    color: #0056b3;
  }
  </style>
  