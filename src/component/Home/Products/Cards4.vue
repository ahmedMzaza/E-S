<template>
  <div class="cards">
    <div class="container">
      <div class="card" v-for="card in cards" :key="card.title">
        <img :src="card.img" alt="" />
        <div class="content">
          <h1>Vaprorizer Charger X200 5KW</h1>
          <button>More</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          img: require("../../../assets/bg-banner1.jpg"),
          title: "Vaprorizer Charger X200 5KW",
        },
        {
          img: require("../../../assets/bg-banner2.jpg"),
          title: "Digital Thermometer X30-Pro",
        },
        {
          img: require("../../../assets/bg-banner3.jpg"),
          title: "SuperBrush X200 Higenic",
        },
      ],
    };
  },
};
</script>
<style>
.cards {
}
.cards .container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.cards .container .card {
  display: flex;
  position: relative;
  height: 300px;
  align-items: center;
  width: 395px;
  justify-content: end;
  overflow: hidden;
}

.cards .container .card:hover img {
  transform: scale(1.1);
}
.cards .container .card img {
  z-index: -1;
  position: absolute;
  transition: 0.8s;
}
.cards .container .card .content {
  display: flex;
  flex-direction: column;
  color: #103178;
  width: 40%;
  align-items: end;
  padding: 20px;
}
.cards .container .card .content h1 {
  text-align: end;
}
.cards .container .card .content button:hover {
  background-color: white;
  color: #103178;
}
.cards .container .card .content button {
  background-color: #103178;
  border: 1px solid #103178;
  transition: 0.8s;
  color: white;
  font-size: 17px;
  padding: 8px 20px;
  border-radius: 18px;
}
@media (max-width: 850px) {
  .cards .container .card {
    width: 100%;
    height: 75vh;
  }
  .cards .container .card img {
    width: 100%;
    height: 100%;
  }
  .cards .container {
    flex-direction: column;
    padding: 20px 2%;
  }
}
</style>
