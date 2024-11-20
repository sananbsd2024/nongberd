<template>
  <header class="header">
    <ImageSlider />   


  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler ms-auto" type="button" 
  data-toggle="collapse" data-target="#navbarTogglerDemo01" 
  aria-controls="navbarTogglerDemo01" aria-expanded="false" 
  aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="/">หน้าหลัก <span class="sr-only">(current)</span></a>
      </li>
        <li class="nav-item"><a class="nav-link" href="/about">ข้อมูลพื้นฐาน</a></li>
        <li class="nav-item"><a class="nav-link" href="/staff">คณะครูและบุคลากร</a></li>
        <li class="nav-item"><a class="nav-link" href="/news">ข่าวประชาสัมพันธ์</a></li>
        <li class="nav-item"><a class="nav-link" href="/activity">ภาพกิจกรรม</a></li>
        <li class="nav-item"><a class="nav-link" href="/contact">ติดต่อเรา</a></li>
    </ul>
  </div>
</nav> -->


<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container">
      <!-- โลโก้ -->
      <a class="navbar-brand" href="#">Logo</a>
      
      <!-- ปุ่ม Toggle -->
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- รายการเมนู -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
        <a class="nav-link" href="/">หน้าหลัก <span class="sr-only">(current)</span></a>
      </li>
        <li class="nav-item"><a class="nav-link" href="/about">ข้อมูลพื้นฐาน</a></li>
        <li class="nav-item"><a class="nav-link" href="/staff">คณะครูและบุคลากร</a></li>
        <li class="nav-item"><a class="nav-link" href="/news">ข่าวประชาสัมพันธ์</a></li>
        <li class="nav-item"><a class="nav-link" href="/activity">ภาพกิจกรรม</a></li>
        <li class="nav-item"><a class="nav-link" href="/contact">ติดต่อเรา</a></li>
        </ul>
      </div>
    </div>
  </nav>
<br />
    <MarqueeText :text="'ข่าวสารด่วน: เปิดรับสมัครนักเรียนใหม่ปีการศึกษา พ.ศ.2568!'" />
  </header>
  <!-- <Navbar /> -->
</template>

<script>
import ImageSlider from "./ImageSlider.vue";
import MarqueeText from "@/components/MarqueeText.vue";
// import Navbar from "@/components/Navbar.vue";

export default {
  name: "Header",
  components: {
    ImageSlider,
    MarqueeText,
    // Navbar,
  },
};

</script>

<style scoped>
.header {
  position: relative;
}

nav {
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.menu {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
}

.menu li a {
  text-decoration: none;
  color: white;
  background: rgba(107, 34, 34, 0.5);
  padding: 10px 15px;
  border-radius: 5px;
}

.menu li a:hover {
  background: rgba(0, 0, 0, 0.8);
}

.navbar-toggler {
  border: 1px solid #fff; /* เพิ่มเส้นขอบปุ่ม */
  padding: 8px; /* เพิ่มขนาดปุ่ม */
}
.navbar-toggler-icon {
  background-color: #535a58; /* เปลี่ยนสีไอคอน */
}
</style>
