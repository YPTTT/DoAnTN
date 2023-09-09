<template>
  <div class="listMenu">
      <div>
        <router-link to="/"><img class="mainLogo" src="../assets/menu/logo.png" /></router-link>
        <a-button class="buyTicket">Mua vé</a-button>
      </div>
      <ul class="mainMenu">
        <router-link to="/showtimesPage"><li>Lịch chiếu</li></router-link>
        <a><li>Hệ thống rạp</li></a>
        <router-link to="/promotionPage"><li>Khuyến mãi | Sự kiện</li></router-link>
        <router-link to="/adsPage"><li>Dịch vụ quảng cáo</li></router-link>
        <a @click="showAlert()"><li>Tuyển dụng</li></a>
        <router-link to="/aboutPage"><li>Về chúng tôi</li></router-link>
      </ul>
      <div>
        <a href="https://www.facebook.com/khachai1208/">
          <img src="../assets/menu/icon_fb.png"/>
        </a>
        <a-button class="loginAccount"><router-link to="/loginPage">Đăng nhập</router-link></a-button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'mainMenu',
    methods: {
      showAlert()
      {
        alert("chưa có thông tin tuyển dụng!")
      }
    }
}
</script>

<style scoped>
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
  background: aquamarine;
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
  color: aquamarine;
}
</style>