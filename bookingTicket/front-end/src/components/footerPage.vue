<template>
  <div class="footerPage">
      <div>
        <a><h1>Về chúng tôi</h1></a>
        <a><p>Hệ thống rạp</p></a>
        <a><p>Tuyển dụng</p></a>
        <a><p>Liên hệ</p></a>
      </div>
      <div>
        <a><h1>Quy định & điều khoản</h1></a>
        <a><p>Quy định thành viên</p></a>
        <a><p>Điều khoản</p></a>
        <a><p>Hướng dẫn đặt vé trực tuyến</p></a>
        <a><p>Quy định và chính sách chung</p></a>
        <a><p>Chính sách bảo vệ thông tin cá nhân của người tiêu dùng</p></a>
      </div>
    </div>
</template>

<script>
export default {
    name: 'footerPage',
}
</script>

<style scoped>
.footerPage
{
  width: 100%;
  padding: 2rem 0 2rem 10%;
  display: flex;
  background: url(../assets/bg-footer.jpg);
}
.footerPage div 
{
  text-align: left;
  font-size: 16px;
  width: 23rem;
}
.footerPage h1
{
    color: aqua;
  font-weight: bold;
}
.footerPage p
{
    color: white;
    text-decoration: none;
}
.footerPage div>a p:hover
{
    color: aqua;
    text-decoration: underline;
    cursor: pointer;
}
</style>