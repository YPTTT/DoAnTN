<template>
  <div class="container">
    <mainMenu />
    <div class="grid-container">
        <div class="gridItem">
            <a><img src="../assets/listfilm/film1.jpeg" alt="#" /></a>
            <a><p>Name Film 1</p></a>
            <a><a-button>Mua vé</a-button></a>
        </div>
        <div class="gridItem">
            <a><img src="../assets/listfilm/film2.jpeg" alt="#" /></a>
            <a><p>Name Film 2</p></a>
            <a><a-button>Mua vé</a-button></a>
        </div>
        <div class="gridItem">
            <a><img src="../assets/listfilm/film3.jpeg" alt="#" /></a>
            <a><p>Name Film 3</p></a>
            <a><a-button>Mua vé</a-button></a>
        </div>
        <div class="gridItem">
            <a><img src="../assets/listfilm/film4.jpeg" alt="#" /></a>
            <a><p>Name Film 4</p></a>
            <a><a-button>Mua vé</a-button></a>
        </div>
        <div class="gridItem">
            <a><img src="../assets/listfilm/film5.jpeg" alt="#" /></a>
            <a><p>Name Film 5</p></a>
            <a><a-button>Mua vé</a-button></a>
        </div>
        <div class="gridItem">
            <a><img src="../assets/listfilm/film6.jpeg" alt="#" /></a>
            <a><p>Name Film 6</p></a>
            <a><a-button>Mua vé</a-button></a>
        </div>
        <div class="gridItem">
            <a><img src="../assets/listfilm/film7.jpeg" alt="#" /></a>
            <a><p>Name Film 7</p></a>
            <a><a-button>Mua vé</a-button></a>
        </div>
        <div class="gridItem">
            <a><img src="../assets/listfilm/film8.jpeg" alt="#" /></a>
            <a><p>Name Film 8</p></a>
            <a><a-button>Mua vé</a-button></a>
        </div>
        <div class="gridItem">
            <a><img src="../assets/listfilm/film9.jpeg" alt="#" /></a>
            <a><p>Name Film 9</p></a>
            <a><a-button>Mua vé</a-button></a>
        </div>
        <div class="gridItem">
            <a><img src="../assets/listfilm/film10.jpeg" alt="#" /></a>
            <a><p>Name Film 10</p></a>
            <a><a-button>Mua vé</a-button></a>
        </div>
    </div>
    <footerPage/>
  </div>
</template>

<script>
import mainMenu from './mainMenu.vue';
import footerPage from './footerPage.vue';
export default {
    name: 'showtimesPage',
    components: {
        mainMenu,
        footerPage
    }
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
    width: 85%;
    height: 80%;
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