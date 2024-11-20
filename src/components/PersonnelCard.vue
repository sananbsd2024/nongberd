<template>
  <div class="personnel-card">
    <img :src="person.image" :alt="person.name" class="person-image" />
    <h2 class="person-name">{{ person.name }}</h2>
    <p class="person-position">{{ person.position }}</p>
  </div>
</template>

<script>
export default {
  name: "PersonnelCard",
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.personnel-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.person-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
}

.person-name {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.person-position {
  font-size: 14px;
  color: #555;
}
</style>
