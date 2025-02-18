<template>
  <!-- Start Swiper Frist -->
  <NavBar />

  <!-- End Swiper Frist -->
  <!-- Start Swiper Second -->
  <div class="container">
    <Swiper
      style="margin: 145px 0px 0 0"
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
        <img
          src="../../../assets/swiper.jpg"
          style="width: 100%; height: 550px; border-radius: 50px"
        />
      </SwiperSlide>
    </Swiper>
  </div>
  <div class="container" style="padding: 0 6%">
    <div class="cards card2">
      <img src="../../../assets/Cardcontainor.webp" alt="" class="Fcard" />
      <img src="../../../assets/Cardcontainor.webp" alt="" class="Fcard" />
    </div>
  </div>

  <Categories2 />

  <div class="container">
    <h1 class="title">Latest Products</h1>
    <Swiper
      :direction="horizontal"
      :loop="true"
      :breakpoints="{
        '100': {
          slidesPerView: 1,
        },
        '600': {
          slidesPerView: 4,
        },
        '1100': {
          slidesPerView: 5,
          spaceBetween: 0,
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
  <div class="container">
    <div class="offer">
      <h1>
        <v-icon> mdi-check-decagram-outline</v-icon> 100% Secure delivery
        without contacting the courier
      </h1>
      <a>more</a>
    </div>
  </div>
  <!-- Start Cards -->
  <div class="container">
    <div class="cards">
      <!-- <img src="../../../assets/Cardcontainor.webp" alt="" class="Fcard" /> -->
      <div class="card">
        <img src="../../../assets/Cardt5.webp" alt="" class="Scard" />
        <img src="../../../assets/Cardcontainor.webp" alt="" class="Scard" />
      </div>
    </div>
  </div>
  <!-- End Cards -->
  <Coments4 />
  <!-- <div class="latast">
    <div class="container">
      <h1 class="title">Latest reviews</h1>
      <Swiper
        :direction="horizontal"
        :loop="true"
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
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import NavBar from "@/component/NavBar/NavBar2.vue";
import Categories2 from "@/component/Home/Swipers/CategoriesSwiper/Categories2.vue";
import Coments4 from "@/component/Home/Coments/Coments4.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    NavBar,
    Categories2,
    Coments4,
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
/*Start latest*/
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

/*End latest*/
/* latast */
.latast {
  background-image: url(../../../assets/roundbg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fdf6ed;
  padding: 50px 0;
  margin: 40px 0;
}
/* latast */
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
  width: 100%;
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
  .container .cards .card .content img {
    max-width: 100%;
  }
}
/* End Cards */
</style>
