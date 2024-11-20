<template>
    <div class="director-profile">
      <img :src="image" alt="ผู้อำนวยการ" class="director-image" />
      <div class="director-info">
        <h2>{{ name }}</h2>
        <p>{{ position }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DirectorProfile",
    props: {
      image: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .director-profile {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .director-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 20px;
    object-fit: cover;
  }
  
  .director-info {
    text-align: left;
  }
  
  .director-info h2 {
    font-size: 24px;
    margin: 0;
  }
  
  .director-info p {
    font-size: 18px;
    color: gray;
  }
  </style>
  