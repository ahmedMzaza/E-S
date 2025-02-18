<template>
  <div class="container">
    <h1 class="title">Latest Products</h1>
    <Swiper
      :spaceBetween="10"
      :breakpoints="{
        '100': {
          slidesPerView: 1,
        },
        '680': {
          slidesPerView: 2,
        },
        '980': {
          slidesPerView: 3,
        },
        '1100': {
          slidesPerView: 4,
        },
      }"
      :direction="horizontal"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper latestS"
    >
      <SwiperSlide>
        <div class="latest">
          <img src="../../../assets/cards/card1.png" alt="" />
          <div class="content">
            <h4>Digital Thermometer X30-Pro</h4>
            <h3>$29.56</h3>
            <div class="icons">
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="latest">
          <img src="../../../assets/cards/card1.png" alt="" />
          <div class="content">
            <h4>Digital Thermometer X30-Pro</h4>
            <h3>$29.56</h3>
            <div class="icons">
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="latest">
          <img src="../../../assets/cards/card1.png" alt="" />
          <div class="content">
            <h4>Digital Thermometer X30-Pro</h4>
            <h3>$29.56</h3>
            <div class="icons">
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="latest">
          <img src="../../../assets/cards/card1.png" alt="" />
          <div class="content">
            <h4>Digital Thermometer X30-Pro</h4>
            <h3>$29.56</h3>
            <div class="icons">
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="latest">
          <img src="../../../assets/cards/card1.png" alt="" />
          <div class="content">
            <h4>Digital Thermometer X30-Pro</h4>
            <h3>$29.56</h3>
            <div class="icons">
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="latest">
          <img src="../../../assets/cards/card1.png" alt="" />
          <div class="content">
            <h4>Digital Thermometer X30-Pro</h4>
            <h3>$29.56</h3>
            <div class="icons">
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="latest">
          <img src="../../../assets/cards/card1.png" alt="" />
          <div class="content">
            <h4>Digital Thermometer X30-Pro</h4>
            <h3>$29.56</h3>
            <div class="icons">
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="latest">
          <img src="../../../assets/cards/card1.png" alt="" />
          <div class="content">
            <h4>Digital Thermometer X30-Pro</h4>
            <h3>$29.56</h3>
            <div class="icons">
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
              <v-icon class="mdi mdi-star"></v-icon>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
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
      modules: [Autoplay],
    };
  },
};
</script>
<style>
/* Offer */
.title {
  color: var(--mainColor);
  font-size: 40px;
  margin: 0 auto;
  text-align: center;
  width: fit-content;
  border-bottom: 1px solid var(--mainColor);
}
.container {
  padding: 20px 6%;
  box-sizing: border-box;
  z-index: 10;
}
.mySwiper {
  width: 99%;
}

.swiper-slide div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.swiper-slide div img {
  width: 180px;
}

.swiper-slide div h3 {
  font-size: 22px;
  text-align: center;
}
/* Start Cards */
.latestS {
  margin: 10px 0;
}
.latest:hover img {
  transform: scale(1.1);
}
.latest {
  border: 1px solid #777;
  transition: 1s;
  padding: 20px 15px;
}
.latest img {
  transition: 1s;
}
.latest .content {
  padding: 30px 15px;
  align-items: end;
  gap: 5px;
}

.latest .content .icons {
  flex-direction: row;
  color: orange;
}
</style>
