<template>
  <footer>
    <div class="divIcon">
      <h3>ابق على تواصل</h3>
      <div class="icons">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-tiktok"></i>
        <i class="fa-brands fa-snapchat"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
    </div>
    <div>
      <h3>خدمات ضيوف د وسام أونلاين</h3>
      <div class="text">
        <h4>الاسئلة المتداولة</h4>
        <h4>تواصل معنا</h4>
      </div>
    </div>
    <div>
      <h3>تسوق مع د وسام أونلاين</h3>
      <div class="text">
        <h4>خدمة التوصيل للمنازل</h4>
        <h4>سياسة الاستبدال والاسترجاع</h4>
        <h4>فروعنا</h4>
      </div>
    </div>
    <div>
      <h3>شركة د وسام الطبية</h3>
      <div class="text">
        <h4>عن د وسام كمال حبيب</h4>
        <h4>شركة د وسام الطبية</h4>
      </div>
    </div>
  </footer>
</template>
<script></script>
<style>
footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: white;
  align-items: start;
  padding: 50px 65px;
  box-shadow: -13px 0 20px #00000073;
  flex-wrap: wrap;
}
footer > div {
  text-align: center;
}
footer div h3 {
  padding: 15px 0;
  border-bottom: 1px solid var(--mainColor);
  color: var(--mainColor);
}
footer div .text {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 19px;
}
footer div .text h4:hover {
  color: var(--mainColor);
}
footer div .icons {
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  color: var(--mainColor);
  font-size: 35px;
  flex-wrap: wrap;
  gap: 10px;
}

@media (max-width: 500px) {
  footer {
    justify-content: center;
  }
  footer div {
    display: none;
  }
  footer .divIcon {
    display: block;
  }
}
</style>
