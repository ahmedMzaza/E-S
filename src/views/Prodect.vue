<template>
  <NavBar />
  <div class="prodect">
    <div class="Sprodect">
      <div class="swip">
        <swiper
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
          :pagination="{
            clickable: true,
          }"
          :spaceBetween="10"
          :navigation="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          class="mySwiper2"
        >
          <swiper-slide><img src="../assets/sprodect1.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect2.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect3.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect4.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect5.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect6.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect2.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect1.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect4.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect3.webp" /></swiper-slide>
        </swiper>
        <swiper
          @swiper="setThumbsSwiper"
          :spaceBetween="5"
          :slidesPerView="5"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide><img src="../assets/sprodect1.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect2.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect3.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect4.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect5.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect6.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect2.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect1.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect4.webp" /></swiper-slide
          ><swiper-slide><img src="../assets/sprodect3.webp" /></swiper-slide>
        </swiper>
      </div>
      <div class="content justify-center">
        <h2>{{ Product.name }}</h2>
        <p>{{ Product.description }}</p>
        <h3 style="color: green">
          <del>{{ Product.priceBefore }}</del> {{ Product.price }} L.E
        </h3>
        <div class="icons">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <h5>تحقق من توفر المنتجات</h5>
        <div class="cardBuy">
          <v-number-input
            :reverse="false"
            controlVariant="split"
            label=""
            :hideInput="false"
            :inset="false"
            v-model="this.QuanTity"
            variant="outlined"
          ></v-number-input>

          <a @click="ADDPRODUCT" style="cursor: pointer">اضف الي عربة التسوق</a>
        </div>
      </div>
    </div>
    <v-card v-if="SimilarProducts != ''">
      <v-col cols="12">
        <h1>Similar Products</h1>
      </v-col>
      <v-col cols="12" height="400px">
        <swiper
          height="400px"
          :slidesPerView="5"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :spaceBetween="30"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="{
            '120': {
              slidesPerView: 1.2,
              spaceBetween: 50,
            },
            '640': {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }"
          :navigation="true"
          :modules="modules"
          style="padding: 10px"
        >
          <swiper-slide v-for="cards in SimilarProducts" :key="cards.id">
            <router-link
              elevation="5"
              style="
                padding: 10px;
                box-shadow: 1px 0px 10px #777;
                border-radius: 11px;
                width: 100%;
                display: inline-block;
                height: 100%;
              "
              :to="{
                name: 'Prodect',
                params: { id: cards.id },
              }"
              @click="getProductDetails(cards.id)"
            >
              <i class="fa-regular fa-heart"></i>
              <img
                width="100%"
                class="align-end text-white"
                height="200"
                src="../assets/cardprodect.png"
              />
              <v-col cols="12">
                <h4>{{ cards.name }}</h4>
              </v-col>
              <v-col cols="12">
                <p style="color: green; font-size: 18px">
                  <del
                    style="
                      font-size: 15px;
                      text-decoration: line-through;
                      color: red;
                    "
                    >{{ cards.priceBefore }}</del
                  >
                  {{ cards.price }}L.E
                </p>
              </v-col>

              <v-col cols="12" class="d-flex align-center">
                <v-btn
                  @click.prevent="
                    ADD_PRODUCT_FROM_SIMILAR(cards.id, cards.quantity)
                  "
                  style="z-index: 1000; cursor: pointer; width: 100%"
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                </v-btn>
              </v-col>
            </router-link>
          </swiper-slide>
        </swiper>
      </v-col>
    </v-card>
    <div class="react">
      <ul class="ul">
        <li :class="[Details ? 'active' : '']" @click="TODetails">
          <a> التفاصيل</a>
        </li>
        <li :class="[Description ? 'active' : '']" @click="TODescription">
          <a>المواصفات</a>
        </li>
        <li :class="[Rate ? 'active' : '']" @click="TORate">
          <a> التقيمات و الاراء </a>
        </li>
      </ul>
      <div class="changes">
        <div
          class="details"
          :class="[Details ? 'active' : '']"
          v-show="Details"
        >
          <h3>وصف المنتج:</h3>
          <p>
            لأن مهارات الأطفال في التحرك تنمو بشكل سريع تم تطوير حفائض بيبي جوي
            لتوفر اقصى درجات الراحة وحرية الحركة بالأضافة الى قدرتها الفائقة على
            الامتصاص ومنع التسرب.
          </p>

          <h3>مميزات المنتج:</h3>
          <p v-show="More">
            لأن مهارات الأطفال في التحرك تنمو بشكل سريع تم تطوير حفائض بيبي جوي
            لتوفر اقصى درجات الراحة وحرية الحركة بالأضافة الى قدرتها الفائقة على
            الامتصاص ومنع التسرب.
          </p>
          <a @click="more" v-show="Less">اقرأ المزيد</a>
          <a @click="less" v-show="More"> إخفاء</a>
        </div>
        <div
          class="description"
          :class="[Description ? 'active' : '']"
          v-show="Description"
        >
          <ul>
            <li>العلامة الaتجارية: بيبي جوي</li>
            <li>قوام المنتج: حفاضات بشرة عادية</li>
            <li>الحجم: مقاس 6</li>
          </ul>
        </div>
        <div class="rate" :class="[Rate ? 'active' : '']" v-show="Rate">
          <div class="review">
            <h2>مراجعات</h2>
            <button>اكتب مراجعة</button>
          </div>
          <div class="view">
            <div class="rateview">
              <p>تقييم لقطة</p>
              <p>حدد صف أدناه لتصفية المراجعات</p>
              <div class="ratev">
                <a>
                  <p>
                    5
                    <i class="fa-solid fa-star"></i>
                  </p>
                  <div class="side"></div>
                  <p>640</p>
                </a>
                <a>
                  <p>
                    4
                    <i class="fa-solid fa-star"></i>
                  </p>
                  <div class="side"></div>
                  <p>64</p>
                </a>
                <a>
                  <p>
                    3
                    <i class="fa-solid fa-star"></i>
                  </p>
                  <div class="side"></div>
                  <p>40</p>
                </a>
                <a>
                  <p>
                    2
                    <i class="fa-solid fa-star"></i>
                  </p>
                  <div class="side"></div>
                  <p>4</p>
                </a>
                <a>
                  <p>
                    1
                    <i class="fa-solid fa-star"></i>
                  </p>
                  <div class="side"></div>
                  <p>10</p>
                </a>
              </div>
            </div>
            <div class="ratecontent">
              <p>متوسط تقييمات العميل</p>
              <div>
                <p>إجمالاً</p>
                <div class="i">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>4.9</p>
              </div>
            </div>
          </div>
          <div class="comments">
            <div class="rechange">
              <select name="" id="">
                <option value="mostRecent">الأحدث</option>
                <option value="relevancy">أكثر وثاقة بالموضوع</option>
                <option value="mostHelpful">مفيد للغاية</option>
                <option value="positive">التقييم من الأعلى إلى الأقل</option>
                <option value="negative">التقييم من الأقل إلى الأعلى</option>
              </select>

              <i class="fa-solid fa-bars"></i>
            </div>
            <div class="comment">
              <div class="data">
                <div class="i">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h3>ahmed</h3>
                <h3>4 years ago</h3>
              </div>
              <h2>ممتاز للترطيب طول اليوم</h2>
              <h4>
                مرطب طبي يرطب جيدا، يطري وينعم الجلد جربوه ولن تستغنوا عنه
              </h4>
            </div>
            <div class="comment">
              <div class="data">
                <div class="i">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h3>ahmed</h3>
                <h3>4 years ago</h3>
              </div>
              <h2>ممتاز للترطيب طول اليوم</h2>
              <h4>
                مرطب طبي يرطب جيدا، يطري وينعم الجلد جربوه ولن تستغنوا عنه
              </h4>
            </div>
            <div class="comment">
              <div class="data">
                <div class="i">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h3>ahmed</h3>
                <h3>4 years ago</h3>
              </div>
              <h2>ممتاز للترطيب طول اليوم</h2>
              <h4>
                مرطب طبي يرطب جيدا، يطري وينعم الجلد جربوه ولن تستغنوا عنه
              </h4>
            </div>
            <div class="comment">
              <div class="data">
                <div class="i">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h3>ahmed</h3>
                <h3>4 years ago</h3>
              </div>
              <h2>ممتاز للترطيب طول اليوم</h2>
              <h4>
                مرطب طبي يرطب جيدا، يطري وينعم الجلد جربوه ولن تستغنوا عنه
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { VNumberInput } from "vuetify/labs/VNumberInput";
import NavBar from "@/component/NavBar/NavBar.vue";

