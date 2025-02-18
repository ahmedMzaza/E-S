<template>
  <div class="container" style="padding: 0px; height: 85vh">
    <Swiper
      :direction="horizontal"
      :loop="true"
      :slidesPerView="1"
      :speed="500"
      :spaceBetween="10"
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :effect="'fade'"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      :navigation="true"
      class="mySwiper swiper-1"
    >
      <SwiperSlide
        :style="{ backgroundColor: slide.backGround }"
        v-for="(slide, i) in swiperDate"
        :key="i"
      >
        <img :src="slide.image" />
        <div class="text-content">
          <h1>{{ slide.title }}</h1>
          <p>
            {{ slide.description }}
          </p>
          <button>Show More</button>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";

import "swiper/css/effect-fade";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      Main: [],
      swiperDate: [
        {
          title: "Candid Whitening Kit",
          description: "Only in this week. Don’t misss!",
          image: require("../../../../assets/slide1.png"),
          backGround: "#daecfa",
        },
        {
          title: "Get rid of all bacteria!",
          description: "Just a few seconds to measure your body temperature.",
          image: require("../../../../assets/slide4.png"),
          backGround: "#ffc900",
        },
        {
          title: "Antibacterial Medical Mask",
          description: "Get rid of all bacteria!",
          image: require("../../../../assets/slide3.png"),
          backGround: "#f0f2f5",
        },
      ],
      modules: [EffectFade, Autoplay, Navigation],
    };
  },
  //   mounted() {
  //     fetch("https://drwessamhabib.com/public/api/category")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         this.Main = data;
  //         console.log(data);
  //       })
  //       .catch((err) => console.log(err.message));
  //   },
  //   methods: {
  //     open(fla) {
  //       console.log(this.Main.data);
  //       console.log(this.Main.data.length);
  //       console.log(fla);
  //       console.log(localStorage.getItem("token"));
  //     },
  //   },
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
  height: 100%;
}
.swiper-1 .swiper-slide .text-content p {
  font-size: 24px;
}
.swiper-1 .swiper-slide .text-content h1 {
  font-size: 95px;
  line-height: 1;
}
.swiper-1 .swiper-slide .text-content button:hover {
  background-color: white;
  border: 1px solid #103178;
  color: #103178;
}
.swiper-1 .swiper-slide .text-content button {
  padding: 10px 20px;
  background-color: #103178;
  border: 1px solid #103178;
  transition: 0.8s;
  border-radius: 29px;
  color: white;
  font-weight: bold;
  font-size: 25px;
  margin-top: 10px;
}
.swiper-1 .swiper-slide .text-content {
  color: #103178;
  width: 50%;
  height: 50%;

  font-weight: bold;
  display: flex;
  text-align: end;
  flex-direction: column;
  align-items: end;
  justify-content: start;
  padding: 110px;
}
.swiper-1 .swiper-slide {
  /* margin: 40px 0 0 0px; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  /* background-image: url(../../../../assets/slider.jpg); */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.swiper-slide img {
  width: 50%;
  height: 622px;
}
/* .swiper-slide div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
} */
@media (max-width: 780px) {
  .swiper-1 .swiper-slide img {
    height: 50%;
  }
  .swiper-1 .swiper-slide .text-content {
    padding: 40px 0 0;
    align-items: center;
    text-align: center;
  }
  .swiper-1 .swiper-slide {
    flex-direction: column-reverse;
  }
}
@media (max-width: 1080px) {
  .swiper-1 .swiper-slide .text-content h1 {
    font-size: 45px;
  }
  .swiper-1 .swiper-slide .text-content button {
    font-size: 20px;
  }
}
</style>
