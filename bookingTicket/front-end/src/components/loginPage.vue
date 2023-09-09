<template>
  <div class="app">
    <mainMenu style="z-index: 120; top: 0" />
    <div class="container" id="container">
      <div class="form-container register-container">
        <form action="#" @submit.prevent>
          <h1>Register</h1>
          <input
            type="text"
            placeholder="Last name"
            v-model="accountRegister.lastName"
          />
          <input
            type="text"
            placeholder="First Name"
            v-model="accountRegister.firstName"
          />
          <input
            type="text"
            placeholder="Phone number"
            v-model="accountRegister.phoneNumber"
          />
          <input
            type="text"
            placeholder="Address"
            v-model="accountRegister.address"
          />
          <input
            type="text"
            placeholder="Birthday"
            v-model="accountRegister.birthDay"
          />
          <input
            type="email"
            placeholder="Email"
            v-model="accountRegister.email"
          />
          <input
            type="password"
            class="password"
            placeholder="Password"
            v-model="accountRegister.password"
          />
          <input
            type="text"
            placeholder="Role"
            v-model="accountRegister.roles"
          />
          <a-button type="submit" @click="registerUser()">Register</a-button>
          <span>or use your account</span>
          <div class="social-container">
            <a href="#" class="social"
              ><i class="fa-brands fa-facebook fa-2xl"></i
            ></a>
            <a href="#" class="social"
              ><i class="fa-brands fa-google fa-2xl"></i
            ></a>
          </div>
        </form>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </div>
      <div class="form-container login-container">
        <form action="#" @submit.prevent>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            v-model="accountLogin.emailLogin"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="accountLogin.passwordLogin"
          />
          <div class="content">
            <div class="pass-link">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <a-button type="submit" @click="loginUser()">Login</a-button>
          <span>or use your account</span>
          <div class="social-container">
            <a href="#" class="social"
              ><i class="fa-brands fa-facebook fa-2xl"></i
            ></a>
            <a href="#" class="social"
              ><i class="fa-brands fa-google fa-2xl"></i
            ></a>
          </div>
        </form>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </div>
      <div class="overplay-container">
        <div class="overplay">
          <div class="overplay-panel overplay-left">
            <h1 class="title">
              Hello <br />
              friends
            </h1>
            <p>If you have an account, login here</p>
            <a-button class="ghost" id="login">
              Login
              <i class="fa-solid fa-arrow-left login"></i>
            </a-button>
          </div>
          <div class="overplay-panel overplay-right">
            <h1 class="title">
              Start your <br />
              journey now
            </h1>
            <p>
              If you don't have an account yet,<br />
              join us and start your journey
            </p>
            <a-button class="ghost" id="register">
              Register
              <i class="fa-solid fa-arrow-right register"></i>
            </a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainMenu from "./mainMenu.vue";
import axios from "axios";
export default {
  name: "loginPage",
  data() {
    return {
      errorMessage: "",
      accountRegister: [
        {
          lastName: "",
          firstName: "",
          phoneNumber: "",
          address: "",
          birthday: "",
          email: "",
          password: "",
          roles: "",
        },
      ],
      accountLogin: [
        {
          emailLogin: "",
          passwordLogin: "",
          success: false,
        },
      ],
      errors: [],
    };
  },
  components: {
    mainMenu,
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post(
          "http://tuyenhaitan.click:8080/register/users",
          {
            lastName: this.accountRegister.lastName,
            firstName: this.accountRegister.firstName,
            phoneNumber: this.accountRegister.phoneNumber,
            address: this.accountRegister.address,
            birthDay: this.accountRegister.birthDay,
            accountDTO: {
              email: this.accountRegister.email,
              password: this.accountRegister.password,
              roles: [this.accountRegister.roles],
            },
          }
        );
        this.errorMessage = response.data.message;
        this.accountRegister.lastName = "";
        this.accountRegister.firstName = "";
        this.accountRegister.phoneNumber = "";
        this.accountRegister.address = "";
        this.accountRegister.birthday = "";
        this.accountRegister.email = "";
        this.accountRegister.password = "";
        this.accountRegister.roles = "";
      } catch (error) {
        this.errorMessage = error.message;
        setTimeout(() => (this.errorMessage = ""), 5000);
      }
    },
    async loginUser() {
      try {
        const response = await axios.post(
          "http://tuyenhaitan.click:8080/login",
          {
            email: this.accountLogin.emailLogin,
            password: this.accountLogin.passwordLogin,
          }
        );
        const roles = response.data.userDTO.accountDTO.roles;
        if (roles == "USER") {
          this.$router.push("/");
        } else if (roles == "ADMIN") {
          this.$router.push("/dashboard");
        }
        this.accountLogin.success = true;
        this.accountLogin.emailLogin = "";
        this.accountLogin.passwordLogin = "";
      } catch (error) {
        this.errorMessage = error.message;
        setTimeout(() => (this.errorMessage = ""), 5000);
      }
    },
  },
  mounted() {
    {
      const registerButton = document.getElementById("register");
      const loginButton = document.getElementById("login");
      const container = document.getElementById("container");

      registerButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
      });
      loginButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });
    }
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  display: flex;
  background-color: #f6f5f7;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
}

