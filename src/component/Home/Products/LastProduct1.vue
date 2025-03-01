<template>
  <div class="container">
    <h1 class="title">Top 5 Bestsellers in</h1>
    <v-sheet color="white" elevation="0" rounded="lg">
      <v-tabs
        v-model="tab"
        :items="tabs"
        align-tabs="center"
        color="var(--mainColor)"
        height="60"
        slider-color="var(--mainColor)"
      >
        <template v-slot:tab="{ item }">
          <v-tab
            :prepend-icon="item.icon"
            :text="item.text"
            :value="item.value"
            class="text-none"
          ></v-tab>
        </template>
        <!-- <template v-slot:tab="{ item }">
          <Swiper
            :spaceBetween="10"
            :navigation="true"
            :breakpoints="{
              '100': {
                slidesPerView: 1.5,
              },
              '580': {
                slidesPerView: 3,
              },
            }"
            :direction="horizontal"
            :modules="modules"
            class="mySwiper"
          >
            <SwiperSlide>
              <v-tab
                :prepend-icon="item.icon"
                :text="item.text"
                :value="item.value"
                class="text-none"
              ></v-tab>
            </SwiperSlide>
          </Swiper>
        </template> -->

        <template v-slot:item="{ item }">
          <v-tabs-window-item :value="item.value" class="pa-4">
            <Swiper
              :spaceBetween="10"
              :navigation="true"
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
              <SwiperSlide v-for="(product, i) in item.products" :key="i">
                <div class="latest">
                  <img :src="product.img" alt="" />
                  <div class="content">
                    <h4>{{ product.name }}</h4>
                    <h3>{{ product.price }}</h3>

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
          </v-tabs-window-item>
        </template>
      </v-tabs>
    </v-sheet>
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
  data: () => ({
    modules: [Autoplay, Navigation],
    tab: "tab-1",
    tabs: [
      {
        icon: "mdi-water",
        text: "Blood pressure",
        value: "tab-1",
        products: [
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card3.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card3.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card3.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card3.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card3.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card3.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card3.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card3.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card3.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card3.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card3.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card3.png"),
          },
        ],
      },
      {
        icon: "mdi-face-mask",
        text: "Face Mask",
        value: "tab-2",
        products: [
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card2.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card2.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card2.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card2.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card2.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card2.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card2.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card2.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card2.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card2.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card2.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card2.png"),
          },
        ],
      },
      {
        icon: "mdi-license",
        text: "Stomatology",
        value: "tab-3",
        products: [
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card4.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card5.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card6.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card2.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card1.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card5.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card3.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card2.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card6.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card7.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card4.png"),
          },
          {
            name: "Disposable Face Mask for Unisex",
            price: 20.98,
            img: require("../../../assets/cards/card3.png"),
          },
        ],
      },
    ],
  }),
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
  height: 180px;
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
.v-btn__content {
  font-size: 26px;
}
</style>
