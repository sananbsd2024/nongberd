<template>
  <div id="app" class="app-container">    
    <Header />
    <MainContent>
      <router-view />
    </MainContent>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MainContent from "@/components/MainContent.vue";
import Footer from "@/components/Footer.vue";
import PersonnelPage from "@/components/PersonnelPage.vue";

export default {
  name: "App",
  components: {
    Header,
    MainContent,
    PersonnelPage,
    Footer,
  },
};
</script>

<style>

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f9fafb;
  color: #111827;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1; 
}
</style>

