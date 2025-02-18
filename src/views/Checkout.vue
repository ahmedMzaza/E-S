<template>
  <div class="checkout">
    <div class="cardProdect">
      <h1>سلة التسوق</h1>
      <div class="cardP" v-for="carding in Cards" :key="carding.id">
        <div>
          <div class="img">
            <img src="../assets/cardprodect.png" alt="" />
          </div>
          <div class="content">
            <div class="text">
              <p>{{ carding.name }}</p>
            </div>
            <div class="pr">
              <p>توصيل في نفس اليوم</p>
              <a>
                <h4>{{ carding.price }} L.E</h4>
                <del>{{ carding.priceBefore }}</del>
              </a>
            </div>
          </div>
        </div>
        <div class="action">
          <a @click="deleteProduct(carding.id)" style="cursor: pointer">
            حذف
          </a>
          <v-number-input
            :reverse="false"
            controlVariant="split"
            label=""
            :hideInput="false"
            :inset="false"
            :model-value="carding.cartQuantity"
            variant="outlined"
          ></v-number-input>
          <p>
            الكميّة:<span>{{ carding.cartQuantity }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="check">
      <h3>اضف رمز الخصم</h3>
      <div class="input">
        <input type="text" placeholder="ادخل رمز الخصم" />
        <button>تطبيق</button>
      </div>
      <div class="number">
        <a>
          <p>الإجمالي (غير شامل الضريبة)</p>
          <p>{{ Totel }} L.E</p>
        </a>
        <a>
          <p>الإجمالي (شامل الضريبة)</p>
          <p>192.00 L.E</p>
        </a>
        <a>
          <p>لخصم (عرض خاص)</p>
          <p>-82.00 L.E</p>
        </a>
        <a>
          <p>الضريبة</p>
          <p>12.00 L.E</p>
        </a>
        <a>
          <p>اجمالي الشحن</p>
          <p>00 L.E</p>
        </a>
        <p
          style="
            width: 90%;
            height: 1px;
            background-color: black;
            margin: 0 auto;
          "
        ></p>
        <a>
          <p>اجمالي</p>
          <p>{{ Totel }} L.E</p>
        </a>
      </div>
      <div class="out">
        <a>
          <p>اجمالي</p>
          <p style="font-size: 20px">{{ Totel }}L.E</p>
        </a>
        <button>استمر</button>
      </div>
    </div>
  </div>
</template>
<script>
import { VNumberInput } from "vuetify/labs/VNumberInput";

import axios from "axios";
export default {
  components: {
    VNumberInput,
  },
  data() {
    return {
      Cards: [],
      token: "",
      Totel: "",
    };
  },
  mounted() {
    const token = localStorage.getItem("token");
    // 2. بناء جسم الطلب
    fetch("https://drwessamhabib.com/public/api/my-cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // تحديد نوع البيانات المرسلة
      },
      // تحويل البيانات إلى JSON
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        localStorage.setItem("content", data.data.cartItems.length);
        this.Cards = data.data.cartItems;
        this.Totel = data.data.total_price;
        console.log(this.Cards);
        for (let i = 0; i < this.Cards.length; i++) {
          console.log(this.Cards[i].name);
          console.log(this.Cards[i].price);
          console.log(this.Cards[i].id);
          console.log(this.Cards[i].priceBefore);
        }
      })
      .catch((error) => {
        console.error(error); // التعامل مع الأخطاء
      });
  },
  computed: {},
  setup() {
    const deleteProduct = async (productId) => {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          `https://drwessamhabib.com/public/api/remove-from-cart?product_id=${productId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        window.location.reload();
      } catch (error) {
        console.error("حدث خطأ:", error);
        this.$notify.error("حدث خطأ أثناء حذف المنتج: " + error.message);
      }
    };
    return { deleteProduct };
  },
};
</script>
<style>
.checkout {
  display: flex;
  padding: 50px 25px;
  justify-content: center;
  gap: 20px;
}
.checkout .cardProdect {
  width: 70%;
  border-radius: 15px;
  background-color: white;
  box-shadow: 1px 1px 10px #00000042;
  padding: 0px 0px 50px;
}
.checkout .cardProdect > h1 {
  padding: 10px 40px;
  background-color: #1e90ff38;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  font-size: 20px;
}
.checkout .cardProdect .cardP > div {
  display: flex;
  gap: 15px;
}
.checkout .cardProdect .cardP {
  padding: 10px 0;
  margin: 10px auto;
  box-shadow: 1px 1px 10px #00000042;
  width: 98%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #f7fafa;
}
.checkout .cardProdect .cardP .img {
  width: 20%;
}
.checkout .cardProdect .cardP .img img {
  max-width: 100%;
}
.checkout .cardProdect .cardP .content {
  width: 75%;
}
.checkout .cardProdect .cardP .content .text {
  padding: 10px 0;
}

.checkout .cardProdect .cardP .content .pr {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
}

.checkout .cardProdect .cardP .content .pr a h4 {
  font-size: 25px;
}
.checkout .cardProdect .cardP .content .pr a del {
  font-size: 15px;
  text-decoration: line-through;
  color: red;
}
.checkout .cardProdect .cardP .action {
  width: 100%;
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.checkout .cardProdect .cardP .action a {
  color: red;
  border: 0.5px solid red;
  padding: 2px 10px;
  border-radius: 6px;
}

.checkout .cardProdect .cardP .action p span {
  padding: 0px 10px;
  width: auto;
  display: inline-block;
  text-align: center;
  border: 0.5px solid #777;
  border-radius: 3px;
}

.checkout .check {
  width: 30%;
  border-radius: 15px;
  box-shadow: 1px 1px 10px #00000042;
  padding: 15px 0px;
  height: 100%;
}
.checkout .check > h3 {
  font-size: 13px;
  padding: 0 10px 10px;
}
.checkout .check .input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.checkout .check .input button {
  padding: 5px 10px;
  background-color: var(--mainColor);
  color: white;
  border-radius: 3px;
  border: none;
  transition: 0.5s;
}
.checkout .check .input button:hover {
  border: 1px solid var(--mainColor);
  background-color: white;
  color: var(--mainColor);
}
.checkout .check .input input {
  padding: 5px 10px;
  border: 1px solid var(--mainColor);
  border-radius: 3px;
}
.checkout .check .number {
  padding: 15px;
  background-color: #f7fafa;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.checkout .check .number a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #777;
}

.checkout .check .out {
  display: flex;
  justify-content: space-between;
  padding: 0px 15px;
  align-items: center;
}
.checkout .check .out a {
  padding: 0 10px;
  color: #777;
}

.checkout .check button {
  padding: 5px 30px;
  background-color: var(--mainColor);
  color: white;
  border-radius: 3px;
  border: none;
  transition: 0.5s;
  font-weight: 600;
}
.checkout .check button:hover {
  border: 1px solid var(--mainColor);
  background-color: white;
  color: var(--mainColor);
}
@media (max-width: 900px) {
  .checkout .check {
    width: 70%;
  }
  .checkout {
    flex-direction: column;
    align-items: center;
  }
}
</style>
