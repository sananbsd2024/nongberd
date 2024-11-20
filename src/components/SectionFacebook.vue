<template>
  <div class="section-facebook text-center my-4">
    <h3 class="mb-3">{{ title }}</h3>
    <div class="fb-page"
         :data-href="pageUrl"
         data-tabs="timeline"
         data-width="340"
         data-height="500"
         data-small-header="false"
         data-adapt-container-width="true"
         data-hide-cover="false"
         data-show-facepile="true">
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionFacebook",
  props: {
    title: {
      type: String,
      default: "Follow Us on Facebook",
    },
    pageUrl: {
      type: String,
      default: "https://www.facebook.com/facebook",
    },
  },
  mounted() {
    // Load Facebook SDK if not already loaded
    if (!window.FB) {
      (function(d, s, id) {
        let js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
  },
};
</script>

<style scoped>
.section-facebook {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
}
</style>
