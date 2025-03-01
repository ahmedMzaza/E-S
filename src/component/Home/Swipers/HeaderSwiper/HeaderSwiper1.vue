<template>
  <!-- Start Swiper Second -->
  <div class="container">
    <Swiper
      :direction="horizontal"
      :loop="true"
      :slidesPerView="1"
      :speed="1500"
      :spaceBetween="20"
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      :navigation="true"
      class="mySwiper"
    >
      <SwiperSlide v-for="crad in Main" :key="crad.id">
        <img src="../../../../assets/swiper.jpg" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      Main: [],
      modules: [Autoplay, Navigation],
    };
  },
  mounted() {
    fetch("https://drwessamhabib.com/public/api/category")
      .then((res) => res.json())
      .then((data) => {
        this.Main = data;
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    open(fla) {
      console.log(this.Main.data);
      console.log(this.Main.data.length);
      console.log(fla);
      console.log(localStorage.getItem("token"));
    },
  },
};
</script>
<style scoped>
.container {
  padding: 20px 6%;
  box-sizing: border-box;
  z-index: 10;
}
.mySwiper {
  width: 100%;
}

.swiper-slide div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.swiper-slide img {
  width: 100%;
  height: 450px;
}

/* End Cards */
</style>
