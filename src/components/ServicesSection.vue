<template>

    <section class="services-section right-section bg-light p-3">
      <h2>Our Services</h2>
      <div class="services-list">
        <div class="service" v-for="(service, index) in services" :key="index">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

  </template>
  
  <script>
  export default {
    name: "ServicesSection",
    data() {
      return {
        services: [
          { title: "Service 1", description: "Description for service 1" },
          { title: "Service 2", description: "Description for service 2" },
          { title: "Service 3", description: "Description for service 3" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .services-section {
    padding: 50px 20px;
    text-align: center;
  }
  
  .services-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .service {
    flex: 1 1 calc(30% - 20px);
    background: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  .service h3 {
    font-size: 1.5rem;
  }
  
  .service p {
    font-size: 1rem;
  }
  </style>
  