<template>
  <div class="container">
    <mainMenu/>
    <h1>VỀ CHÚNG TÔI</h1>
    <div class="aboutContent">
        <p>Đây là website đươc phát triển bởi sinh viên ngành HTTT</p>
    </div>
    <footerPage style="position: absolute; bottom: 0;"/>
  </div>
</template>

<script>
import mainMenu from './mainMenu.vue';
import footerPage from './footerPage.vue';
export default {
    name: 'aboutPage',
    components: {
        footerPage,
        mainMenu
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
  height: 100vh;
}
.container h1
{
  padding-top: 7rem;
  color: aqua;
  font-weight: bold;
}
.aboutContent
{
  height: 16rem;
  padding: 0 20%;
  text-align: center;
  color: white;
  font-size: 20px;
}
</style>