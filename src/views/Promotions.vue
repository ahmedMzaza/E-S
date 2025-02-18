<template>
  <NavBar />
  <h3>المنزل / Promotions</h3>
  <div class="promotions">
    <div class="promotion-left">
      <ul class="ulR">
        <!--   <li v-for="promotionitem in promotions.promotion" :key="promotions.promotion.title">
          <div class="item">
            <a>{{ promotionitem.title }}</a>
            <i class="fa-solid fa-angle-left"></i>
          </div>
          <ul>
            <li v-for="promot in promotion.data">
              <a>{{ promot.first }}</a>
            </li>
          </ul> 
        </li> -->

        <li v-for="num in 10" :key="num">
          <v-combobox
            clearable
            chips
            multiple
            color="blue"
            label="طريقة الشحن"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="outlined"
          ></v-combobox>
        </li>
      </ul>
      <ul class="ult">
        <li style="border-left: 1px solid var(--mainColor)">
          <a @click="ChangeS" v-if="ifDS"><i class="fa-solid fa-list"></i></a>
          <a @click="BackS" v-if="!ifDS"
            ><i class="fa-solid fa-border-all"></i
          ></a>
          <p>الشكل</p>
        </li>
        <li @click="openUL">
          <a>
            <i class="fa-solid fa-sliders"></i>
          </a>
          <p>تصفية</p>
        </li>
      </ul>
      <div class="UL" :class="[UL ? 'active' : '']">
        <div class="U">
          <h2>تصفية</h2>
          <a @click="closeUL">
            <i class="fa-solid fa-x"></i>
          </a>
        </div>
        <ul class="ULSide">
          <li>
            <div class="item">
              <a>طريقة الشحن</a>
              <i class="fa-solid fa-angle-left"></i>
            </div>
          </li>
          <li>
            <div class="item">
              <a>طريقة الشحن</a>
              <i class="fa-solid fa-angle-left"></i>
            </div>
          </li>
          <li>
            <div class="item">
              <a>طريقة الشحن</a>
              <i class="fa-solid fa-angle-left"></i>
            </div>
          </li>
          <li>
            <div class="item">
              <a>طريقة الشحن</a>
              <i class="fa-solid fa-angle-left"></i>
            </div>
          </li>
          <li>
            <div class="item">
              <a>طريقة الشحن</a>
              <i class="fa-solid fa-angle-left"></i>
            </div>
          </li>
          <li>
            <div class="item">
              <a>طريقة الشحن</a>
              <i class="fa-solid fa-angle-left"></i>
            </div>
          </li>
          <li>
            <div class="item">
              <a>طريقة الشحن</a>
              <i class="fa-solid fa-angle-left"></i>
            </div>
          </li>
          <li>
            <div class="item">
              <a>طريقة الشحن</a>
              <i class="fa-solid fa-angle-left"></i>
            </div>
          </li>
          <li>
            <div class="item">
              <a>طريقة الشحن</a>
              <i class="fa-solid fa-angle-left"></i>
            </div>
          </li>
          <li>
            <div class="item">
              <a>طريقة الشحن</a>
              <i class="fa-solid fa-angle-left"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="promotion-right">
      <div class="promotion-R">
        <a @click="ChangeS"><i class="fa-solid fa-list"></i></a>
        <a @click="BackS"><i class="fa-solid fa-border-all"></i></a>
      </div>
      <div
        class="promotion-D"
        :loading="loading"
        :class="[promotionDS ? 'promotion-DS' : '']"
      >
        <v-progress-linear
          color="primary"
          :active="loading"
          indeterminate
        ></v-progress-linear>

        <router-link
          :v-if="!loading"
          v-for="card in promotions"
          :key="card.id"
          :to="{ name: 'Prodect', params: { id: card.id } }"
          class="card"
          :class="[cardS ? 'cardS' : '']"
        >
          <a
            class="Fav"
            :class="[card.isFav ? 'active' : '']"
            @click="isFav(card.id)"
          >
            <i class="fa-regular fa-heart"></i>
          </a>
          <img class="cardImg" src="../assets/cardprodect.png" alt="Title" />
          <div class="cardBody">
            <h4 class="cardTitle">
              {{ card.name }}
            </h4>
            <p class="cardText">
              <del>{{ card.priceBefore }}</del> {{ card.price }} L.E
            </p>

            <div class="cardBuy" @click.stop>
              <div class="num">
                <v-number-input
                  density="compact"
                  :reverse="false"
                  controlVariant="split"
                  label=""
                  :hideInput="false"
                  :inset="false"
                  :model-value="quantity"
                  variant="outlined"
                ></v-number-input>
              </div>

              <a @click.prevent="ADDPRODUCT(card.id, quantity)">
                <i class="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
          </div>
        </router-link>
        <v-col cols="4" style="direction: ltr">
          <v-card>
            <v-pagination
              class="flex-row-reverse"
              :length="passengers"
              v-model="page"
              color="blue"
              @update:model-value="open"
            ></v-pagination>
          </v-card>
        </v-col>

        <!--  <router-link
          v-for="card in promotions.data"
          :key="card.id"
          :to="{
            name: 'Prodect',
            params: { id: card.id },
          }"
          class="card"
          :class="[cardS ? 'cardS' : '']"
        >
          <i class="fa-regular fa-heart"></i>
          <img class="cardImg" src="../assets/cardprodect.png" alt="Title" />
          <div class="cardBody">
            <h4 class="cardTitle">
              {{ card.name }}
            </h4>
            <p class="cardText">
              <del>{{ card.priceBefore }}</del> {{ card.price }} L.E
            </p>

            <div class="cardBuy">
              <div class="num">
                <i class="fa-solid fa-plus"></i>
                <p>{{ NumBuy }}</p>
                <i class="fa-solid fa-minus"></i>
              </div>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </router-link> -->
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/component/NavBar/NavBar.vue";
import { VNumberInput } from "vuetify/labs/VNumberInput";

