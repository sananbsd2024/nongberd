<template>
    <div class="staff-member">
      <img :src="image" :alt="name" class="staff-image" />
      <h3 class="staff-name">{{ name }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    name: "StaffMember",
    props: {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .staff-member {
    text-align: center;
    margin: 10px;
  }
  .staff-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 8px;
  }
  .staff-name {
    font-size: 14px;
    font-weight: bold;
  }
  </style>
  