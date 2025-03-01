<template>
  <div class="container">
    <div class="offer">
      <h1>
        <v-icon> mdi-check-decagram-outline</v-icon> 100% Secure delivery
        without contacting the courier
      </h1>
      <a>more</a>
    </div>
  </div>
</template>
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
@media (max-width: 500px) {
  .container .offer {
    flex-direction: column;
    align-items: end;
    height: 175px;
    padding: 15px;
  }
}
</style>
