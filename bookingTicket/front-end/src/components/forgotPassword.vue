<template>
    <div class="container">
      <h1>Forgot Password</h1>
      <form @submit.prevent="forgotPassword">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: 'forgotPassword',
    data() {
      return {
        email: "",
      };
    },
    methods: {
      async forgotPassword() {
        try {
          const response = await axios.post(
            "http://localhost:3305/api/auth/forgot-password",
            {
              email: this.email,
            }
          );
          console.log('gui mail thanh cong', response);
        } catch (error) {
          console.log('khong gui duoc mail', error);
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
  