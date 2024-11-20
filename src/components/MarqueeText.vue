<template>
    <div class="marquee-container">
      <div class="marquee-text">{{ text }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MarqueeText",
    props: {
      text: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .marquee-container {
    height: 10%;
    width: 100%;
    overflow: hidden;
    background-color: #f0f0f0;
  }
  
  .marquee-text {
    display: inline-block;
    white-space: nowrap;
    padding-left: 100%;
    animation: marquee 25s linear infinite;
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>
  