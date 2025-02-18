<script>
// Import Swiper Vue.js components

export default {
  data() {
    return {
      test: "",
      props: ["text"],
      profile: false,
      Main: [],
      isActive: false,
      isMoreActive: false,
      isUL: false,
      SideBar: false,
      UlLi: false,
      NewUL: null,
      ULReal: null,
      content: 0,
    };
  },

  methods: {
    opencc(flo) {
      console.log(flo);
      localStorage.setItem("catego", flo);
      this.$router.push("/Promotions");
    },
    openSide() {
      this.SideBar = true;
      document.documentElement.classList.add("active");
    },
    closeSide() {
      this.SideBar = false;
      document.documentElement.classList.remove("active");
    },
    largeMenuUlChange() {
      this.isActive = !this.isActive;
      this.isMoreActive = false;
      this.isUL = false;
    },
    largeMenuUlOpened() {
      this.isActive = true;
      this.isMoreActive = false;
      this.isUL = false;
    },
    largeMenuUlLeave() {
      this.isActive = false;
      this.isMoreActive = false;
      this.isUL = false;
    },
    MoreUlChange() {
      this.isMoreActive = !this.isMoreActive;
      this.isActive = false;
      this.isUL = false;
    },
    MoreUlOpened() {
      this.isMoreActive = true;
      this.isActive = false;
      this.isUL = false;
    },
    MoreUlLeave() {
      this.isMoreActive = false;
      this.isActive = false;
      this.isUL = false;
    },
    UlOpened(cardul) {
      if (cardul.titl != "") {
        this.isUL = true;
      }
      if (cardul.titl == "") {
        this.isUL = false;
      }
    },
    UlLeave() {
      this.isUL = false;
    },
    ulnew(cardli) {
      this.NewUL = null;
      this.ULReal = null;
      if (cardli.titles != "") {
        this.NewUL = cardli.titles;
      }
      this.ULReal = this.NewUL.filter((NewUl) => NewUl.titl !== "");
      this.isUL = true;
    },
    ulnewNo(cardli) {
      this.isUL = true;
      this.isActive = true;
    },
    /*  ulnewl(cardli){
      this.NewUL=cardli.titles
      this.isUL=true
    }, */

    ChangeUl() {
      this.UlLi = !this.UlLi;
    },
    setContent() {
      this.content = localStorage.content;
    },
    openCategory(IDCategory) {
      localStorage.setItem("CategoryID", IDCategory);
      console.log(localStorage.CategoryID);
      this.$router.push("/Promotions");
    },
  },
  computed: {},
  beforeUnmount() {
    clearInterval(this.interval);
  },

  mounted() {
    fetch("https://drwessamhabib.com/public/api/category")
      .then((res) => res.json())
      .then((data) => (this.Main = data))
      .catch((err) => console.log(err.message));
    this.interval = setInterval(() => {
      this.setContent();
    }, 100);
  },
};
</script>

