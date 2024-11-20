<template>
    <div class="activity-image">
      <img :src="image" alt="กิจกรรม" class="image" />
    </div>
  </template>
  
  <script>
  export default {
    name: "ActivityImage",
    props: {
      image: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .activity-image {
    margin: 10px;
  }
  
  .image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  