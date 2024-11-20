<template>
  <div class="map-container">
    <iframe
      :src="computedMapSrc"
      frameborder="0"
      allowfullscreen
      :width="width"
      :height="height"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  props: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    zoom: {
      type: Number,
      default: 13, // ค่าเริ่มต้นของระดับการซูม
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "450px",
    },
  },
  computed: {
    computedMapSrc() {
      return `https://maps.google.com/maps?q=${this.latitude},${this.longitude}&t=&z=${this.zoom}&ie=UTF8&iwloc=&output=embed`;
    },
  },
};
</script>

<style scoped>
.map-container {
  width: 100%;
  max-width: 100%; /* จำกัดขนาดให้ไม่เกินหน้าจอ */
  overflow: hidden;
  position: relative;
}

.map-container iframe {
  border: none; /* ซ่อนขอบ */
}
</style>
