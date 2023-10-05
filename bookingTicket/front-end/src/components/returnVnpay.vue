.<template>
  <div class="container">
    <main-menu/>
    <div class="sub-container">
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
                  <p style="color:aqua">{{ infoTicket.nameFilm }}</p>
                  <p>{{ infoTicket.selectedCinema }}</p>
                  <p>{{ infoTicket.date }}</p>
                  <p>{{ infoTicket.selectedSlotTime }}</p>
                  <p>{{ infoTicket.roomNumber }}</p>
                  <div class="confirmSeat">
                      <p v-for="(seat, index) in infoTicket.selectedSeats" :key="index">{{ seat.attributes.rowSeat }}-{{ seat.attributes.numberSeat }}</p>
                  </div>
                  <p>{{ infoTicket.spending }} VNĐ</p>
              </div>
          </div>
        </div>
        <div class="confirmTicket">
          <p>Vé</p>
          <p>Giá</p>
          <p>Số lượng</p>
          <p>Tổng</p>
          <p>{{ infoTicket.nameTicket }}</p>
          <p>{{ infoTicket.ticketPrice }}</p>
          <p>{{ infoTicket.inputValue }}</p>
          <p>{{ infoTicket.spending }} VNĐ</p>
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
      </div>
      <div class="homeButton">
        <a-button @click="returnHome">HOME</a-button>
      </div>
    </div>
    <footerPage/>
  </div>
</template>

<script>
import mainMenu from './mainMenu.vue';
import footerPage from './footerPage.vue';
export default {
  name: "returnVnpay",
  components: { mainMenu, footerPage },
  data()
  {
    return {
      infoTicket: JSON.parse(localStorage.getItem('infoTicket')),
      userInfo: JSON.parse(localStorage.getItem('userInfo')),
    }
  },
  methods: {
    returnHome() {
      this.$router.push('/');
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
  padding-top: 8rem;
}
.confirmBooking
{
    width: 80%;
    background: gray;
    padding: 1rem 0 ;
    display: block;
    margin: auto;
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
.homeButton
{
  width: 80%;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.homeButton button
{
  height: 3rem;
  width: 8rem;
  font-size: 28px;
  font-weight: bold;
  background: aqua;
  color: white;
}
.homeButton button:hover
{
  background: white;
  color: aqua;
}
</style>