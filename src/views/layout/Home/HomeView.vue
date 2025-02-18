<template>
  <!-- Start Swiper Frist -->
  <NavBar />
  <Categories1 />
  <!-- Start Swiper Second -->
  <HeaderSwiper1 />
  <!-- End Swiper Second -->
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import NavBar from "@/component/NavBar/NavBar.vue";
import Categories1 from "@/component/Home/Swipers/CategoriesSwiper/Categories1.vue";
import HeaderSwiper1 from "@/component/Home/Swipers/HeaderSwiper/HeaderSwiper1.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    NavBar,
    Categories1,
    HeaderSwiper1,
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
/* #app {
  position: relative;
  top: 100px;
} */
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
