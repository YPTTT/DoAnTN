.<template>
    <div class="container">
        <mainMenu/>
        <div class="sub_container">
            <div class="manageUser">
                <a-avatar shape="square" :size="160" icon="user" />
                <div class="infoUser">
                    <div>
                        <p>Email</p>
                        <p>Tên</p>
                        <p>Số điện thoại</p>
                        <p>Sinh nhật</p>
                        <p>Mật khẩu</p>
                    </div>
                    <div>
                        <p>{{ userName.email }}</p>
                        <p>{{ userName.username }}</p>
                        <p>0{{ userName.phoneNumber }}</p>
                        <p>{{ userName.date }}</p>
                        <p>**********</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="infoTransactions">
            <div class="sub-info">
                <p>Tên phim</p>
                <p>Tên rạp</p>
                <p>Tên vé</p>
                <p>Số lượng</p>
                <p>Thành tiền</p>
            </div>
            <div class="sub-info" v-for="transaction in transactions" :key="transaction.id">
                <p>{{ transaction.attributes.nameFilm }}</p>
                <p>{{ transaction.attributes.nameCinema }}</p>
                <p>{{ transaction.attributes.nameTicket }}</p>
                <p>{{ transaction.attributes.quantityTicket }}</p>
                <p>{{ transaction.attributes.spending }}</p>
            </div>
        </div>
        <footerPage class="footerPage"/>
    </div>
</template>

<script>
import mainMenu from "./mainMenu.vue";
import footerPage from "./footerPage.vue";
import axios from 'axios';

export default {
    name: 'manageUser',
    components: {
        mainMenu,
        footerPage
    },
    data() {
        return {
            userName: JSON.parse(localStorage.getItem('userInfo')),
            transactions: [],
        }
    },
    mounted() {
        this.fetchBills();
    },
    methods: {
        toggleButton() {
            const toggleButtons = document.querySelectorAll('.newPassword');
            for (let toggleButton of toggleButtons)
            {
                if (toggleButton?.style?.display == "none") {
                    toggleButton.style.display = "block";
                }
                else { toggleButton.style.display = "none"; }
            }
        }, 
        async fetchBills()
        {
            try {
                const emailUser = this.userName.email;
                console.log(emailUser);
                const response = await axios.get(`http://localhost:3305/api/bills?filters[email]=${emailUser}`);
                this.transactions = response.data.data;
                console.log(this.transactions);
            } catch(error)
            {
                console.log("Lỗi khi call API", error)
            }
        }
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
/* .footerPage
{
    position: fixed;
    bottom: 0;
} */
.sub_container
{
    width: 80%;
    height: auto;
    margin: 0 auto;
    display: flex;
    padding-top: 10rem;
    padding-bottom: 2rem;
}
.manageUser
{
    width: 70%;
    display: flex;
}
.infoUser
{
    display: flex;
    text-align: left;
    margin-left: 2rem;
}
.infoUser div:last-child
{
    margin-left: 2rem;
}
.infoUser div:first-child p
{
    height: 2rem;
    color: #bfc9d2;
}
.infoUser div:last-child p, input
{
    height: 2rem;
    width: 140%;
    background: #37424B;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    border: none;
    border-radius: 2px;
    color:#70808E;
}
input
{
    outline: none;
}
.infoUser div:last-child button
{
    height: 2rem;
}
.newPassword
{
    display: none;
}
.infoMembership
{
    width: 30%;
    text-align: left;
}
.infoTransactions 
{
    width: 80%;
    display: flex;
    flex-direction: column;
    border: 1px solid aqua;
    margin: auto;
    margin-bottom: 1rem;
    color: white;
    font-weight: bold;
}
.sub-info
{
    display: grid;
    grid-template-columns: 25% 25% 20% 10% 20%;
    border: 1px solid aqua;
}
.sub-info p
{
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
}
</style>