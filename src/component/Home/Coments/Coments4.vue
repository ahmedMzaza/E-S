<template>
  <div class="latast">
    <div class="container">
      <h1 class="title">Latest reviews</h1>
      <Swiper
        :loop="true"
        :pagination="true"
        :breakpoints="{
          '100': {
            slidesPerView: 1,
          },
          '600': {
            slidesPerView: 4,
          },
          '1100': {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper latestS"
      >
        <SwiperSlide>
          <div class="latest1">
            <div class="content">
              <p>
                I ordered on Friday evening and on Monday at 12:30 the package
                was with me. I have never encountered such a fast order
                processing.
              </p>

              <h4>Dianne Russell</h4>
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
          <div class="latest1">
            <div class="content">
              <p>
                I ordered on Friday evening and on Monday at 12:30 the package
                was with me. I have never encountered such a fast order
                processing.
              </p>

              <h4>Dianne Russell</h4>
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
          <div class="latest1">
            <div class="content">
              <p>
                I ordered on Friday evening and on Monday at 12:30 the package
                was with me. I have never encountered such a fast order
                processing.
              </p>

              <h4>Dianne Russell</h4>

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
          <div class="latest1">
            <div class="content">
              <p>
                I ordered on Friday evening and on Monday at 12:30 the package
                was with me. I have never encountered such a fast order
                processing.
              </p>

              <h4>Dianne Russell</h4>
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
          <div class="latest1">
            <div class="content">
              <p>
                I ordered on Friday evening and on Monday at 12:30 the package
                was with me. I have never encountered such a fast order
                processing.
              </p>

              <h4>Dianne Russell</h4>

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
          <div class="latest1">
            <div class="content">
              <p>
                I ordered on Friday evening and on Monday at 12:30 the package
                was with me. I have never encountered such a fast order
                processing.
              </p>

              <h4>Dianne Russell</h4>
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
          <div class="latest1">
            <div class="content">
              <p>
                I ordered on Friday evening and on Monday at 12:30 the package
                was with me. I have never encountered such a fast order
                processing.
              </p>

              <h4>Dianne Russell</h4>

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
          <div class="latest1">
            <div class="content">
              <p>
                I ordered on Friday evening and on Monday at 12:30 the package
                was with me. I have never encountered such a fast order
                processing.
              </p>
              <h4>Dianne Russell</h4>

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
/* latast */
.latast .swiper-slide .latest1 {
  border: none;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 7px;
  align-items: end;
}
.latast .swiper-slide {
  background-color: white;
  color: #103178;
  border-radius: 5px;
}
.latast .swiper-slide p {
  text-align: end;
  font-weight: 700;
}
.latast .swiper-slide h4 {
  font-size: 24px;
}
.latast {
  background-image: url(../../../assets/roundbg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fdf6ed;
  padding: 50px 0;
  margin: 40px 0;
}
/* latast */

.latest1 .content {
  padding: 30px;
  align-items: end;
  gap: 5px;
}

.latest1 .content .icons {
  flex-direction: row;
  color: orange;
}
</style>
