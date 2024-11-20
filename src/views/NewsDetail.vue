<template>
    <div class="news-detail">
      <h1>{{ news.title }}</h1>
      <img :src="news.image" alt="news" class="news-image" />
      <p class="news-content">{{ news.content }}</p>
      <router-link to="/news" class="back-link">กลับไปยังข่าวทั้งหมด</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "NewsDetail",
    data() {
      return {
        news: {
          id: 0,
          title: "",
          content: "",
          image: "",
        },
      };
    },
    created() {
      const id = parseInt(this.$route.params.id);
      const newsData = [
        {
          id: 1,
          title: "ประกาศหยุดเรียนเนื่องในวันสำคัญ",
          content:
            "โรงเรียนจะหยุดเรียนในวันที่ 5 ธันวาคม เนื่องในวันพ่อแห่งชาติ โปรดตรวจสอบตารางเวลาในวันถัดไป.",
          image: "https://via.placeholder.com/800x400",
        },
        {
          id: 2,
          title: "งานสัปดาห์วิชาการ",
          content:
            "ขอเชิญเข้าร่วมงานสัปดาห์วิชาการในวันที่ 12-14 มกราคม 2567 ที่อาคารกิจกรรมกลางของโรงเรียน.",
          image: "https://via.placeholder.com/800x400",
        },
        {
          id: 3,
          title: "เปิดรับสมัครนักเรียนใหม่",
          content:
            "เปิดรับสมัครนักเรียนใหม่สำหรับปีการศึกษา 2567 ตั้งแต่วันที่ 1 มกราคม 2567.",
          image: "https://via.placeholder.com/800x400",
        },
      ];
      this.news = newsData.find((item) => item.id === id);
    },
  };
  </script>
  
  <style scoped>
  .news-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .news-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  
  .news-content {
    font-size: 16px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .back-link {
    color: #007bff;
    text-decoration: none;
  }
  
  .back-link:hover {
    text-decoration: underline;
  }
  </style>
  