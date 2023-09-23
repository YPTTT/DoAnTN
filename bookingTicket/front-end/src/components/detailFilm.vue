<template>
    <div class="container">
        <mainMenu />
            <div class="container_film">
                <h1 class="name_title">TRANG CHỦ | {{ film.attributes.nameFilm }}</h1>
                <div>
                    <img class="img_film" :src="apiUrl + film.attributes.imgFilm.data.attributes.url" alt="#" />
                    <div class="detail_film">
                        <p class="name_film">{{ film.attributes.nameFilm }}</p> 
                        <p class="content_film">{{ film.attributes.details }}</p>
                        <div class="sub_detail">
                            <div>
                                <p>Đạo diễn:</p>
                                <p>Ngày khởi chiếu:</p>
                                <p>Thời lượng:</p>
                                <p>Phân loại:</p>
                            </div>
                            <div>
                                <p class="author_film">{{ film.attributes.author }}</p> 
                                <p class="release_film">{{ film.attributes.releaseDate }}</p> 
                                <p class="duration_film">{{ film.attributes.duration }} phút</p> 
                                <p class="required_film">T{{ film.attributes.ageRequirement }} - PHIM DÀNH CHO KHÁN GIẢ TỪ {{ film.attributes.ageRequirement }} TRỞ LÊN</p> 
                            </div>
                        </div>
                        <a-button class="button_film"><i class="fa-solid fa-ticket"></i>Mua vé ngay</a-button>
                    </div>
                </div>
            </div>
        <footerPage />
    </div>
</template>
  
<script>
import mainMenu from './mainMenu.vue';
import footerPage from './footerPage.vue';
import axios from 'axios'
export default {
    name: 'detailFilm',
    components: {
        mainMenu,
        footerPage
    },
    data() {
        return {
            film: {},
            apiUrl: 'http://localhost:3305'
        };
    },
    mounted() {
        this.fetchFilms();
    },
    methods: {
        async fetchFilms() {
            try {
                const response = await axios.get(`http://localhost:3305/api/Films/${this.$route.params.id}?populate=*`); // Thay 'URL_API_STRAPI' bằng URL API của bạn
                this.film = response.data.data;
            } catch (error) {
                console.error('Lỗi khi gọi API:', error);
            }
        },
    },
}
</script>
  
<style scoped>
.container {
    background: url(../assets/background-film.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment:fixed;
    background-position: center center;
}
.container_film
{
    margin-left: 15%;
    padding-top: 8rem;
    padding-bottom: 2rem;
}
.container_film .name_title
{
    text-align: left;
    color: white;
}
.img_film
{
    width: 35%;
    height: 100%;
}
.container_film>div:last-child
{
    width: 60%;
    display: flex;
    justify-content: space-around;
}
.detail_film
{
    text-align: left;
    margin-left: 10%;
    color: white;
    font-weight: bold;
}
.sub_detail
{
    width: 110%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
}
.name_film
{
    font-size: 26px;
}
.content_film
{
    color: #A6B2C9;
    font-size: 16px;
    text-align: justify;
}
.button_film
{
    width: 10rem;
    height: 2rem;
    background: aqua;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.button_film:hover
{
    background: white;
    transform: scale(1.1);
}
</style>