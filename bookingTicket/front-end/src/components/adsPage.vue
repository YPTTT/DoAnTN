<template>
  <div class="container">
    <mainMenu/>
    <h1>DỊCH VỤ QUẢNG CÁO</h1>
    <div class="adsContent">
        <p>Thông tin về dịch vụ quảng cáo</p>
        <p>Chúng tôi đang trở thành điểm đến mới mẻ và cực kỳ tiện lợi cho những khách hàng có nhu cầu quảng cáo sản phẩm và tổ chức sự kiện. Với lượng khán giả thường xuyên rất đông đảo, đặc biệt là các ngày lễ và cuối tuần, việc quảng cáo sản phẩm qua các TVC trước giờ chiếu phim hay tại các LCD sảnh đã trở nên một công cụ không thể thiếu trong media mix của nhiều công ty trong nhiều lĩnh vực. Ngoài TVC, các sảnh rạp cũng là một không gian lý tưởng cho việc phát sampling, đặt các booth hoặc tủ trưng bày, để khán giả quan tâm và tìm hiểu trực tiếp, thậm chí tương tác với sản phẩm của mình.</p>
        <p>Các phòng chiếu được thiết kế rộng rãi, màn hình và âm thanh chuẩn, các hàng ghế sắp xếp từ thấp đến cao, hoàn toàn phù hợp cho việc tổ chức các hội nghị, hội thảo hay họp mặt cho đông người. Việc tổ chức này có thể được thực hiện qua cách thuê phòng chiếu trực tiếp hoặc mua vé số lượng lớn, và đều được áp dụng mức chiếu khấu cực kỳ hấp dẫn.</p>
        <ul>
            <li>Quảng cáo: TVC, POSM, Booth…</li>
            <li>Thẻ quà tặng, phiếu quà tặng</li>
            <li>Thuê phòng chiếu làm sự kiện / xem phim</li>
            <li>Vé số lượng lớn</li>
        </ul>
        <p>Hãy liên hệ ngay với chúng tôi</p>
        <ul>
            <li>Địa chỉ: Bắc Từ Liêm, Hà Nội, Việt Nam</li>
            <li>Số điện thoại: 0123456789</li>
            <li>Email: hai16112001kk@gmail.com</li>
        </ul>
    </div>
    <footerPage style="position: absolute; bottom: 0;"/>
  </div>
</template>

<script>
import mainMenu from './mainMenu.vue'
import footerPage from './footerPage.vue';
export default {
    name: 'adsPage',
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
.container h1
{
  padding-top: 7rem;
  color: aqua;
  font-weight: bold;
}
.adsContent
{
  padding: 1rem 20%;
  text-align: left;
  color: white;
  font-size: 16px;
}
</style>