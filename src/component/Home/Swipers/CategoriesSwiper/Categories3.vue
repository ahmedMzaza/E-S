<template>
  <div class="Categories3">
    <div class="container">
      <div class="card" v-for="(card, i) in categories" :key="i">
        <h1>{{ card.title }}</h1>
        <button>more</button>
        <img :src="card.img" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [
        {
          img: require("../../../../assets/Categories3/dental-cat.png"),
          title: "Dental",
        },
        {
          img: require("../../../../assets/Categories3/pressure-cat.png"),
          title: "Blood Pressure",
        },
        {
          img: require("../../../../assets/Categories3/program.png"),
          title: "Protective Covers",
        },
        {
          img: require("../../../../assets/Categories3/uniforms-cat.png"),
          title: "Uniforms",
        },
        {
          img: require("../../../../assets/Categories3/facemask.png"),
          title: "Face Mask",
        },
      ],
    };
  },
};
</script>
<style>
.Categories3 {
}
.Categories3 .container {
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 7px;
}
.Categories3 .container .card {
  background-color: #f0f2f5;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  padding: 20px 0 0 20px;
}
.Categories3 .container .card h1 {
  text-align: end;
  color: #103178;
  font-size: 23px;
}
.Categories3 .container .card button:hover {
  background-color: #103178;
  color: white;
  font-weight: bold;
}
.Categories3 .container .card button {
  font-weight: bold;
  padding: 5px 20px;
  background-color: white;
  border-radius: 20px;
  text-transform: capitalize;
  color: #103178;
  transition: 0.8s;
}
.Categories3 .container .card img {
  width: 100%;
}
@media (max-width: 920px) {
  .Categories3 .container {
    flex-wrap: wrap;
  }
  .Categories3 .container .card {
    width: 32%;
  }
}
@media (max-width: 680px) {
  .Categories3 .container .card {
    width: 49% !important;
  }
}
@media (max-width: 400px) {
  .Categories3 .container .card {
    width: 100% !important;
  }
}
</style>