// import required modules
export default {
  props: ["id"],
  components: {
    Swiper,
    SwiperSlide,
    VNumberInput,
    NavBar,
  },

  mounted() {
    this.openO();
  },
  data() {
    return {
      promotions: [],
      ProductID: "",
      Product: [],
      SimilarProducts: [],
      QuanTity: 1,
      NumBuy: 1,
      Details: true,
      More: false,
      Less: true,
      Description: false,
      Rate: false,
    };
  },
  computed: {
    ADD_PRODUCT_FROM_SIMILAR(CARDID, CARDQUANTITY) {
      const token = localStorage.getItem("token");
      /*   const Quantity = Number(CARDQUANTITY); */

      const params = new URLSearchParams({
        product_id: CARDID,
        quantity: Quantity,
      });
      fetch(
        `https://drwessamhabib.com/public/api/add-to-cart?${params.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err.message));
    },

    ADDPRODUCT() {
      const token = localStorage.getItem("token");
      const Quantity = Number(this.QuanTity);
      console.log(Quantity);
      const params = new URLSearchParams({
        product_id: this.Product.id,
        quantity: Quantity,
      });
      console.log(params.toString());
      fetch(
        `https://drwessamhabib.com/public/api/add-to-cart?${params.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err.message));
      /*  this.$router.push("/Checkout"); */
    },
  },

  methods: {
    openO() {
      fetch("https://drwessamhabib.com/public/api/product")
        .then((res) => res.json())
        .then((data) => {
          this.promotions = data.data.data;
          console.log(this.$route.params.id);
          this.ProductID = this.$route.params.id;

          for (let i = 0; i < this.promotions.length; i++) {
            if (this.ProductID == this.promotions[i].id) {
              this.Product = this.promotions[i];
              console.log(this.Product.id);
              const token = localStorage.getItem("token");
              fetch(
                `https://drwessamhabib.com/public/api/product/${this.Product.id}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // تحديد نوع البيانات المرسلة
                  },
                }
              )
                .then((res) => res.json())
                .then((PRO) => {
                  console.log(PRO);
                  this.SimilarProducts = PRO.data.similarProducts;
                  console.log(this.SimilarProducts);
                })
                .catch((err) => console.log(err.message));
            }
          }
        })
        .catch((err) => console.log(err.message));
    },
    getProductDetails(productId) {
      fetch(`https://drwessamhabib.com/public/api/product/${productId}`)
        .then((res) => res.json())
        .then((data) => {
          this.Product = data.data;
          this.SimilarProducts = data.data.similarProducts;
          this.$router.push({ name: "Prodect", params: { id: productId } });
          window.location.reload();
        })
        .catch((err) => console.log(err.message));
    },
    TODescription() {
      this.Description = true;
      this.Details = false;
      this.Rate = false;
    },
    TORate() {
      this.Description = false;
      this.Details = false;
      this.Rate = true;
    },
    TODetails() {
      this.Description = false;
      this.Details = true;
      this.Rate = false;
    },
    more() {
      this.More = true;
      this.Less = false;
    },
    less() {
      this.More = false;
      this.Less = true;
    },
    incNumBuy() {
      this.NumBuy += 1;
    },
    decNumBuy() {
      if (this.NumBuy != 1) {
        this.NumBuy -= 1;
      }
      if (this.NumBuy == 1) {
        this.NumBuy = 1;
      }
    },
  },

  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs, Pagination],
    };
  },
};
</script>
<style scoped>
.v-number-input--split .v-field__input {
  height: 40px !important;
  padding: 0 !important;
}
:root {
  --mainColor: #1e90ff;
  --swiper-navigation-size: 44px;
}
.prodect {
  width: 98%;
  background-color: white;
  box-shadow: 0 0 20px #7777774d;
  margin: 50px auto;
}
.prodect .Sprodect {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px 25px;
}
.prodect .Sprodect .swip {
  width: 40%;
}
.prodect .Sprodect .content {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 600;
  padding: 30px 0;
}

.prodect .Sprodect .content h3 {
  padding: 20px 0 0 0;
  font-size: 30px;
}
.prodect .Sprodect .content h3 del {
  font-size: 15px;
  text-decoration: line-through;
  color: red;
}
.prodect .Sprodect .content .icons {
  color: orange;
  display: flex;
  gap: 10px;
  padding: 10px 0;
}

.prodect .Sprodect .content h5 {
  cursor: pointer;
  color: blue;
}
.prodect .Sprodect .content .cardBuy {
  display: flex;
  justify-content: start;
  height: 70px;
  align-items: center;
  padding: 10px 0;
  gap: 40px;
}
.prodect .Sprodect .content .cardBuy .num {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
.prodect .Sprodect .content .cardBuy .num p {
  width: 35px;
  text-align: center;
}
.prodect .Sprodect .content .cardBuy .num i {
  padding: 6px;
  color: var(--mainColor);
  background-color: white;
  border: 1px solid var(--mainColor);
}
.prodect .Sprodect .content .cardBuy div.v-input {
  height: 60px !important;
}
.prodect .Sprodect .content .cardBuy a {
  padding: 6px;
  background-color: var(--mainColor);
  color: white;
  display: flex;
  height: 60px;
  align-items: center;
  border-radius: 5px;
}
.mySwiper2 {
  height: 80%;
  width: 90%;
}
.v-input--horizontal {
  height: 57px !important;
}
.v-text-field .v-field--no-label input,
.v-text-field .v-field--active input {
  padding: 0px !important;
}
.mySwiper {
  width: 90%;
  height: 80px;
  box-sizing: border-box;
  padding: 10px 0;
}
.mySwiper .swiper-slide {
  height: 100%;
  opacity: 0.4;
}
.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}
.swiper-slide img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

div.react .ul {
  display: flex;
  justify-content: space-around;
  font-weight: 600;
  border: 1px solid #0000004a;
  border-right: none;
  border-left: none;
  width: 100%;
}
div.react .ul li {
  width: 100%;
  text-align: center;
  color: black;
  padding: 12px 0;
}
div.react .ul li.active {
  border-bottom: 2px solid var(--mainColor);
  color: var(--mainColor);
}

.react .changes {
  width: 100%;
  padding: 20px 30px;
}

.react .changes .details h3 {
  font-size: 15px;
  padding: 10px 0 0;
}
.react .changes .details p {
  padding: 10px 25px;
}

.react .description ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 40px;
}
.react .description ul li {
  list-style-type: disc;
}
.react .rate {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.react .rate .review {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.react .rate .review h2 {
  color: var(--mainColor);
}
.react .rate .review button {
  padding: 6px 10px;
  background-color: var(--mainColor);
  color: white;
  border: 1px solid var(--mainColor);
  border-radius: 5px;
  font-weight: 600;
  transition: 0.5s;
}
.react .rate .review button:hover {
  color: var(--mainColor);
  background-color: white;
}
.react .rate .view {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.react .rate .view div.rateview {
  width: 50%;
  text-align: start;
  padding: 0px 25px;
}

.react .rate .view div.rateview .ratev {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  gap: 5px;
}
.react .rate .view div.rateview .ratev a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
}
.react .rate .view div.rateview .ratev a p {
  width: 7%;
}
.react .rate .view div.rateview .ratev a .side::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  background-color: orange;
  height: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.react .rate .view div.rateview .ratev a .side {
  width: 80%;
  height: 14px;
  border: 0.4px solid #777;
  position: relative;
  border-radius: 5px;
}
.react .rate .view .ratecontent {
  width: 50%;
  text-align: start;
  padding: 0px 25px;
}

.react .rate .view .ratecontent > div {
  display: flex;
  gap: 15px;
  padding: 25px 0;
}

.react .rate .view .ratecontent > div .i {
  color: orange;
}
.react .comments {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.react .comments .comment {
  border: 0.5px solid #777;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 3px;
}
.react .comments .comment .data {
  display: flex;

  align-items: center;
}
.react .comments .comment .data div.i {
  color: orange;
  font-size: 11px;
}
.react .comments .comment .data h3 {
  font-size: 13px;
  padding: 0 5px;
  text-transform: capitalize;
  font-weight: 300;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 14rem !important;
  color: var(--mainColor);
  font-weight: 900;
}
.react .comments .comment h4 {
  padding: 5px 40px;
  font-weight: 300;
}
.react .comments .rechange {
  width: 95%;
  margin: 0 auto 70px;
  text-align: left;
  background-color: #99999947;
  padding: 6px 10px;
}

.react .comments .rechange i {
  padding: 0px 10px;
}
@media (max-width: 780px) {
  .prodect .Sprodect {
    flex-direction: column;
  }
  .prodect .Sprodect .swip {
    width: 80%;
    margin: 0 auto;
  }
  .swiper-slide img {
    margin: 0 auto;
  }
  .prodect .Sprodect .content .cardBuy {
    justify-content: space-between;
  }
  .prodect .Sprodect .content {
    width: 100%;
  }
}
</style>
