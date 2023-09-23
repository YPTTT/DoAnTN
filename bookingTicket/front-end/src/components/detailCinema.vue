<template>
    <div class="container">
        <mainMenu />
            <div class="container_cinema">
                <h1 class="name_title">{{ cinema.attributes.nameCinema }}</h1>
                <div class="sub_container">
                    <img class="img_cinema" :src="apiUrl + cinema.attributes.imgCinema.data.attributes.url" alt="#" />
                    <div class="detail_cinema">
                        <p class="address_cinema">Địa điểm: {{ cinema.attributes.address }}</p>
                        <p class="phone_cinema">Số điện thoại: 0{{ cinema.attributes.phoneCinema }}</p>
                        <p class="email_cinema">Email liên hệ: {{ cinema.attributes.contact }}</p>
                        <p class="room_cinema">Phòng chiếu: {{ cinema.attributes.room }}</p>
                    </div>
                </div>
                <div class="detail_ticket">
                    <div>
                        <div class="logo_bhd">
                            <img src="../assets/logo-bhd.png">
                        </div>
                        <p class="price_list">BẢNG GIÁ VÉ</p>
                    </div>
                    <table class="table_list">
                        <tr>
                            <th>KHÁCH HÀNG</th>
                            <th>THỨ 2</th>
                            <th>TRƯỚC 10:00 THỨ 3,4,5,6,7,CN</th>
                            <th>SAU 10:00 THỨ 3,4,5,6,7,CN</th>
                        </tr>
                        <tr>
                            <td>NGƯỜI LỚN</td>
                            <td>55K</td>
                            <td>80K</td>
                            <td>60K</td>
                        </tr>
                        <tr>
                            <td>U22 & TRẺ EM</td>
                            <td>50K</td>
                            <td>50K</td>
                            <td>50K</td>
                        </tr>
                    </table>
                    <p class="note_cinema">MIỄN PHÍ TRẺ EM DƯỚI 0.7M KHI ĐI CÙNG NGƯỜI LỚN</p>
                </div>
                <div class="rule_ticket">
                    <h1 style="color: white;">CÁC QUY ĐỊNH GIÁ VÉ</h1>
                    <ul>
                        <li>Giá vé trẻ em áp dụng cho trẻ em có chiều cao dưới 1,3m. Yêu cầu trẻ em có mặt khi mua vé. Trẻ em dưới 0,7m sẽ được miễn phí vé khi mua cùng 01 vé người lớn đi kèm theo. Không áp dụng kèm với chương trình khuyến mãi ưu đãi về giá vé khác.</li>
                        <li>Giá vé thành viên U22 chỉ áp dụng cho thành viên dưới 22 tuổi khi mua vé. Không áp dụng kèm với chương trình khuyến mãi ưu đãi về giá vé khác. </li>
                        <li>Suất chiếu đặc biệt áp dụng giá vé theo khung giờ của ngày. Không áp dụng các giá vé ưu đãi dành cho U22, Privilege Voucher/Staff Voucher, Happy Day. Trong trường hợp Suất chiếu đặc biệt cùng ngày với Happy Day sẽ áp dụng giá vé của Thứ 3.</li>
                    </ul>
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
    name: 'detailCinema',
    components: {
        mainMenu,
        footerPage
    },
    data() {
        return {
            cinema: {},
            apiUrl: 'http://localhost:3305'
        };
    },
    mounted() {
        this.fetchFilms();
    },
    methods: {
        async fetchFilms() {
            try {
                const response = await axios.get(`http://localhost:3305/api/Cinemas/${this.$route.params.id}?populate=*`); // Thay 'URL_API_STRAPI' bằng URL API của bạn
                this.cinema = response.data.data;
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
.container_cinema
{
    margin-left: 15%;
    padding-top: 8rem;
    padding-bottom: 2rem;
    float: left;
    display: flex;
    flex-direction: column;
}
.container_cinema .name_title
{
    color: white;
    text-align: left;
}
.img_cinema
{
    width: 20%;
}
.sub_container
{
    width: 90%;
    display: flex;
}
.detail_cinema
{
    color: white;
    font-size: 18px;
    text-align: left;
    margin-left: 10%;
    width: 40%;
}
.detail_ticket
{
    width: 70%;
    height: 15.5rem;
    background: #fdc122;
    margin-top: 2rem;
}
.detail_ticket>div:first-child
{
    display: flex;
    align-items: center;
}
.detail_ticket>div:first-child .price_list
{
    margin-left: 25%;
    color: black;
    font-size: 24px;
    font-weight: 600;
}
.logo_bhd
{
    width: 13rem;
    height: 4rem;
    overflow: hidden;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0% 100% 18% 82% / 100% 0% 100% 0%;
}
.logo_bhd img
{
    max-width: 85%;
    max-height: 100%;
    width: auto;
    height: auto;
}
.table_list
{
    width: 80%;
    margin: auto;
    margin-top: 1rem;
    color: black;
    font-size: 16px;
    font-weight: 300;
}

th
{
    height: 3rem;
    background: black;
    color: white;
    border: 1px solid #fdc122;
}

td
{
    height: 2.5rem;
}
table, td {
  border: 1px solid black;
}
.note_cinema
{
    width: 80%;
    font-size: 16px;
    font-weight: bold;
    color: #fdc122;
    margin: auto;
    background: black;
    border-radius: 0 0 8px 8px;
}
.rule_ticket
{
    width: 50%;
    text-align: left;
    margin-top: 2rem;
    color: white;
}
</style>