<template>
  <div class="container">
    <mainMenu />
    <div class="grid-container">
        <div class="gridItem" v-for="film in films" :key="film.id">
            <router-link :to="{ name: 'detail-film', params: { id: film.id } }"><img :src="apiUrl + film.attributes.imgFilm.data.attributes.url" alt="#" /></router-link>
            <router-link :to="{ name: 'detail-film', params: { id: film.id } }"><p>{{ film.attributes.nameFilm }}</p></router-link>
            <router-link :to="{ name: 'detail-film', params: { id: film.id } }"><a-button>Mua vé</a-button></router-link>
        </div>
    </div>
    <footerPage/>
  </div>
</template>

<script>
import mainMenu from './mainMenu.vue';
import footerPage from './footerPage.vue';
import axios from 'axios'
export default {
    name: 'showtimesPage',
    components: {
        mainMenu,
        footerPage
    },
    data() {
        return {
            films: [],
            apiUrl: 'http://localhost:3305'
        };
    },
    mounted() {
        this.fetchFilms();
    },
    methods: {
        async fetchFilms() {
            try {
                const currentDate = new Date(); // Thời gian hiện tại
                // Tính ngày 30 ngày trước đây
                const releaseDateThreshold = new Date();
                releaseDateThreshold.setDate(releaseDateThreshold.getDate() - 21);
                const response = await axios.get(`http://localhost:3305/api/films?filters[releaseDate][$gte]=${releaseDateThreshold.toISOString()}&filters[releaseDate][$lte]=${currentDate.toISOString()}&populate=*`); // Thay 'URL_API_STRAPI' bằng URL API của bạn
                this.films = response.data.data;
            } catch (error) {
                console.error('Lỗi khi gọi API:', error);
            }
        },
    },
}
</script>

<style scoped>
.container
{
  background: url(../assets/background-web.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.grid-container
{
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap: 3rem;
    padding: 9rem 3rem 3rem 3rem;
}
.gridItem
{
    width: 100%;
    overflow: hidden;
}
.gridItem img
{
    width: 18rem;
    height: 25rem;
    transition-duration: 0.5s;
}
.gridItem img:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.gridItem p
{
    margin-top: 1rem;
    color: white;
    font-size: 20px;
    font-weight: bold;
    transition-duration: 0.5s;
}
.gridItem p:hover
{
    color: aqua;
    transform: scale(1.2);
}
.gridItem button
{
    width: 10rem;
    height: 2rem;
    background: aqua;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    border: none;
}
.gridItem button:hover
{
    background: white;
    transform: scale(1.1);
}
</style>