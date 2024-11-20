<template>
  <div class="map-page">
    <h1>Our Location</h1>
    <p>Find us on the map below:</p>
    <!-- ใช้ MapComponent พร้อมส่งค่า Latitude และ Longitude -->
    <MapComponent
      :latitude="15.9366368"
      :longitude="103.7931216"
      :zoom="15"
      width="100%"
      height="500px"
    />
  </div>
</template>

<script>
import MapComponent from "@/components/MapComponent.vue";

export default {
  name: "MapPage",
  components: {
    MapComponent,
  },
};
</script>

<style>
.map-page {
  text-align: center;
  margin: 20px auto;
}

.map-page h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}
</style>
