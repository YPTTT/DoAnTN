<template>
  <div class="container">
    <main-menu/>
        <div class="sub-container">
            <div class="navMenu">
                <ul>
                    <a href="#"><li>1. Chọn vé</li></a>
                    <a href="#" @click="selectedSlot"><li>2. Chọn ghế</li></a>
                    <a href="#"><li>3. Xác nhận</li></a>
                    <a href="#"><li>4. Đặt vé thành công</li></a>
                </ul>
            </div>
            <div class="selectedTicket">
                <div class="infoFilm">
                    <img class="img_film" :src="apiUrl + film.attributes.imgFilm.data.attributes.url" alt="#" />
                    <div>
                        <p>{{ film.attributes.nameFilm }}</p>
                        <p class="infoTime">Phim được chiếu vào {{ infoTicket.selectedSlotTime }} {{ infoTicket.date }} tại {{ infoTicket.selectedCinema }}</p>
                        <div id="selectedTicket">
                            <div class="dateBooking">
                                <p @click="clickHandler">{{ today }}</p>
                                <p @click="clickHandler">{{ tomorrow }}</p>
                            </div>
                            <div class="slotTime">
                                <p v-for="slotTime in slotTimes" :key="slotTime.id" v-on:click="selectSlotTime">{{ slotTime.slotTime }}</p>
                            </div>
                            <select class="infoCinema" v-model="infoTicket.selectedCinema">
                                <option value="" disabled selected>Chọn rạp chiếu phim</option>
                                <option v-for="cinema in cinemas" :key="cinema.id" v-bind:value="cinema.attributes.nameCinema">
                                    <p>{{ cinema.attributes.nameCinema }}</p>
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="infoTicket" >
                    <h1>LƯU Ý</h1>
                    <ul>
                        <li>Hãy chọn kỹ loại vé và số lượng bạn muốn mua</li>
                        <li>Vui lòng chọn kỹ loại vé và số lượng quý khách muốn mua</li>
                    </ul>
                    <div class="detailTicket">
                        <p>Vé</p>
                        <p>Giá</p>
                        <p>Số lượng</p>
                        <p>Tổng</p>
                        <p>{{ film.attributes.tickets.data[0].attributes.nameTicket}}</p>
                        <p>{{ film.attributes.tickets.data[0].attributes.ticketPrice}}</p>
                        <div class="quantityTicket">
                            <button @click="decrement">-</button>
                            <input v-model="infoTicket.inputValue" type="text" class="inputQuantity">
                            <button @click="increment">+</button>
                        </div>
                        <p>{{ totalPrice }} VNĐ</p>
                    </div>
                </div>
                <a-button class="buttonSlot" @click="selectedSlot">CHỌN GHẾ</a-button>
            </div>
            <div class="selectedSlot">
                <h1>CHỌN GHẾ</h1>
                <p>Vui lòng chọn ghế trong sơ đồ phía dưới. Nếu bạn muốn thay đổi số lượng vé muốn mua thì vui lòng nhấp vào <span> Bước 1: 'Chọn vé' </span> ở thanh công cụ bên trên để quay lại màn hình chọn</p>
                <div class="seatSlot">
                    <div>
                        <div>
                            <p><i style="background-color: red;" class="fa-regular fa-square"></i> &nbsp; Ghế đang chọn</p>
                        </div>
                        <div>
                            <p><i style="background-color: #14252d;" class="fa-regular fa-square"></i> &nbsp; Ghế trống</p>
                        </div>
                        <div>
                            <p><i style="background-color: gray;" class="fa-regular fa-square"></i> &nbsp; Ghế đã bán</p>
                        </div>
                    </div>
                    <div class="seatList">
                        <h2>SCREEN</h2>
                        <div class="sub-seatList">
                            <div class="nameRow">
                                <p>A</p>
                                <p>B</p>
                                <p>C</p>
                                <p>D</p>
                                <p>E</p>
                                <p>F</p>
                                <p>G</p>
                                <p>H</p>
                            </div>
                            <div class="valueRow">
                                <p v-for="seatList in seatLists" :key="seatList.id">{{ seatList.numberSeat }}</p>
                            </div>
                            <div class="nameRow">
                                <p>A</p>
                                <p>B</p>
                                <p>C</p>
                                <p>D</p>
                                <p>E</p>
                                <p>F</p>
                                <p>G</p>
                                <p>H</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <footerPage/>
  </div>
</template>

