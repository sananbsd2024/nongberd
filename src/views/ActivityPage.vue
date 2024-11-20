<template>
    <div class="activity-page">
      <h1>กิจกรรมของเรา</h1>
  
      <!-- กิจกรรมที่มีภาพ -->
      <ActivityGallery :images="activityImages" />
    </div>
  </template>
  
  <script>
  import ActivityGallery from "@/components/ActivityGallery.vue";
  
  export default {
    name: "ActivityPage",
    components: {
      ActivityGallery,
    },
    data() {
      return {
        activityImages: [
          "https://via.placeholder.com/100",
          "https://via.placeholder.com/100",
          "https://via.placeholder.com/100",
          "https://via.placeholder.com/100",
          "https://via.placeholder.com/100",
          "https://via.placeholder.com/100",
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .activity-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  </style>
  