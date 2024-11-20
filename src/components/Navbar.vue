<template>
    <nav class="navbar">
      <div class="container">
        <!-- Logo -->
        <div class="logo">โรงเรียนบ้านหนองเบิด</div>
  
        <!-- Toggle Button for Small Screens -->
        <button class="toggle-button" @click="toggleMenu">
          <span v-if="!menuOpen">☰</span>
          <span v-else>✖</span>
        </button>
  
        <!-- Links -->
        <ul :class="{ 'nav-links': true, 'active': menuOpen }">
          <li><a href="/">หน้าหลัก</a></li>
          <li><a href="/about">ข้อมูลพื้นฐาน</a></li>
          <li><a href="/staff">คณะครูและบุคลากร</a></li>
          <li><a href="/news">ข่าวประชาสัมพันธ์</a></li>
          <li><a href="/activity">ภาพกิจกรรม</a></li>
          <li><a href="/contact">ติดต่อเรา</a></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import MarqueeText from "@/components/MarqueeText.vue";

  export default {
    name: "Navbar",    
    data() {
      return {
        menuOpen: false, // Menu state
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
    },
    components: {
    MarqueeText,
  },
  };
  </script>
  
  <style scoped>
  /* Navbar container */
  .navbar {
    background: #616060;
    color: white;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  /* Logo */
  .logo {
    background: #616060;
    font-size: 24px;
    font-weight: bold;
  }
  
  /* Toggle button */
  .toggle-button {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
  
  /* Links */
  .nav-links {
    list-style: none;
    color: #2e2d2d;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
  }
  
  .nav-links li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
  
  .nav-links li a:hover {
    text-decoration: underline;
  }
  
  html {
  scroll-behavior: smooth;
}
  /* Responsive Design */
  @media (max-width: 768px) {
    .toggle-button {
      display: block;
    }
  
    .nav-links {
      display: none;
      flex-direction: column;
      background: #444;
      position: absolute;
      top: 60px;
      right: 20px;
      padding: 10px;
      border-radius: 8px;
    }
  
    .nav-links.active {
      display: flex;
    }
  
    .nav-links li {
      margin: 10px 0;
    }
  }
  </style>
  