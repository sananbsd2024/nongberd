<template>
    <div class="activity-gallery">
      <h2>แกลอรี่กิจกรรม</h2>
      <div class="image-list">
        <ActivityImage
          v-for="(image, index) in images"
          :key="index"
          :image="image"
        />
      </div>
    </div>
  </template>
  
  <script>
  import ActivityImage from "@/components/ActivityImage.vue";
  
  export default {
    name: "ActivityGallery",
    components: {
      ActivityImage,
    },
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .activity-gallery {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .image-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }
  </style>
  