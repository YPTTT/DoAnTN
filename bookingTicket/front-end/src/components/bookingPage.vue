<template>
  <div class="container">
    <main-menu/>
        <div class="sub-container">
            <div class="navMenu">
                <ul>
                    <a href="#" @click="selectedSlotTime"><li>1. Chọn vé</li></a>
                    <a href="#" @click="selectedSlot"><li>2. Chọn ghế</li></a>
                    <a href="#" @click="toggleConfirm"><li>3. Xác nhận</li></a>
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
                    <div class="sub-infoTicket">
                        <div class="detailTicket">
                            <p>Vé</p>
                            <p>Giá</p>
                            <p>Số lượng</p>
                            <p>Tổng</p>
                            <p>{{ film.attributes.tickets.data[0].attributes.nameTicket }}</p>
                            <p>{{ film.attributes.tickets.data[0].attributes.ticketPrice }}</p>
                            <div class="quantityTicket">
                                <button @click="decrement">-</button>
                                <input v-model="infoTicket.inputValue" type="text" class="inputQuantity">
                                <button @click="increment">+</button>
                            </div>
                            <p>{{ totalPrice }} VNĐ</p>
                        </div>
                        <a-button class="buttonSlot" @click="selectedSlot">CHỌN GHẾ</a-button>
                    </div>
                    
                </div>
                
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
                                <p v-for="(seat, index) in seatLists" :key="index" @click="toggleSeat(seat)"  :class="{ selected: isSelected(seat) }">{{ seat.attributes.numberSeat }}</p>
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
                    <a-button class="confirmButton" @click="toggleConfirm()">Xác nhận</a-button>
                </div>
            </div>
            <div class="confirmBooking">
                <div class="confirmCart">
                    <h3>GIỎ HÀNG CỦA BẠN</h3>
                    <div class="infoCart">
                        <div>
                            <p style="color: aqua;">Phim / Title:</p>
                            <p>Rạp / Cinema:</p>
                            <p>Ngày / Date:</p>
                            <p>Suất / Session:</p>
                            <p>Phòng / Room:</p>
                            <p>Ghế / Seat:</p>
                            <p>Thành tiền / Total:</p>
                        </div>
                        <div>
                            <p style="color:aqua">{{ film.attributes.nameFilm }}</p>
                            <p>{{ infoTicket.selectedCinema }}</p>
                            <p>{{ infoTicket.date }}</p>
                            <p>{{ infoTicket.selectedSlotTime }}</p>
                            <p>{{ film.attributes.room_cinemas.data[0].attributes.roomNumber }}</p>
                            <div class="confirmSeat">
                                <p v-for="(seat, index) in infoTicket.selectedSeats" :key="index">{{ seat.attributes.rowSeat }}-{{ seat.attributes.numberSeat }}</p>
                            </div>
                            <p>{{ totalPrice }} VNĐ</p>
                        </div>
                    </div>
                    <p>Quý khách vui lòng kiểm tra lại thông tin trước khi thanh toán<br>
                    <span>Vé mua rồi sẽ không được đổi hoặc trả lại</span></p>
                    <p>Please check the infomation before purchasing ticket<br>
                    <span>Purchased Ticke can not be changed or refunded</span></p>
                </div>
                <div class="confirmTicket">
                    <p>Vé</p>
                    <p>Giá</p>
                    <p>Số lượng</p>
                    <p>Tổng</p>
                    <p>{{ film.attributes.tickets.data[0].attributes.nameTicket}}</p>
                    <p>{{ film.attributes.tickets.data[0].attributes.ticketPrice}}</p>
                    <p>{{ infoTicket.inputValue }}</p>
                    <p>{{ totalPrice }} VNĐ</p>
                </div>
                <div class="infoUser">
                    <h4>CHI TIẾT CÁ NHÂN</h4>
                    <div>
                        <div>
                            <p>Tên:</p>
                            <p>Email:</p>
                            <p>Điện thoại:</p>
                        </div>
                        <div>
                            <p>{{ userInfo.username }}</p>
                            <p>{{ userInfo.email }}</p>
                            <p>0{{ userInfo.phoneNumber }}</p>
                        </div>
                    </div>
                </div>
                <div class="buttonBooking">
                    <div>
                        <a-button class="cancelButton" @click="cancelButton">HỦY ĐẶT VÉ</a-button>
                        <a-button class="purchaseButton" @click="purchaseButton">THANH TOÁN</a-button>
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
// import VNPay from 'node-vnpay';
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
                selectedSeats:[],
                nameFilm: '',
                nameTicket:'',
                ticketPrice: '',
                roomNumber: ''
            },
            seatLists: [],
            userInfo: JSON.parse(localStorage.getItem('userInfo')),
        }
    }, 
    mounted() {
        this.fetchFilms();
        this.fetchCinemas();
        this.fetchSeat();
        // this.totalMoney();
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
                this.infoTicket.nameFilm = response.data.data.attributes.nameFilm;
                this.infoTicket.nameTicket = response.data.data.attributes.tickets.data[0].attributes.nameTicket;
                this.infoTicket.ticketPrice = response.data.data.attributes.tickets.data[0].attributes.ticketPrice;
                this.infoTicket.roomNumber = response.data.data.attributes.room_cinemas.data[0].attributes.roomNumber;
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
        async fetchSeat() {
            try {
                const response = await axios.get('http://localhost:3305/api/seats?populate=*');
                this.seatLists = response.data.data;
            } catch(error) {
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
        },
        selectedSlotTime()
        {
            document.querySelector("#selectedTicket").style.display = 'block';
            document.querySelector(".infoTicket").style.display = 'block';
            document.querySelector(".buttonSlot").style.display = 'block';
            document.querySelector(".selectedSlot").style.display = "none";
            document.querySelector(".confirmBooking").style.display='none';
        },
        toggleConfirm()
        {
            document.querySelector(".selectedSlot").style.display='none';
            document.querySelector(".selectedTicket").style.display='none';
            document.querySelector(".confirmBooking").style.display='block';
        },
        toggleSeat(seat) {
            if (this.isSelected(seat)) {
                // Nếu đã chọn, hủy chọn bằng cách loại bỏ khỏi mảng selectedSeats
                const index = this.infoTicket.selectedSeats.indexOf(seat);
                if (index > -1) {
                    this.infoTicket.selectedSeats.splice(index, 1);
                }
            } else {
                 // Nếu chưa chọn, thêm vào mảng selectedSeats
                 if (this.infoTicket.selectedSeats.length < this.infoTicket.inputValue) {
                     // Thêm vào mảng selectedSeats
                     this.infoTicket.selectedSeats.push(seat);
                }
            }
        },
        isSelected(seat) {
            // Kiểm tra xem ghế có trong mảng selectedSeats hay không
            return this.infoTicket.selectedSeats.includes(seat);
        },
        cancelButton()
        {
            this.$router.push('/')
        },
        async purchaseButton()
        { 
            try {
                const response = await axios.post('http://localhost:3305/api/bills', {
                    "data": 
                    {
                        email: this.userInfo.email,
                        timeSlot: this.infoTicket.selectedSlotTime,
                        quantityTicket: this.infoTicket.inputValue,
                        spending: this.infoTicket.spending,
                        nameTicket: this.infoTicket.nameTicket,
                        nameCinema: this.infoTicket.selectedCinema,
                        nameFilm: this.infoTicket.nameFilm
                    }
                });
                console.log(response.data);
                alert("Thanh toán thành công!");
                this.$router.push('/return-vnpay')
            } catch(error)
            {
                console.log('Lỗi khi gọi API:', error)
                alert("Thanh toán thất bại!")
            }
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
    display: block;
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
    width: 10%;
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
    display: block;
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
.sub-infoTicket
{
    width: 60%;
}
.detailTicket
{
    width: 100%;
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
    display: block;
    float: right;
    font-weight: bold;
    height: 2.5rem;
    margin-top: 1rem;
}
.selectedSlot
{
    width: 100%;
    display: none;
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
.selected
{
    background: red;
} 
.confirmButton
{
    float: right;
    margin: 1rem 0 1rem 0;
    height: 2.5rem;
    font-weight: bold;
}
.confirmTicket
{
    width: 60%;
    height: auto;
    display: grid;
    grid-template-columns: 35% 15% 30% 20%;
    text-align: center;
    border: 1px solid aqua;
    padding: 1rem 0 0.5rem 0;
    margin-left: 2rem;
    font-weight: bold;
    font-size: 16px;
    color: white;
}
.confirmBooking
{
    width: 100%;
    background: gray;
    padding: 1rem 0 ;
    display: none;
    margin-top: 1rem;
}
.confirmSeat
{
    width: 3rem;
    display: flex;
    justify-content: space-between;
}
.confirmCart
{
    width: 100%;
    text-align: left;
}
.confirmCart h3
{
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    text-align: left;
    padding-left: 2rem;
    border-bottom: 2px solid white;
    font-weight: bold;
    color: aqua;
}
.confirmCart>p
{
    padding-left: 2rem;
    color: white;
    font-weight: bold;
}
.confirmCart span
{
    color:red;
}
.infoCart
{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    margin-left: 2rem;
    color: white;
    font-weight: bold;
}
.infoCart>div:first-child
{
    width: 40%;
}
.infoCart>div:last-child
{
    width: 60%;
}
.infoUser
{
    width: 30%;
    margin: 2rem 0 0 2rem;
    text-align: left;
    border: 2px solid aqua;
    padding: 1rem;
    color: white;
}
.infoUser h4
{
    font-weight: bold;
    color: aqua;
}
.infoUser>div
{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.buttonBooking
{
    margin-top: 1rem;
}
.buttonBooking>div
{
    width: 25%;
    display: flex;
    justify-content: space-between;
    margin: auto;
}
</style>