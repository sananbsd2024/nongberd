<template>
  <div>
    <!-- <Navbar /> -->
    <!-- <main class="home">
      <h1>ยินดีต้อนรับสู่เว็บไซต์ของเรา</h1>
    </main> -->
    <Home />
    <!-- <NewsList /> -->
    <!-- <MapPage /> -->
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";
import Home from './Home.vue';
// import NewsList from './NewsList.vue';
// import MapPage from "@/views/MapPage.vue";

export default {
  name: "HomePage",
  components: {
    Home,
    // NewsList,
    // MapPage,
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  margin: 20px;
}

h1 {
  font-size: 32px;
}

p {
  font-size: 18px;
  line-height: 1.5;
}
</style>
