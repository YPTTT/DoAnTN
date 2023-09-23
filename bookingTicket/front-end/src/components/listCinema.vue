<template>
    <div class="container">
      <mainMenu />
      <div class="grid-container">
          <div class="gridItem" v-for="cinema in cinemas" :key="cinema.id">
              <router-link :to="{ name: 'detail-cinema', params: { id: cinema.id } }"><img :src="apiUrl + cinema.attributes.imgCinema.data.attributes.url" alt="#" /></router-link>
              <router-link :to="{ name: 'detail-cinema', params: { id: cinema.id } }"><p>{{ cinema.attributes.nameCinema }}</p></router-link>
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
      name: 'listCinema',
      components: {
          mainMenu,
          footerPage
      },
      data() {
          return {
              cinemas: [],
              apiUrl: 'http://localhost:3305'
          };
      },
      mounted() {
          this.fetchFilms();
      },
      methods: {
          async fetchFilms() {
              try {
                  const response = await axios.get('http://localhost:3305/api/Cinemas?populate=*'); 
                  this.cinemas = response.data.data;
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
      grid-template-columns: auto auto auto auto;
      gap: 2rem;
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
  </style>