export default {
  components: {
    VNumberInput,
    NavBar,
  },
  data() {
    return {
      promotions: [],
      passengers: [], // Use a reactive array for data
      page: 1,
      loading: false,
      promot: [],
      promotionCards: [],
      NumBuy: 1,
      cardS: false,
      promotionDS: false,
      ifDS: true,
      UL: false,
      tab: null,
      quantity: 1,
    };
  },
  methods: {
    isFav(ID) {
      const token = localStorage.getItem("token");
      const product_id = ID;
      const data = {
        product_id,
      };
      fetch(`https://drwessamhabib.com/public/api/wishlist?product_id=${ID}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("done");
          console.log(data);
        })
        .catch((err) => console.log(err.message));
    },
    showFav() {
      const token = localStorage.getItem("token");
      fetch("https://drwessamhabib.com/public/api/wishlist", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          for (let i = 0; i < data.data.data.length; i++) {
            console.log(data.data.data[i].id);
            for (let j = 0; j < this.promotions.length; j++) {
              if (data.data.data[i].id == this.promotions[j].id) {
                this.promotions[j].isFav = true;
                console.log(this.promotions[j].isFav);
              } else {
                this.promotions[j].isFav = false;
              }
            }
          }
        })
        .catch((err) => console.log(err.message));
    },
    closeUL() {
      this.UL = false;
    },
    openUL() {
      this.UL = true;
    },
    BackS() {
      this.cardS = false;
      this.promotionDS = false;
      this.ifDS = true;
    },
    ChangeS() {
      this.cardS = true;
      this.ifDS = false;
      this.promotionDS = true;
    },
    incrementQuantity(card) {
      card.quantity++;
    },
    decrementQuantity(card) {
      if (card.quantity > 1) {
        card.quantity--;
      }
    },
    open() {
      this.loading = true;

      fetch(`https://drwessamhabib.com/public/api/product?page=${this.page}`)
        .then((res) => res.json())
        .then((data) => {
          this.promotions = data.data.data;
          this.passengers = data.data.meta.total;
          const ID = localStorage.getItem("CategoryID");
          console.log(localStorage.getItem("CategoryID"));

          console.log(data.data.meta.to);
          if (localStorage.getItem("CategoryID") != null) {
            for (let i = 0; i < data.data.meta.to; i++) {
              if (this.promotions[i].category_id == ID) {
                console.log("ahmed done dont worry");
              }
            }
          }
          console.log(data.data.data[4].category_id);
          this.loading = false;
        })
        .catch((err) => console.log(err.message));
      this.showFav();
    },
    ADDPRODUCT(CARDID, CARDQUANTITY) {
      const token = localStorage.getItem("token");
      const params = new URLSearchParams({
        product_id: CARDID,
        quantity: CARDQUANTITY,
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
  },

  mounted() {
    this.open();
  },
};
</script>
<style scoped>
.v-slide-group {
  background-color: transparent !important;
  color: black !important;
  width: 40% !important;
  gap: 0 !important;
  direction: ltr;
  height: 45px;
  margin: 40px 0;
}
.v-slide-group__content {
  display: flex;
  flex: 1 0 auto;
  position: relative;
  transition: 0.2s all cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  height: 40px !important;
  gap: 5px !important;
}
.v-tab.v-tab.v-btn {
  min-width: 40px;
  height: 40px !important;
  padding: 0px !important;
  width: fit-content !important;
}

h3 {
  font-size: 15px;
  padding: 15px 10px;
  background-color: white;
  box-shadow: 0 0 20px #7777774d;
  margin: 55px 20px 0;
  color: #777;
}
.promotions {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  padding: 0 20px;
}
.promotion-left {
  width: 20%;
}
.promotion-left ul.ulR {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 5px;
}
.promotion-left ul.ulR .item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #00000021;
}
.promotion-left ul.ulR .item a {
  color: black;
}
.promotion-left ul.ulR .item i {
  rotate: -90deg;
}
.promotion-right {
  width: 80%;
  padding: 30px 0px;
}
.promotion-R {
  width: 100%;
  padding: 0 0 10px;
}

.promotion-R a i {
  font-size: 20px;
  color: black;
  padding: 0 6px;
}
.promotion-D {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  min-height: 700px;
}
.promotion-D .card:hover {
  box-shadow: 0 0 20px #777;
  border: 1px solid #777;
}
.promotion-D .card {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0px 10px;
  background-color: white;
  box-shadow: 0 0 20px #7777774d;
  border: 1px solid white;
  border-radius: 15px;
  transition: 0.5s;
}
.promotion-D .card .cardBody h4 {
  font-size: 25px;
}
.promotion-D .card .cardBody {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 10px 5px;
}
.promotion-D .card .cardImg {
  margin: 0 auto;
  width: 100%;
  height: 95%;
}
.promotion-D .card .cardBuy {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 0 10px;
  gap: 20px;
}
.promotion-D .card .cardBody del {
  font-size: 15px;
  text-decoration: line-through;
  color: red;
}
/* .v-input {
  height: 40px !important;
} */
.promotion-D .card .cardBody a:hover {
  color: var(--mainColor);
  background-color: white;
  border: 1px solid #77777757;
  box-shadow: 0 0 20px #77777738;
}
.promotion-D .card .cardBody a {
  border-radius: 4px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  cursor: pointer;
  width: 50%;
  padding: 6px;
  color: var(--mainColor);
  border: 1px solid var(--mainColor);
  background-color: white;
  box-sizing: border-box;
  transition: 0.5s;
}
.promotion-D .card .num i {
  padding: 6px;
  color: var(--mainColor);
  background-color: white;
  border: 1px solid var(--mainColor);
}
.Fav {
  padding: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  text-align: center;
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 15px;
}
.Fav:hover,
.Fav.active {
  background-color: var(--mainColor);
  color: white;
}
.promotion-D .card .num {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 60%;
}
.promotion-D .card .cardText del {
  font-size: 11px;
}
.promotion-D .card .cardText {
  font-size: 20px;
  color: green;
}
.promotion-D .card > i {
  position: relative;
  top: 5px;
  right: 5px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  color: var(--mainColor);
  transition: 0.5s;
}
.promotion-D .card > i:hover {
  background-color: var(--mainColor);
  color: white;
}

/* Change */

.promotion-DS {
  justify-content: start !important;
  column-gap: 20px;
}
.promotion-DS .cardS > i {
  top: -60px;
}
.promotion-DS .cardS {
  width: 48% !important;
  flex-direction: row !important;
  justify-content: center !important;
  align-items: center !important;
  height: 200px !important;
}
.promotion-DS .cardS .Fav {
  position: relative;
  top: -70px !important;
}
.promotion-DS .cardS .cardImg {
  width: 60% !important;
  height: 95% !important;
}
.promotion-DS .cardS .cardBuy {
  padding: 0px !important;
}
.promotion-DS .cardS .cardText {
  font-size: 20px;
  color: green;
}
.promotion-DS .cardS .cardBody h4 {
  font-size: 28px !important;
}
.promotion-DS .cardS .cardBody {
  gap: 20px !important;
  justify-content: space-around;
  height: 100%;
}
.ult,
.UL {
  display: none;
}
@media (max-width: 550px) {
  .promotion-D .card {
    width: 80% !important;
  }
  .promotion-D .card .cardBody {
    width: 100%;
  }
}
@media (max-width: 1220px) {
  .promotion-D .card {
    width: 40%;
  }
}
@media (max-width: 780px) {
  h3 {
    margin: 0 20px;
  }
  .promotions {
    flex-direction: column;
    align-items: center;
  }
  .promotion-left ul.ulR {
    display: none !important;
  }
  .promotion-right .promotion-R {
    display: none;
  }
  .promotion-right {
    width: 100%;
  }
  .promotion-DS .cardS .cardImg {
    max-height: 85%;
    margin: 0 !important;
  }

  .promotion-D .card {
    width: 48%;
  }
  .promotion-DS .cardS {
    width: 100% !important;
    justify-content: space-around !important;
  }
  .promotion-DS .cardS .cardBody {
    width: 100%;
  }
  .promotion-left {
    width: 100%;
    margin: 20px 0 0;
    background-color: white;
    box-shadow: 0 0 20px #7777774d;
    padding: 10px 0;
  }
  .promotion-left ul.ult {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .promotion-left ul.ult li {
    width: 50%;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .promotion-left div.UL .U {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
  }
  .promotion-left div.UL .U a {
    color: var(--mainColor);
  }
  .promotion-left div.UL .U h2 {
    font-size: 20px;
  }

  .promotion-left div.UL.active {
    display: flex;
  }
  .promotion-left div.UL {
    position: fixed;
    display: none;
    width: 100%;
    top: 0;
    right: 0;
    background-color: white;
    z-index: 100;
    height: 100%;

    flex-direction: column;
  }
  .promotion-left div.UL .ULSide {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .promotion-left div.UL .ULSide li {
    padding: 12px;
    border: 1px solid #33333357;
    border-right: none;
    border-left: none;
  }
  .promotion-left div.UL .ULSide li .item {
    display: flex;
    justify-content: space-between;
  }
  .promotion-left div.UL .ULSide li .item i {
    transform: rotate(-90deg);
  }
  .promotion-left div.UL .ULSide li .item a {
    color: black;
  }
}
</style>
