<template>
  <div class="container">
    <main-menu />
    <a-carousel autoplay>
      <div class="sub-banners fade" v-for="imgBg in imgBgs" :key="imgBg.id">
        <img :src="apiUrl + imgBg.attributes.imgBg.data.attributes.url" alt="#" />
      </div>
    </a-carousel>
    <div class="listFilm">
      <div>
        <a @click="subFilm()"><h1>Phim đang chiếu</h1></a>
        <a @click="comingFilm()"><h1>Phim sắp chiếu</h1></a>
      </div>
      <div class="sub-listFilm">
        <div class="imageFilm" v-for="showingfilm in showingFilms" :key="showingfilm.id">
          <router-link :to="{ name: 'detail-film', params: { id: showingfilm.id } }"><img class="imgShow" :src="apiUrl + showingfilm.attributes.imgFilm.data.attributes.url" alt="#" /></router-link>
          <router-link :to="{ name: 'detail-film', params: { id: showingfilm.id } }"><p class="nameFilm">{{ showingfilm.attributes.nameFilm }}</p></router-link>
        </div>
      </div>
      <div class="coming-listFilm">
        <div class="imageFilm" v-for="comingfilm in comingFilms" :key="comingfilm.id">
          <router-link :to="{ name: 'detail-film', params: { id: comingfilm.id } }"><img class="imgShow" :src="apiUrl + comingfilm.attributes.imgFilm.data.attributes.url" alt="#" /></router-link>
          <router-link :to="{ name: 'detail-film', params: { id: comingfilm.id } }"><p class="nameFilm">{{ comingfilm.attributes.nameFilm }}</p></router-link>
        </div>
      </div>
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
import axios from "axios"

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
      apiUrl: 'http://localhost:3305',
      imgBgs: [],
      showingFilms: [],
      comingFilms: [],
      isLogin: this.$store.state.isLogin,
    };
  },
  mounted() {
    this.fetchImg();
    this.fetchShowingFilms();
    this.fetchComingFilms();
  },
  methods: {
    subFilm() {
      document.querySelector(".sub-listFilm").style.display = "flex";
      document.querySelector(".coming-listFilm").style.display = "none";
    },
    comingFilm() {
      document.querySelector(".sub-listFilm").style.display = "none";
      document.querySelector(".coming-listFilm").style.display = "flex";
    },
    async fetchImg() {
      try {
        const response = await axios.get('http://localhost:3305/api/backgrounds?populate=*'); 
        this.imgBgs = response.data.data;
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
      }
    },
    async fetchShowingFilms() {
      try {
        const currentDate = new Date(); // Thời gian hiện tại
        // Tính ngày 21 ngày trước đây
        const releaseDateThreshold = new Date();
        releaseDateThreshold.setDate(releaseDateThreshold.getDate() - 21);
        const response = await axios.get(`http://localhost:3305/api/films?filters[releaseDate][$gte]=${releaseDateThreshold.toISOString()}&filters[releaseDate][$lte]=${currentDate.toISOString()}&populate=*`);
        this.showingFilms = response.data.data;
        console.log(this.showingFilms);
      } catch(error){
        console.error('Lỗi khi gọi API:', error);
      }
    },
    async fetchComingFilms() {
      try {
        const currentDate = new Date(); // Thời gian hiện tại
        const response = await axios.get(`http://localhost:3305/api/films?filters[releaseDate][$gte]=${currentDate.toISOString()}&populate=*`);
        this.comingFilms = response.data.data;
        console.log(this.comingFilms);
      } catch(error){
        console.error('Lỗi khi gọi API:', error);
      }
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
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
.coming-listFilm {
  display: none;
}
.imageFilm {
  height: 20rem;
  width: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.imageFilm a
{
  width: 100%;
  height: 100%;
}
.imageFilm .imgShow {
  width: 80%;
  height: 100%;
  transition-duration: 0.5s;
}
.imageFilm img:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.imageFilm .nameFilm {
  margin-top: 1rem;
  height: 4rem;
  color: white;
  font-size: 16px;
  font-weight: bold;
  transition-duration: 0.5s;
}
.imageFilm .nameFilm:hover {
  scale: 1.2;
  color: aquamarine;
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
  height: 15rem;
}
.sub-proMotion div img {
  width: 90%;
  height: 100%;
}
</style>