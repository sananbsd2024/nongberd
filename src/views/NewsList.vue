<template>
    <div class="news-list">
      <h1>ข่าวประชาสัมพันธ์</h1>
      <div v-for="newsItem in news" :key="newsItem.id">
        <NewsCard :news="newsItem" />
      </div>
    </div>
  </template>
  
  <script>
  import NewsCard from "@/components/NewsCard.vue";
  
  export default {
    name: "NewsList",
    components: {
      NewsCard,
    },
    data() {
      return {
        news: [
          {
            id: 1,
            title: "ประกาศหยุดเรียนเนื่องในวันสำคัญ",
            summary: "โรงเรียนจะหยุดเรียนในวันที่ 5 ธันวาคม เนื่องในวันพ่อแห่งชาติ",
            image: "https://via.placeholder.com/800x400",
          },
          {
            id: 2,
            title: "งานสัปดาห์วิชาการ",
            summary: "ขอเชิญเข้าร่วมงานสัปดาห์วิชาการในวันที่ 12-14 มกราคม 2567",
            image: "https://via.placeholder.com/800x400",
          },
          {
            id: 3,
            title: "เปิดรับสมัครนักเรียนใหม่",
            summary: "เปิดรับสมัครนักเรียนใหม่สำหรับปีการศึกษา 2567",
            image: "https://via.placeholder.com/800x400",
          },        
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .news-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    /* text-align: center; */
    margin-bottom: 20px;
    font-size: 24px;
  }
  </style>
  