<template>
  <div class="Categories">
    <div class="container" style="margin: 75px 0 0">
      <h1 class="title">Popular categories</h1>
      <Swiper
        :direction="horizontal"
        :loop="true"
        :breakpoints="{
          '100': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '600': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          '1100': {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide v-for="crad in Main.data" :key="crad.id">
          <div>
            <img src="../../../../assets/images.png" />
            <h3>{{ crad.name }}</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>

  <!-- End Swiper Frist -->
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
<style>
.container {
  padding: 20px 6%;
  box-sizing: border-box;
  z-index: 10;
}
.mySwiper {
  width: 100%;
}
.title {
  color: var(--mainColor);
  font-size: 40px;
  margin: 0 auto;
  text-align: center;
  width: fit-content;
  border-bottom: 1px solid var(--mainColor);
}
.swiper-slide div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.swiper-slide div img {
  width: 125px;
}

.swiper-slide div h3 {
  font-size: 17px;
  text-align: center;
}
/* Start Cards */
.Categories {
  margin: 15px 0px 0px;
}
@media (max-width: 1080px) {
  .Categories {
    margin: 0px;
  }
}
</style>
