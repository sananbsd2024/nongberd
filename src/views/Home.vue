<template>
 
    <!-- <div class="home"> -->
      <!-- <HeroSection /> -->
      <!-- <AboutSection /> -->
      <!-- <ServicesSection /> -->
      <!-- <MapPage /> -->
      <!-- <SidebarMenu /> -->
      <!-- <ContactSection /> -->
    <!-- </div> -->

  <div class="container">
  <main class="row my-4">
    <section class="col-md-3 bg-light p-3">
      <img src="https://via.placeholder.com/100" alt="" class="rounded mx-auto d-block" width="200px">
<br />
      <h4 class="text-center">นายประเสริฐ กองสุข</h4>
      <p class="text-center">ผู้อำนวยการโรงเรียน</p>
      <LeftSection />

          <!-- Section Facebook -->
    <SectionFacebook
      title="Nong Berd"
      pageUrl="https://www.facebook.com/p/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%9A%E0%B8%B4%E0%B8%94-100085911686870/"
    />
    </section>
    <section class="col-md-9 bg-white p-3">

      <ServicesSection />
      <NewsList />
      <MapPage />
      <RightSection />
      <h2>Right Section</h2>
      <p>Content for the right section.</p>
    </section>
  </main>
</div>


  </template>
  
  <script>
import ServicesSection from "@/components/ServicesSection.vue";
import NewsList from './NewsList.vue';
import MapPage from "@/views/MapPage.vue";
import RightSection from "@/components/RightSection.vue";
import LeftSection from "@/components/LeftSection.vue";
import SectionFacebook from "@/components/SectionFacebook.vue";
  
  export default {
    name: "Home",
    components: { 
    ServicesSection,
    NewsList,
    MapPage,
    RightSection,
    LeftSection,
    SectionFacebook,
    },
  };
  </script>
  
  <style>
  .home {
    padding-top: 70px; /* Adjust to account for fixed navbar */
  }
  </style>
  