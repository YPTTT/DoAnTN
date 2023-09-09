<template>
  <div class="container">
    <main-menu />
    <a-carousel autoplay>
      <div class="sub-banners fade">
        <img src="../assets/banners/banner1.jpg" />
      </div>
      <div class="sub-banners fade">
        <img src="../assets/banners/banner2.jpg" />
      </div>
      <div class="sub-banners fade">
        <img src="../assets/banners/banner3.jpg" />
      </div>
      <div class="sub-banners fade">
        <img src="../assets/banners/banner4.jpg" />
      </div>
      <div class="sub-banners fade">
        <img src="../assets/banners/banner5.jpg" />
      </div>
    </a-carousel>
    <div class="listFilm">
      <div>
        <a @click="subFilm()"><h1>Phim đang chiếu</h1></a>
        <a @click="comingFilm()"><h1>Phim sắp chiếu</h1></a>
      </div>
      <VueSlickCarousel class="sub-listFilm" v-bind="settings" autoplay>
        <div class="imageFilm">
          <img src="../assets/listfilm/film1.jpeg" alt="#" />
          <p>Name Film 1</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/listfilm/film2.jpeg" alt="#" />
          <p>Name Film 2</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/listfilm/film3.jpeg" alt="#" />
          <p>Name Film 3</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/listfilm/film4.jpeg" alt="#" />
          <p>Name Film 4</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/listfilm/film5.jpeg" alt="#" />
          <p>Name Film 5</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/listfilm/film6.jpeg" alt="#" />
          <p>Name Film 6</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/listfilm/film7.jpeg" alt="#" />
          <p>Name Film 7</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/listfilm/film8.jpeg" alt="#" />
          <p>Name Film 8</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/listfilm/film9.jpeg" alt="#" />
          <p>Name Film 9</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/listfilm/film10.jpeg" alt="#" />
          <p>Name Film 10</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
      </VueSlickCarousel>
      <VueSlickCarousel class="coming-listFilm" v-bind="settings" autoplay>
        <div class="imageFilm">
          <img src="../assets/comingfilm/coming1.jpeg" alt="#" />
          <p>Name Film 1</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/comingfilm/coming2.jpeg" alt="#" />
          <p>Name Film 2</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/comingfilm/coming3.jpeg" alt="#" />
          <p>Name Film 3</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/comingfilm/coming4.jpeg" alt="#" />
          <p>Name Film 4</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/comingfilm/coming5.jpeg" alt="#" />
          <p>Name Film 5</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/comingfilm/coming6.jpeg" alt="#" />
          <p>Name Film 6</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/comingfilm/coming7.jpeg" alt="#" />
          <p>Name Film 7</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/comingfilm/coming8.jpeg" alt="#" />
          <p>Name Film 8</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/comingfilm/coming9.jpeg" alt="#" />
          <p>Name Film 9</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
        <div class="imageFilm">
          <img src="../assets/comingfilm/coming10.jpeg" alt="#" />
          <p>Name Film 10</p>
          <a-button type="submit">Mua vé</a-button>
        </div>
      </VueSlickCarousel>
    </div>
    <div class="typeMember">
      <h1>MEMBERSHIP</h1>
      <div class="sub-typeMember">
        <img src="../assets/typemember/STAR.png" alt="#" />
        <img src="../assets/typemember/GOLD.png" alt="#" />
        <img src="../assets/typemember/DIAMOND.png" alt="#" />
      </div>
    </div>
    <div class="proMotion">
      <h1>Khuyến mãi</h1>
      <VueSlickCarousel
        class="sub-proMotion"
        v-bind="settings_promotion"
        autoplay
      >
        <div>
          <img src="../assets/discount/pro1.png" alt="#" />
        </div>
        <div>
          <img src="../assets/discount/pro2.png" alt="#" />
        </div>
        <div>
          <img src="../assets/discount/pro3.jpg" alt="#" />
        </div>
        <div>
          <img src="../assets/discount/pro4.jpg" alt="#" />
        </div>
        <div>
          <img src="../assets/discount/pro5.jpg" alt="#" />
        </div>
      </VueSlickCarousel>
    </div>
    <footerPage />
  </div>
</template>
<script>
import mainMenu from "./mainMenu.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import footerPage from "./footerPage.vue";
export default {
  name: "homePage",
  components: {
    mainMenu,
    VueSlickCarousel,
    footerPage,
  },
  data() {
    return {
      settings: this.$store.state.settings,
      settings_promotion: this.$store.state.settings_promotion,
    };
  },
  methods: {
    subFilm() {
      document.querySelector(".sub-listFilm").style.display = "block";
      document.querySelector(".coming-listFilm").style.display = "none";
    },
    comingFilm() {
      document.querySelector(".sub-listFilm").style.display = "none";
      document.querySelector(".coming-listFilm").style.display = "block";
    },
  },
};
</script>

<style scoped>
.container {
  background: url(../assets/background-web.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

ant-carousel {
  width: 100%;
  position: relative;
}
.sub-banners img {
  padding-top: 6rem;
  width: 100%;
  height: 45rem;
}
.listFilm {
  padding: 1rem 2rem 3rem 2rem;
}
.listFilm > div:first-child {
  width: 40%;
  display: flex;
  justify-content: space-around;
  margin: 2rem 0 2rem 30%;
}
.listFilm div:first-child h1 {
  color: white;
  font-size: 32px;
  font-weight: bold;
}
.sub-listFilm {
  display: block;
}
.coming-listFilm {
  display: none;
}
.imageFilm {
  height: 24rem;
  width: 16rem;
  overflow: hidden;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.imageFilm img {
  width: 90%;
  height: 75%;
  transition-duration: 0.5s;
}
.imageFilm img:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.imageFilm p {
  margin-top: 1rem;
  color: white;
  font-size: 16px;
  font-weight: bold;
  transition-duration: 0.5s;
}
.imageFilm p:hover {
  scale: 1.2;
  color: aquamarine;
}
.imageFilm button {
  width: 60%;
  height: 2rem;
  border-radius: 14px;
  border: none;
  background: aquamarine;
  font-weight: bold;
}
.imageFilm button:hover {
  scale: 1.1;
  background: white;
}
.typeMember {
  width: 100%;
  padding: 2rem 5rem;
  backdrop-filter: blur(5px);
}
.typeMember h1 {
  color: white;
  font-weight: bold;
}
.sub-typeMember {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.proMotion {
  background: url(../assets/discount/background.jpg);
  padding: 2rem 4rem;
}
.proMotion h1 {
  color: white;
  font-weight: bold;
}
.sub-proMotion {
  width: 100%;
}
.sub-proMotion div {
  width: 30%;
  height: 14rem;
}
.sub-proMotion div img {
  width: 90%;
}
</style>