<template>
  <nav>
    <header>
      <router-link to="/">
        <img src="../../assets/Website-Logo.png" alt="" />
      </router-link>
      <ul>
        <li>
          <a href="">English<i class="fa-solid fa-globe"></i></a>
        </li>

        <li>
          <router-link to="/Loge">
            تسجيل الدخول <i class="fa-solid fa-user"></i
          ></router-link>
        </li>
        <li>
          <router-link to="/Like">
            المفضلة<i class="fa-solid fa-heart"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/Checkout">
            سلة التسوق
            <v-badge color="error" :content="content" max="9">
              <v-icon>mdi-store-outline</v-icon>
            </v-badge>
          </router-link>
        </li>
      </ul>
    </header>
    <main>
      <div class="text-center w-25 h-100">
        <v-btn class="w-100 h-100 d-flex justify-start" color="blue">
          جميع الفئات
          <i class="fa-solid fa-angle-left"></i>
          <v-menu activator="parent" offset="10 10" width="25%">
            <v-list class="">
              <v-list-item
                v-for="i in Main.data"
                :key="i"
                link
                @click="opencc(i.id)"
              >
                <v-list-item-title
                  class="text-end d-flex justify-space-between align-center"
                  active-color="blue"
                >
                  <v-icon icon="mdi-menu-left" size="x-small"></v-icon>

                  {{ i.name }}</v-list-item-title
                >

                <v-menu
                  :open-on-focus="false"
                  location="left"
                  activator="parent"
                  offset="10"
                  open-on-hover
                  submenu
                >
                  <v-list>
                    <v-list-item v-for="j in i.children" :key="j" link>
                      <v-list-item-title> {{ j.id }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </div>
      <!-- <h2 style="font-size: 16px">جميع الفئات</h2>
        <i class="fa-solid fa-angle-left"></i> -->

      <div
        class="More-ul"
        :class="[isMoreActive ? 'active' : '']"
        @mouseleave="MoreUlLeave"
      >
        <ul class="Menu-ul">
          <li>
            <a> صرف العلاجات</a>
          </li>
          <li>
            <a> استشارة طبيب</a>
          </li>
          <li>
            <a> اسال صيدلي</a>
          </li>
          <li>
            <a> وازن حياتك</a>
          </li>
          <li>
            <a> خبراء البشرة</a>
          </li>
          <li>
            <a> خبير الشعر</a>
          </li>
        </ul>
      </div>

      <div class="menu">
        <router-link to="/Promotions" style="color: red"> العروض </router-link>
        <a @click="MoreUlChange" @mouseenter="MoreUlOpened">
          الخدمات الالكترونية
        </a>
      </div>
      <div class="search">
        <input type="text" placeholder="ابدا بالبحث من هنا.." />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </main>
    <div class="headerS">
      <div>
        <i @click="openSide" class="fa-solid fa-bars"></i>
        <img src="../../assets/Website-Logo.png" alt="" />
      </div>

      <div class="search">
        <input type="text" placeholder="ابدا بالبحث من هنا.." />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>

      <router-link to="/Checkout">
        <i class="fa-solid fa-cart-shopping"></i
      ></router-link>
    </div>
    <div class="sideBar" :class="[SideBar ? 'active' : '']">
      <div class="side">
        <div>
          <a
            @click="closeSide"
            style="width: 5%; text-align: center; padding: 5px; height: auto"
          >
            <i class="fa-solid fa-x"></i>
          </a>
          <p>مرحبا!</p>
          <router-link to="/Loge">
            تسجيل الدخول <i class="fa-solid fa-user"></i
          ></router-link>
        </div>
        <ul>
          <li>
            <a @click="ChangeUl">
              جميع الفئات
              <i
                class="fa-solid fa-chevron-down"
                :class="[UlLi ? 'active' : '']"
              ></i>
            </a>
            <ul :class="[UlLi ? 'active' : '']">
              <li
                class="border-bottom: 1px solid #00000045 !important;"
                v-for="j in Main.data"
                :key="j.id"
                @click="openCategory(j.id)"
              >
                <a> {{ j.name }}</a>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/Promotions" style="color: red">
              العروض
            </router-link>
          </li>
          <li>
            <router-link to="/Like">
              المفضلة<i class="fa-solid fa-heart"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
:root {
  --textColor: #212121;
  --mainColor: #1e90ff;
  --FTWeight: 700;
  --FTSize: 1.4rem;
}

/* Start NavBar */
nav {
  width: 100%;
  height: 112px;
  position: sticky;
  top: 0;
  background-color: white;
  font-weight: 600;
  z-index: 100;
}

header {
  width: 100%;
  height: 70px;
  padding: 0 3% 0 6%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  list-style-type: none;
  padding-right: 15px;
}

a {
  color: var(--textColor);
}

header ul li a i {
  padding: 0 5px;
  color: var(--mainColor);
}

header img {
  max-width: 185px;
}

nav main {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0px 20px;
  height: 40px;
  box-shadow: 1px 1px 10px #00000042;
  z-index: 100;
  position: relative;
  background-color: white;
}

nav main .largeMenu i {
  rotate: -90deg;
}
nav main .largeMenu {
  box-shadow: none;
  width: 20%;
  color: white;
  background-color: var(--mainColor);
  height: 40px;
  border: none;
  border-radius: 3px;
  padding: 6px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.More-ul {
  right: 38%;
}
.largeMenu-ul,
.More-ul {
  width: 36%;
  background-color: white;
  position: absolute;
  top: 65px;
  box-shadow: 1px 2px 20px black;
  border-radius: 5px;
  opacity: 0;
  transition: top 1s 0.5s, opacity 1s 0.5s;
  z-index: -10;
  display: none;
}
.largeMenu-ul.active,
.More-ul.active {
  top: 60px;
  opacity: 1;
  z-index: 1000;
  display: block;
}
.Menu-ul {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.largeMenu-ul li,
.More-ul li {
  transition: 0.5s;
  padding: 6px 10px;
  border: 0.1px solid #00000026;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.largeMenu-ul li i {
  transform: rotate(90deg);
}
.largeMenu-ul li:hover,
.More-ul li:hover {
  box-shadow: 0px 0px 10px var(--mainColor);
}
.Menu-ulS.active {
  display: flex;
}
.Menu-ulS {
  display: none;
  position: absolute;
  right: 99%;
  flex-direction: column;
  width: 80%;
  gap: 5px;
  top: 0%;
  background-color: white;
}
nav main .menu {
  box-shadow: none;
  display: flex;
  justify-content: space-between;
  width: 25%;
  gap: 20px;
}

nav main .menu a {
  border-right: 1px solid var(--mainColor);
  padding-right: 10px;
}
nav main .menu a:first-child {
  border-right: none;
}

nav main .search {
  box-shadow: none;
  border: 1px solid var(--mainColor);
  width: 45%;
  height: 40px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav main .search i {
  width: 10%;
  color: var(--mainColor);
}

nav main .search input:focus {
  outline: none;
}

nav main .search input {
  border: none;
  height: 40px;
  font-size: var(--FTSize);
  font-weight: var(--FTWeight);
  width: 80%;
  background-color: transparent;
  padding: 0 10px;
  font-size: 16px;
}
/* End NavBar */
.headerS {
  width: 100%;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
}

/* Start SideBar */
.sideBar {
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: #1e90ff3d;
  transform: translateX(105%);
  transition: 1s;
}
.sideBar.active {
  transform: translateX(0) !important;
}
.sideBar .side {
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 1px 1px 20px #000000b0;
  font-weight: 300;
}
.sideBar .side > div {
  background-color: var(--mainColor);
  color: white;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: none;
}
.sideBar .side > div a:hover {
  color: white;
  background-color: var(--mainColor);
}
.sideBar .side > div a {
  color: var(--mainColor);
  background-color: white;
  padding: 3px 29px;
  border-radius: 12px;
  transition: 0.5s;
  text-align: center;
}
.sideBar .side ul {
  background-color: white;
}

.sideBar .side ul li ul li:hover {
  background-color: #77777736;
}
.sideBar .side ul li ul {
  display: none;
}
.sideBar .side ul li ul.active {
  display: inline !important;
}
.sideBar .side ul li ul li {
  border: none;
  color: black;
  transition: 0.5s;
}
.sideBar .side ul li a i {
  transform: rotate(0deg);
  transition: 1s;
}
.sideBar .side ul li a i.active {
  transform: rotate(180deg);
}
.sideBar .side ul li a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--mainColor);
}
.sideBar .side ul li {
  padding: 10px 20px;
  border-bottom: 1px solid #0000006b;
}

/* End SideBar */
@media (max-width: 1100px) {
  nav {
    height: 63px;
  }
  header,
  main {
    display: none !important;
  }
  .headerS {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px 10px 35px;
    box-shadow: 0 0 20px #777;
  }
  .headerS div i {
    font-size: 20px;
    color: var(--mainColor);
    cursor: pointer;
  }
  .headerS div {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .headerS img {
    max-width: 110px;
  }

  .headerS div.search {
    box-shadow: none;
    border: 1px solid var(--mainColor);
    width: 70%;
    height: 40px;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }

  .headerS .search i {
    color: var(--mainColor);
  }

  .headerS .search input:focus {
    outline: none;
  }

  .headerS .search input {
    border: none;
    height: 40px;
    font-size: 14px;
    width: 95%;
    background-color: transparent;
    padding: 0 10px;
  }
}
@media (max-width: 750px) {
  .headerS div.search {
    width: 40%;
  }
}

@media (max-width: 500px) {
  .headerS {
    padding: 10px !important;
  }
  .headerS .search i {
    font-size: 18px;
  }
  .headerS .search input {
    font-size: 16px !important;
    padding: 0 !important;
  }
}
</style>