<script>
import axios from 'axios';
import mainMenu from './mainMenu.vue';
import footerPage from './footerPage.vue';
export default {
  components: { mainMenu, footerPage },
    name: 'bookingPage',
    data() {
        return {
            film: {},
            slotTimes: {},
            apiUrl: 'http://localhost:3305',
            cinemas: [],
            releasedate: '',
            today: '',
            tomorrow: '',
            infoTicket: 
            {
                selectedSlotTime: null,
                selectedCinema: '',
                spending: '',
                inputValue: 0,
                date: '',
            },
            seatLists: this.$store.state.seatLists,
        }
    }, 
    mounted() {
        this.fetchFilms();
        this.fetchCinemas();
        const today = new Date();
        this.today = today.toLocaleDateString('vi-VN', { day: 'numeric', month: 'numeric', year: 'numeric'});
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        this.tomorrow = tomorrow.toLocaleDateString('vi-VN', { day: 'numeric', month: 'numeric', year: 'numeric'});
    },
    computed: {
        totalPrice() {
            const ticketPrice = this.film.attributes.tickets.data[0].attributes.ticketPrice;
            return ticketPrice * this.infoTicket.inputValue; // Tính tổng số tiền vé
        },
    },
    watch: {
        'infoTicket': {
            handler: 'saveInfoTicketToLocalStorage',
            deep: true,
        },
    },
    methods: {
        async fetchFilms() {
            try {
                const response = await axios.get(`http://localhost:3305/api/Films/${this.$route.params.id}?populate=*`); // Thay 'URL_API_STRAPI' bằng URL API của bạn
                this.film = response.data.data;
                const releasedate = new Date(this.film.attributes.releaseDate);
                const formatDate = releasedate.toLocaleDateString('vi-VN', {weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric'});
                this.releasedate = formatDate;
                this.slotTimes = response.data.data.attributes.timeSlot;
            } catch (error) {
                console.error('Lỗi khi gọi API:', error);
            }
        },
        async fetchCinemas() {
            try {
                const response = await axios.get('http://localhost:3305/api/Cinemas?populate=*');
                this.cinemas = response.data.data;
            } catch (error) {
                console.error('Lỗi khi gọi API:', error);
            }
        },
        selectSlotTime($event) {
        this.infoTicket.selectedSlotTime = $event.target.innerText;
        },
        increment() {
            this.infoTicket.inputValue++; 
            this.infoTicket.spending = this.totalPrice;
        },
        decrement() {
            if (this.infoTicket.inputValue > 0) {
            this.infoTicket.inputValue--; 
            this.infoTicket.spending = this.totalPrice;
            }
        },
        saveInfoTicketToLocalStorage() {
            localStorage.setItem('infoTicket', JSON.stringify(this.infoTicket));
        },
        clickHandler($event) {
            this.infoTicket.date = $event.target.innerText;
        },
        selectedSlot()
        {
            document.querySelector("#selectedTicket").style.display = 'none';
            document.querySelector(".infoTicket").style.display = 'none';
            document.querySelector(".buttonSlot").style.display = 'none';
            document.querySelector(".selectedSlot").style.display = "block";
        }
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
.sub-container
{
    width: 80%;
    margin: auto;
    padding-bottom: 2rem;
}
.navMenu
{
    padding: 8rem 0 3rem 0;
    width: 100%;
    height: 3rem;
}
.navMenu ul
{
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    padding: 0;
}
.navMenu ul a
{
    width: 25%;
    height: 3rem;
    font-size: 20px;
    font-weight: bold;
    color: black;
    background: aqua;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
}
.navMenu ul a:hover
{
    color: white;
}
.selectedTicket
{
    width: 100%;
    display: block;
}
#selectedTicket
{
    display: none;
}
.infoFilm
{
    width: 100%;
    margin-top: 2rem;
    display: flex;
    text-align: left;
    color: white;
    font-size: 20px;
    font-weight: bold;
}
.infoFilm>div
{
    margin-left: 2rem;
}
.infoFilm img
{
    width: 13%;
    height: 15%;
}
.infoFilm div
{
    width: 70%;
}
.infoTime
{
    width: 60%;
    height: auto;
}
.dateBooking
{
    width: 16rem !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.dateBooking p:hover
{
    background: aqua;
    color: black;
}
.dateBooking p
{
    width: auto;
    height: 2rem;
    background: black;
    padding: 0.8rem;
    display: flex;
    align-items: center;
}
.slotTime
{
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
    
}
.slotTime p
{
    height: 2.5rem;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    color: white;
    font-size: 18px;
    font-weight: bold;
}
.slotTime p:hover
{
    background: aqua;
    color: black;
}
select.infoCinema 
{
    background: black;
    height: 3rem;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    padding-left: 1rem;
    border: none;
}
select.infoCinema:hover
{
    background: aqua;
    color: black;
}
.infoTicket
{
    text-align: left;
    margin-top: 1rem;
    color: white;
    display: none;
}
.infoTicket h1
{
    color: red;
    font-size: 24px;
    font-weight: bold;
}
.infoTicket ul
{
    color: white;
    font-size: 18px;
    font-weight: bold;
}
.detailTicket
{
    width: 60%;
    height: auto;
    display: grid;
    grid-template-columns: 35% 15% 30% 20%;
    text-align: center;
    border: 1px solid aqua;
    padding: 1rem 0 0.5rem 0;
    font-weight: bold;
    font-size: 16px;
}
.quantityTicket
{
    color: black;
}
.quantityTicket .inputQuantity
{
    width: 2rem;
    text-align: center;
}
.buttonSlot
{
    margin: 1rem 0 0 11%;
    font-weight: bold;
    height: 2.5rem;
}
.selectedSlot
{
    width: 100%;
    display: block;
    margin-top: 1rem;
    text-align: left;
}
.selectedSlot h1
{
    color: aqua;
    font-weight: bold;
}
.selectedSlot p
{
    width: 70%;
    font-size: 16px;
    font-weight: bold;
    color: white;
}
.selectedSlot span
{
    color: aqua;
}
.seatSlot
{
    width: 70%;
}
.seatSlot>div:first-child
{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.seatSlot>div:first-child>div p
{
    width: 10rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.seatList
{
    width: 100%;
    background: #14252d;
    padding: 1rem 0 0.5rem 0;
} 
.seatList h2
{
    width: 50%;
    margin: auto;
    text-align: center;
    background: rgb(34, 33, 33);
    color: white;
    font-weight: bold;
}
.sub-seatList
{
    width: 60%;
    height: auto;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    margin: auto;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}
.sub-seatList>div p
{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.nameRow
{
    background: white;
    display: grid;
    grid-template-rows: auto auto auto auto auto auto auto auto;
}
.nameRow p
{
    color: black;
}
.valueRow
{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
}
.valueRow p
{
   border: 3px solid aqua; 
}
</style>