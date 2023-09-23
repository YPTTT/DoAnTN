<template>
  <div class="listMenu">
      <div>
        <router-link to="/"><img class="mainLogo" src="../assets/menu/logo.png" /></router-link>
      </div>
      <ul class="mainMenu">
        <router-link to="/showtimesPage"><li>Lịch chiếu</li></router-link>
        <router-link to="/listCinema"><li>Hệ thống rạp</li></router-link>
        <router-link to="/promotionPage"><li>Khuyến mãi | Sự kiện</li></router-link>
        <router-link to="/adsPage"><li>Dịch vụ quảng cáo</li></router-link>
        <a @click="showAlert()"><li>Tuyển dụng</li></a>
        <router-link to="/aboutPage"><li>Về chúng tôi</li></router-link>
      </ul>
      <div>
        <a href="https://www.facebook.com/khachai1208/">
          <img src="../assets/menu/icon_fb.png"/>
        </a>
        <a-button class="loginAccount" id="isLogin"><router-link to="/loginPage">Đăng nhập</router-link></a-button>
        <a-button class="loginAccount" id="isLogout"><router-link to="" > {{ username.username }} </router-link></a-button>
      </div>
    </div>
</template>

<script>
// import axios from 'axios';
export default {
    name: 'mainMenu',
  data() {
    return {
      username: {},
    }
  },
  mounted() {
    const userData = window.localStorage.getItem('userInfo');
    if (userData)
    {
      this.username = JSON.parse(userData);
    }
    window.addEventListener("beforeunload", this.handleBeforeUnload);
    if(localStorage.getItem('jwt'))
      {
        document.querySelector("#isLogin").style.display = "none";
        document.querySelector("#isLogout").style.display = "block";
      }
    // this.fetchDataWithJWT();
    console.log(this.username);
  },
  methods: {
    showAlert() {
      alert("chưa có thông tin tuyển dụng!")
    },
    handleBeforeUnload() {
      // Kiểm tra xem mã JWT có trong localStorage hay không
      const jwtToken = localStorage.getItem("jwt");
      if (jwtToken) {
        // Nếu có, xóa nó khỏi localStorage khi trang bị làm mới
        localStorage.removeItem("jwt");
        localStorage.removeItem("userInfo");
        localStorage.removeItem("userData");
      }
    },
    
  },
}
</script>

<style scoped>
#isLogin{
  display: block;
}
#isLogout{
  display: none;
}
.listMenu {
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  backdrop-filter: blur(5px);
  position: fixed;
  z-index: 1;
}
.listMenu div,
ul {
  display: flex;
  align-items: center;
}
.listMenu div {
  width: 12%;
}
.listMenu div:last-child {
  justify-content: flex-end;
  width: 15%;
}
.listMenu div button {
  width: rem;
  height: 2.2rem;
  border: none;
  border-radius: 8px;
  background: aqua;
  font-size: 18px;
  font-weight: bold;
  margin-left: 1rem;
}
.listMenu div button:hover {
  scale: 1.1;
  background: white;
}
.listMenu img.mainLogo {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.mainMenu {
  width: 65%;
  justify-content: space-around;
  list-style: none;
}
.mainMenu a li {
  color: white;
  font-size: 18px;
  padding-top: 1rem;
  font-weight: bold;
  transition-duration: 0.5s;
}
.mainMenu a li:hover {
  scale: 1.2;
  color: aqua;
}
</style>