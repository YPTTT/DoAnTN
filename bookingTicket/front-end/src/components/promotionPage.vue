<template>
  <div class="container">
    <mainMenu/>
    <h1>SỰ KIỆN</h1>
    <div class="grid-container">
        <div class="gridItem">
            <img src="../assets/discount/pro1.png" alt="#" />
            <a>Name promotion 1</a>
        </div>
        <div class="gridItem">
            <img src="../assets/discount/pro2.png" alt="#" />
            <a>Name promotion 2</a>
        </div>
        <div class="gridItem">
            <img src="../assets/discount/pro3.jpg" alt="#" />
            <a>Name promotion 3</a>
        </div>
        <div class="gridItem">
            <img src="../assets/discount/pro4.jpg" alt="#" />
            <a>Name promotion 4</a>
        </div>
        <div class="gridItem">
            <img src="../assets/discount/pro5.jpg" alt="#" />
            <a>Name promotion 5</a>
        </div>
    </div>
    <footerPage/>
  </div>
</template>

<script>
import mainMenu from './mainMenu.vue';
import footerPage from './footerPage.vue';
export default {
    name: 'promotionPage',
    components: {
        mainMenu,
        footerPage
    }
}
</script>

<style scoped>
.container
{
  background: url(../assets/discount/bg-img.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.container>h1
{
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    color: white;
    padding-top: 8rem;
}
.grid-container
{
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 2rem;
    padding: 1rem 4rem 3rem 4rem;
}
.gridItem
{
    width: 100%;
}
.gridItem img
{
    width: 100%;
    height: 75%;
    transition-duration: 0.5s;
}
.gridItem img:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.gridItem a
{
    margin-top: 3rem;
    color: white;
    font-size: 20px;
    font-weight: bold;
    transition-duration: 0.5s;
}
.gridItem a:hover
{
    color: aqua;
    transform: scale(1.2);
}
</style>