<template>
  <NavBar />
  <HeaderSwiper2 />
  <Cards4 />

  <Categories3 />
  <!-- <div class="container" style="margin: 75px 0 0">
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
          <img src="../../../assets/images.png" />
          <h3>{{ crad.name }}</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  </div> -->
  <Products4 />

  <div class="container">
    <div class="offer">
      <h1>
        <v-icon> mdi-check-decagram-outline</v-icon> 100% Secure delivery
        without contacting the courier
      </h1>
      <a>more</a>
    </div>
  </div>

  <div class="container">
    <div class="cards">
      <div class="card">
        <img src="../../../assets/Cardt5.webp" alt="" class="Scard" />
        <img src="../../../assets/Cardcontainor.webp" alt="" class="Scard" />
      </div>
    </div>
  </div>
  <Coments4 />
  <!-- 
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
          <div class="latest">
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
  </div> -->
  <!-- <a to="./dashboard.vue">ahmed</a> -->
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import NavBar from "@/component/NavBar/NavBar.vue";
import HeaderSwiper2 from "@/component/Home/Swipers/HeaderSwiper/HeaderSwiper2.vue";
import Cards4 from "@/component/Home/Products/Cards4.vue";
import Categories2 from "@/component/Home/Swipers/CategoriesSwiper/Categories2.vue";
import Categories3 from "@/component/Home/Swipers/CategoriesSwiper/Categories3.vue";
import Products4 from "@/component/Home/Products/Products4.vue";
import Coments4 from "@/component/Home/Coments/Coments4.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    NavBar,
    HeaderSwiper2,
    Cards4,
    Categories2,
    Categories3,
    Products4,
    Coments4,
  },

  data() {
    return {
      Main: [],
      modules: [Autoplay],
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
/* Offer */
.offer {
  background-image: url(../../../assets/banner-delivery-2.jpg);
  background-size: cover;
  width: 100%;
  height: 120px;
  background-position: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  padding: 45px;
  border-radius: 15px;
}
.offer h1 {
  display: flex;
  flex-direction: row-reverse;
  color: #12a05c;
  font-size: 20px;
  text-align: end;
}
.offer a:hover {
  background-color: white;
  border: 1px solid #12a05c;
  color: #12a05c;
}
.offer a {
  background: #12a05c;
  color: white;
  padding: 10px 25px;
  border-radius: 23px;
  font-size: 20px;
  font-weight: bold;
  transition: 0.8s;
}
/* Offer */
.title {
  color: var(--mainColor);
  font-size: 40px;
  margin: 0 auto;
  text-align: center;
  width: fit-content;
  border-bottom: 1px solid var(--mainColor);
}
/* #app {
  position: relative;
  top: 100px;
} */
.card2 .Fcard {
  width: 50%;
  height: 300px;
}
.card2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
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

.container .cards .Fcard {
  border-radius: 30px;
  max-width: 100%;
}
.container .cards .card {
  width: 100%;
  padding: 35px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  gap: 20px;
}
.container .cards .card h2 {
  font-size: 30px;
}

.container .cards .card .content img {
  width: 100%;
  max-height: 400px;
}
.container .cards .Scard {
  width: 100%;
  height: 200px;
  border-radius: 15px;
}
@media (max-width: 1000px) {
  .container .cards .card h2 {
    font-size: 20px !important;
  }
  .container .cards .card .content {
    justify-content: space-around;
    row-gap: 20px;

    flex-wrap: wrap;
  }
  .container .cards .card .content img {
    max-width: 48%;
  }
}
@media (max-width: 500px) {
  .container .offer {
    flex-direction: column;
    align-items: end;
    height: 175px;
  }
  .container .cards .card .content img {
    max-width: 100%;
  }
}
/* End Cards */
</style>
