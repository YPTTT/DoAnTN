<template>
    <div class="container">
      <h1>Reset Password</h1>
      <form @submit.prevent="resetPassword">
        <div class="form-group">
          <label for="password">New Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: 'resetPassword',
    data() {
      return {
        password: "",
        confirmPassword: "",
      };
    },
    methods: {
      async resetPassword() {
        try {
          const code = this.$route.query.code;
          const response = await axios.post(
            "http://localhost:3305/api/auth/reset-password",
            {
              code,
              password: this.password,
              passwordConfirmation: this.confirmPassword,
            }
          );
          console.log('thanh cong', response);
          this.$router.push("/loginPage");
        } catch (error) {
            console.log("loi", error)
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    width: 500px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
  }
  
  input {
    width: 100%;
    padding: 5px;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 10px;
  }
  </style>
  