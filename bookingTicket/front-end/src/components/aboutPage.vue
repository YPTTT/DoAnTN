<template>
  <div class="container">
    <mainMenu/>
    <h1>VỀ CHÚNG TÔI</h1>
    <div class="aboutContent">
        <p>Đây là website đươc phát triển bởi sinh viên ngành HTTT.</p>
        <p>Website này được xây dựng dựa trên nhu cầu giải trí của con người
          để giúp khách hàng tìm hiểu được thông tin các bộ phim đang chiếu
          hoặc sắp chiếu trên thị trường, từ đó khách hàng có tìm được các bộ
          mình yêu thích. Sau đó, họ có thể đặt vé trực tuyến mà không cần phải
          đến trực tiếp rạp chiếu phim.
        </p>
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
.aboutContent p
{
  text-align: justify;
}
</style>