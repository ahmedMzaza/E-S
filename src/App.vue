<template>
  <!-- <NavBar /> -->
  <router-view />

  <Footer />
</template>

<script>
import vuetest from "./views/navtest.vue";
import NavBar from "./component/NavBar/NavBar.vue";
import Footer from "./component/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
    NavBar,
  },
};
</script>

<style>
html.active {
  overflow: hidden !important;
}
/* Font google */
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap");
:root {
  --textColor: #212121;
  --mainColor: #1e90ff;
  --MainColor: white;
  --FTWeight: 700;
  --FTSize: 1.4rem;
  --swiper-pagination-color: #1e90ff;
  --swiper-navigation-color: #1e90ff;
}

* {
  font-family: "Tajawal", sans-serif;
  padding: 0;
  text-decoration: none;
  margin: 0px;
  box-sizing: border-box;
  list-style-type: none;
  text-transform: capitalize;
}

body {
  direction: rtl;
}
</style>
