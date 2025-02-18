<template>
  <NavBar />
  <HeaderSwiper2 />
  <!-- Start Swiper Frist -->
  <Categories1 />
  <Products4 />
  <div class="shap"></div>
  <div class="shap shap2"></div>
  <!-- End Swiper Frist -->

  <!-- Start Cards -->
  <div class="container">
    <div class="cards">
      <img src="../../../assets/Cardcontainor.webp" alt="" class="Fcard" />
      <div class="card">
        <h2>أفضل 4 عروض حصرية اونلاين</h2>
        <div class="content">
          <img
            src="../../../assets/Card1.webp"
            class="col-3 col-sm-12 col-xl-6"
            alt=""
          />
          <img
            src="../../../assets/Card2.webp"
            class="col-3 col-sm-12 col-xl-6"
            alt=""
          />
          <img
            src="../../../assets/Card3.webp"
            class="col-3 col-sm-12 col-xl-6"
            alt=""
          />
          <img
            src="../../../assets/Card4.webp"
            class="col-3 col-sm-12 col-xl-6"
            alt=""
          />
        </div>
        <img src="../../../assets/Cardcontainor.webp" alt="" class="Scard" />
      </div>
    </div>
    <div class="shap3"></div>
    <div class="cards">
      <div class="card">
        <h2>العناية بالبشرة</h2>
        <div class="content">
          <img src="../../../assets/Cards1.webp" alt="" />
          <img src="../../../assets/Cards2.webp" alt="" />
          <img src="../../../assets/Cards3.webp" alt="" />
          <img src="../../../assets/Cards4.webp" alt="" />
        </div>
      </div>
    </div>
    <div class="cards">
      <div class="card">
        <h2>حفاضات الأطفال | عروض لا تفوتيها</h2>
        <div class="content">
          <img src="../../../assets/Cardt1.webp" alt="" />
          <img src="../../../assets/Cardt2.webp" alt="" />
          <img src="../../../assets/Cardt3.webp" alt="" />
          <img src="../../../assets/Cardt4.webp" alt="" />
        </div>
        <img src="../../../assets/Cardt5.webp" alt="" class="Scard" />
      </div>
    </div>
  </div>
  <!-- End Cards -->
  <!-- <a to="./dashboard.vue">ahmed</a> -->
</template>
<script>
import NavBar from "../../../component/NavBar/NavBar.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import HeaderSwiper2 from "@/component/Home/Swipers/HeaderSwiper/HeaderSwiper2.vue";
import Categories1 from "@/component/Home/Swipers/CategoriesSwiper/Categories1.vue";
import Products4 from "@/component/Home/Products/Products4.vue";

export default {
  components: {
    Categories1,

    Swiper,
    SwiperSlide,
    NavBar,
    HeaderSwiper2,
    Products4,
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
.shap3 {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 750px;
  right: 0;
  background: transparent;
  border: 3px solid var(--mainColor);
  border-radius: 40px;
  transition: 5.5s;
  z-index: -10;
  animation: shapAnim3 7s ease-in-out infinite alternate;
}
.shap2 {
  top: 750px !important;
  right: 75% !important;
  width: 450px !important;
  height: 450px !important;
  border-color: green !important;
  animation: shapAnim2 7s ease-in-out infinite alternate !important;
}
.shap {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 1150px;
  z-index: -1;
  right: 0;
  background: transparent;
  border: 3px solid var(--mainColor);
  border-radius: 40px;
  transition: 5.5s;
  animation: shapAnim 7s ease-in-out infinite alternate;
}
@keyframes shapAnim {
  from {
    transform: translateY(150px) rotate(360deg);
  }
  to {
    transform: translateY(0px) rotate(0deg);
  }
}
@keyframes shapAnim2 {
  from {
    transform: translateY(0px) rotate(0deg);
  }
  to {
    transform: translateY(150px) rotate(360deg);
  }
}

@keyframes shapAnim3 {
  from {
    transform: translateY(150px) rotate(0deg);
  }
  to {
    transform: translateY(0px) rotate(360deg);
  }
}
body {
  background-image: url(../../../assets/background2.jpg);
}
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
  text-align: end;
}
.swiper-1 .swiper-slide .text-content h1 {
  font-size: 95px;
}
.swiper-1 .swiper-slide .text-content {
  color: white;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  padding: 110px;
}
.swiper-1 .swiper-slide {
  /* margin: 40px 0 0 0px; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  background-image: url(../../../assets/slider.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.swiper-slide div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.swiper-slide div img {
  width: 60px;
}

.swiper-slide div h3 {
  font-size: 10px;
  text-align: center;
}
/* Start Cards */

.container .cards {
}
.container .cards .Fcard {
  max-width: 100%;
}
.container .cards .card {
  width: 100%;
  padding: 35px 0px;
}
.container .cards .card h2 {
  font-size: 30px;
}
.container .cards .card .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  gap: 10px;
}
.container .cards .card .content img {
  width: 100%;
  max-height: 400px;
}
.container .cards .Scard {
  max-width: 100%;
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
