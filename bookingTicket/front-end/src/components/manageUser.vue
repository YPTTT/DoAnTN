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
        <footerPage/>
    </div>
</template>

<script>
import mainMenu from "./mainMenu.vue";
import footerPage from "./footerPage.vue";
// import axios from 'axios';
export default {
    name: 'manageUser',
    components: {
        mainMenu,
        footerPage
    },
    data() {
        return {
            userName: JSON.parse(localStorage.getItem('userInfo')),
        }
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
</style>