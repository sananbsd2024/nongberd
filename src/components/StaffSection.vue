<template>
    <div class="staff-section">
      <h2 class="section-title">{{ position }}</h2>
      <div class="staff-list">
        <StaffMember
          v-for="(member, index) in members"
          :key="index"
          :name="member.name"
          :image="member.image"
        />
      </div>
    </div>
  </template>
  
  <script>
  import StaffMember from "@/components/StaffMember.vue";
  
  export default {
    name: "StaffSection",
    props: {
      position: {
        type: String,
        required: true,
      },
      members: {
        type: Array,
        required: true,
      },
    },
    components: {
      StaffMember,
    },
  };
  </script>
  
  <style scoped>
  .staff-section {
    margin: 20px 0;
  }
  .section-title {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }
  .staff-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
  </style>
  