<template>
  <div>
    <h1>Film List</h1>
    <ul>
      <li v-for="film in films" :key="film._id">
        {{ film.name }} - {{ film.author }}
        <button @click="editFilm(film)">Edit</button>
        <button @click="deleteFilm(film._id)">Delete</button>
      </li>
    </ul>

    <h2>Add/Edit Film</h2>
    <form @submit.prevent="saveFilm">
      <input v-model="film.name" placeholder="Name" />
      <input v-model="film.author" placeholder="Author" />
      <input type="file" @change="handleFileChange" />
      <input v-model="film.details" placeholder="Details" />
      <input type="date" v-model="film.releaseDate" />
      <input type="number" v-model="film.duration" placeholder="Duration" />
      <input type="number" v-model="film.ageRequirement" placeholder="Age Requirement" />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      films: [],
      film: {
        name: '',
        author: '',
        details: '',
        releaseDate: '',
        duration: '',
        ageRequirement: '',
      },
      file: null,
    };
  },
  methods: {
    // Lấy danh sách phim từ API
    async fetchFilms() {
      try {
        const response = await axios.get('/api/films');
        this.films = response.data;
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    },

    // Lưu phim mới hoặc cập nhật phim đã tồn tại
    async saveFilm() {
      try {
        const formData = new FormData();
        formData.append('name', this.film.name);
        formData.append('author', this.film.author);
        formData.append('details', this.film.details);
        formData.append('releaseDate', this.film.releaseDate);
        formData.append('duration', this.film.duration);
        formData.append('ageRequirement', this.film.ageRequirement);
        formData.append('image', this.file);

        if (this.film._id) {
          // Nếu có ID, thì đây là cập nhật phim đã tồn tại
          await axios.put(`/api/films/${this.film._id}`, formData);
        } else {
          // Nếu không có ID, thì đây là thêm phim mới
          await axios.post('/api/films', formData);
        }

        this.resetForm();
        this.fetchFilms();
      } catch (error) {
        console.error('Error saving film:', error);
      }
    },

    // Chỉnh sửa phim
    editFilm(film) {
      this.film = { ...film }; // Sao chép dữ liệu phim đã tồn tại vào form
    },

    // Xóa phim theo ID
    async deleteFilm(id) {
      try {
        await axios.delete(`/api/films/${id}`);
        this.fetchFilms();
      } catch (error) {
        console.error('Error deleting film:', error);
      }
    },

    // Xử lý khi người dùng chọn tệp hình ảnh
    handleFileChange(event) {
      this.file = event.target.files[0];
    },

    // Đặt lại form
    resetForm() {
      this.film = {
        name: '',
        author: '',
        details: '',
        releaseDate: '',
        duration: '',
        ageRequirement: '',
      };
      this.file = null;
    },
  },
  created() {
    this.fetchFilms(); // Gọi hàm fetchFilms khi thành phần được tạo
  },
};
</script>

<style scoped>

</style>