h1 {
  font-weight: 700;
  letter-spacing: -1.5px;
  margin: 0;
  margin-bottom: 1rem;
}
h1.title {
  font-size: 45px;
  line-height: 45px;
  margin: 0;
  text-shadow: 0 0 10px rgb(16, 64, 74, 0.5);
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  text-shadow: 0 0 10px rgb(16, 64, 74, 0.5);
}

span {
  font-size: 14px;
  margin-top: 0.5rem;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  transition: 0.5s ease-in-out;
}

a:hover {
  color: aquamarine;
}
.content {
  display: flex;
  width: 100%;
  height: 2rem;
  align-items: center;
  justify-content: space-around;
}
.content .checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content input {
  accent-color: #333;
  width: 0.75rem;
  height: 0.75rem;
}
.content label {
  font-size: 14px;
  user-select: none;
  padding-left: 5px;
}

button {
  position: relative;
  border-radius: 20px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  margin: 0.6rem;
  padding: 5px 5rem;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.5s ease-in-out;
  text-align: center;
}

button:hover {
  letter-spacing: 3px;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: rgba(225, 225, 225, 0.2);
  border: 2px solid #fff;
  color: #fff;
}

button.ghost i {
  position: absolute;
  opacity: 0;
  transition: 0.3s ease-in-out;
  top: 0.5rem;
}
button.ghost i.register {
  right: 3.875rem;
}
button.ghost i.login {
  left: 3.875rem;
}
button.ghost:hover i.register {
  right: 2.5rem;
  opacity: 1;
}
button.ghost:hover i.login {
  left: 2.5rem;
  opacity: 1;
}
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(../assets/bg-login1.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}

form {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border-radius: 10px;
  border: none;
  padding: 0.75rem 1rem;
  margin: 0.5rem 0;
  width: 100%;
}
.container {
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 14px 28px rgb(0, 0, 0, 0.25), 0 10px 10px rgb(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 80%;
  max-width: 100%;
  height: 85%;
  min-height: 30rem;
  margin-top: 5rem;
}
.form-container {
  position: absolute;
  top: 0;
  height: 70%;
  transition: all 0.6s ease-in-out;
}
.login-container {
  left: 0;
  width: 50%;
  z-index: 2;
}
.container.right-panel-active .login-container {
  transform: translateX(100%);
}
.register-container {
  left: 0;
  width: 50%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  margin-top: 1rem;
  padding-bottom: 1rem;
}
input {
  height: 2.5rem;
}
.container.right-panel-active .register-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}
.overplay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}
.container.right-panel-active .overplay-container {
  transform: translate(-100%);
}
.overplay {
  background-image: url(../assets/bg1.gif);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}
.overplay::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgb(46, 94, 109, 0.4) 40%,
    rgb(46, 94, 109, 0)
  );
}
.container.right-panel-active .overplay {
  transform: translateX(50%);
}
.overplay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}
.overplay-left {
  transform: translateX(-20%);
}
.container.right-panel-active .overplay-left {
  transform: translateX(0);
}
.overplay-right {
  right: 0;
  transform: translateX(0);
}
.container.right-panel-active .overplay-right {
  transform: translateX(-20%);
}
.social-container {
  margin: 10px 0;
}
.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
  transition: 0.3s ease-in-out;
}
.social-container a {
  border: 1px solid #4bb6b7;
}
</style>