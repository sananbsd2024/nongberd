<template>
  <div class="personnel-page">
    <h1 class="page-title">รายชื่อบุคลากร</h1>
    
    <!-- กลุ่มผู้อำนวยการ -->
    <div class="director-section">
      <h2 class="section-title">ผู้อำนวยการ</h2>
      <PersonnelCard :person="director" />
    </div>
    
    <!-- กลุ่มครูประจำชั้น -->
    <div class="teachers-section">
      <h2 class="section-title">ครูประจำชั้น</h2>
      <div class="teachers-grid">
        <PersonnelCard
          v-for="(teacher, index) in teachers"
          :key="index"
          :person="teacher"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PersonnelCard from "@/components/PersonnelCard.vue";

export default {
  name: "PersonnelPage",
  components: {
    PersonnelCard,
  },
  data() {
    return {
      // ข้อมูลผู้อำนวยการ
      director: {
        name: "ดร.สมชาย ใจดี",
        position: "ผู้อำนวยการ",
        image: "https://via.placeholder.com/100",
      },
      // ข้อมูลครูประจำชั้น
      teachers: [
        {
          name: "คุณจิตราภรณ์ สุขสันต์",
          position: "ครูประจำชั้น ป.1",
          image: "https://via.placeholder.com/100",
        },
        {
          name: "นายสุรชัย ทองคำ",
          position: "ครูประจำชั้น ป.2",
          image: "https://via.placeholder.com/100",
        },
        {
          name: "นางสาวสมฤดี ศรีสวัสดิ์",
          position: "ครูประจำชั้น ป.3",
          image: "https://via.placeholder.com/100",
        },
      ],
    };
  },
};
</script>

<style scoped>
.personnel-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.page-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

/* ส่วนผู้อำนวยการ */
.director-section {
  text-align: center;
  margin-bottom: 30px;
}

.section-title {
  font-size: 20px;
  margin-bottom: 15px;
}

/* ส่วนครูประจำชั้น */
.teachers-section {
  text-align: center;
}

.teachers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
</style>
