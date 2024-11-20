<template>
    <div class="staff-page">
      <h1>รายชื่อบุคลากร</h1>
  
      <!-- ผู้อำนวยการ -->
      <StaffSection
        v-bind="staffData.director"
      />
  
      <!-- ครูประจำชั้น -->
      <StaffSection
        v-bind="staffData.teachers"
      />
  
      <!-- ครูผู้ช่วย -->
      <StaffSection
        v-bind="staffData.assistantTeachers"
      />
  
      <!-- ภารโรง -->
      <StaffSection
        v-bind="staffData.janitor"
      />
    </div>
  </template>
  
  <script>
  import StaffSection from "@/components/StaffSection.vue";
  
  export default {
    name: "StaffPage",
    components: {
      StaffSection,
    },
    data() {
      return {
        staffData: {
          director: {
            position: "ผู้อำนวยการ",
            members: [
              { name: "นายสมชาย ดำรง", image: "https://via.placeholder.com/100" },
            ],
          },
          teachers: {
            position: "ครูประจำชั้น",
            members: [
              { name: "นางสาวมณี สว่าง", image: "https://via.placeholder.com/100" },
              { name: "นายเอกชัย วรรณา", image: "https://via.placeholder.com/100" },
              { name: "นางนภา สายรุ้ง", image: "https://via.placeholder.com/100" },
            ],
          },
          assistantTeachers: {
            position: "ครูผู้ช่วย",
            members: [
              { name: "นายภาคิน ศิริ", image: "https://via.placeholder.com/100" },
              { name: "นางสาวลัดดาวัลย์ พิมพ์", image: "https://via.placeholder.com/100" },
            ],
          },
          janitor: {
            position: "นักการภารโรง",
            members: [
              { name: "นายทองใบ พรหมดี", image: "https://via.placeholder.com/100" },
            ],
          },
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .staff-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  </style>
  