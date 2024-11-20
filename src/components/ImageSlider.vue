<template>
    <div class="slider-container">
      <div class="slider">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="slide"
          :class="{ active: index === currentIndex }"
        >
          <img :src="image" alt="Slide Image" />
        </div>
      </div>
      <div class="navigation">
        <button @click="prevSlide">&#10094;</button>
        <button @click="nextSlide">&#10095;</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ImageSlider",
    data() {
      return {
        currentIndex: 0,
        images: [
          require("@/assets/images/slide1.jpg"),
          require("@/assets/images/slide2.jpg"),
          require("@/assets/images/slide3.jpg"),
          require("@/assets/images/slide4.jpg"),
          require("@/assets/images/slide5.jpg"),
        ],
        intervalId: null, // สำหรับจัดการ setInterval
      };
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevSlide() {
        this.currentIndex =
          (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      autoSlide() {
        this.intervalId = setInterval(() => {
          this.nextSlide(); // ใช้ arrow function เพื่อไม่ให้ this หลุดบริบท
        }, 5000); // เปลี่ยน slide ทุก 5 วินาที
      },
      stopAutoSlide() {
        clearInterval(this.intervalId);
      },
    },
    mounted() {
      this.autoSlide(); // เรียก autoSlide เมื่อ component ถูก mount
    },
    beforeUnmount() {
      this.stopAutoSlide(); // หยุด autoSlide เมื่อ component ถูก unmount
    },
  };
  </script>
  
  <style scoped>
.slider-container {
  position: relative;
  width: 100%; /* กำหนดความกว้างของ slider */
  height: 100%; /* กำหนดความสูงของ slider */
  margin: auto;
  overflow: hidden;
  border: 2px solid #ccc; /* ใส่ border เพื่อดูขอบ */
  border-radius: 10px; /* ทำมุมโค้ง */
}
  
  .slider {
    display: flex;
    position: relative;
    transition: transform 0.5s ease-in-out;
  }
  
  .slide {
    flex: 0 0 100%;
    transition: opacity 0.5s ease;
    opacity: 0;
    position: absolute;
  }
  
  .slide.active {
    opacity: 1;
    position: relative;
  }
  
  img {
    width: 100%;
    display: block;
  }
  
  .navigation {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }
  
  button {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1.5rem;
  }
  
  button:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  </style>
  