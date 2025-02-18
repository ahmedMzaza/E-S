<template>
  <div class="ho">
    <div class="container">
      <div class="cardInput">
        <v-col cols="12">
          <v-text-field
            label="Full Name"
            background-color="white"
            color="primary"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Phone"
            background-color="white"
            color="primary"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Email"
            background-color="white"
            color="primary"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Comment"
            background-color="white"
            variant="outlined"
            color="primary"
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-btn color="primary"> Button </v-btn>
        </v-col>
      </div>
    </div>
    <div class="container" style="padding: 0px">
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
          delay: 10000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        :navigation="true"
        class="mySwiper"
      >
        <SwiperSlide>
          <v-card class="card1">
            <main>
              <h1>Name Developer</h1>
              <h5>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                obcaecati optio eveniet officiis ad, iure enim perspiciatis quod
                dolor voluptatum harum earum pariatur accusantium reprehenderit,
                deserunt modi aperiam eligendi assumenda?
              </h5>
            </main>
          </v-card>
        </SwiperSlide>
        <SwiperSlide>
          <v-card class="card2">
            <main>
              <h1>Name Developer</h1>
              <h5>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                obcaecati optio eveniet officiis ad, iure enim perspiciatis quod
                dolor voluptatum harum earum pariatur accusantium reprehenderit,
                deserunt modi aperiam eligendi assumenda?
              </h5>
            </main>
          </v-card>
        </SwiperSlide>
        <SwiperSlide>
          <v-card class="card3">
            <main>
              <h1>Name Developer</h1>
              <h5>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                obcaecati optio eveniet officiis ad, iure enim perspiciatis quod
                dolor voluptatum harum earum pariatur accusantium reprehenderit,
                deserunt modi aperiam eligendi assumenda?
              </h5>
            </main>
          </v-card>
        </SwiperSlide>
        <SwiperSlide>
          <v-card class="card4">
            <main>
              <h1>Name Developer</h1>
              <h5>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                obcaecati optio eveniet officiis ad, iure enim perspiciatis quod
                dolor voluptatum harum earum pariatur accusantium reprehenderit,
                deserunt modi aperiam eligendi assumenda?
              </h5>
            </main>
          </v-card>
        </SwiperSlide>
      </Swiper>
    </div>
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
};
</script>
<style scoped>
div.ho {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 1000;
  top: 0px;
  left: 0px;
  display: flex;
}
.v-field__field {
  background-color: white !important;
  border-radius: 5px !important;
}
.cardInput input {
}
main {
  position: absolute;
  text-align: end;
  padding: 0 15px 35px;
  color: var(--MainColor);
  font-weight: bold;
}
.cardInput {
  margin: 5% 5%;
  border: none;
  border-radius: 10px;
  background-color: var(--MainColor);
  padding: 23px;
}
.card1 {
  background-image: url("../assets/real/real1.webp");
}
.card4 {
  background-image: url("../assets/real/real4.webp");
}
.card3 {
  background-image: url("../assets/real/real3.webp");
}
.card2 {
  background-image: url("../assets/real/real2.webp");
}
.v-card {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: end;
  align-items: end;
  flex-direction: column;
  height: 100%;
  position: relative;
}
.v-card h1 {
  font-size: 90px;
}
.v-card h5 {
  font-size: 30px;
}
.container {
  width: 50%;
  padding: 20px 1%;
  box-sizing: border-box;
  z-index: 10;
}
.mySwiper {
  width: 100%;
  height: 100vh;
}
/* 
.swiper-slide div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
} */

.swiper-slide div img {
  width: 60px;
}

.swiper-slide div h3 {
  font-size: 10px;
  text-align: center;
}
/* Start Cards */
</style>
