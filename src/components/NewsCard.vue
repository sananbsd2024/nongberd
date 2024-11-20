<template>
    <div class="news-card">
      <img :src="news.image" alt="news" class="news-image" />
      <h2 class="news-title">{{ news.title }}</h2>
      <p class="news-summary">{{ news.summary }}</p>
      <router-link :to="`/news/${news.id}`" class="read-more">อ่านเพิ่มเติม</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "NewsCard",
    props: {
      news: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .news-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .news-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 12px;
  }
  
  .news-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .news-summary {
    font-size: 14px;
    color: #555;
  }
  
  .read-more {
    display: inline-block;
    margin-top: 10px;
    color: #007bff;
    text-decoration: none;
  }
  
  .read-more:hover {
    text-decoration: underline;
  }
  </style>
  