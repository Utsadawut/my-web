<template>
  <div class="row justify-content-center mt-3">
    <form @submit.prevent="handleSubmitForm" class="form">
      <p class="form-title">เพิ่มรายชื่อโรงเรียน</p>
      <div class="input-container">
        <input
          v-model="listSchool.name"
          required
          placeholder="ชื่อโรงเรียน"
          type="text"
        />
      </div>
      <div class="input-container">
        <label for="inputDate" class="input fs-5 ms-1">เลือกวันที่สอน</label>
        <select id="inputState" class="form-select"  v-model="listSchool.date"
          required>
          <option>วันจันทร์</option>
          <option>วันอังคาร</option>
          <option>วันพุธ</option>
          <option>วันพฤหัสบดี</option>
          <option>วันศุกร์</option>
        </select>
      </div>
      <!-- <div class="input-container">
        <input
          v-model="listSchool.date"
          required
          placeholder="วันที่สอน (จันทร์ - ศุกร์)"
          type="text"
        />
      </div> -->
      <div class="input-container">
        <input
          v-model="listSchool.time"
          required
          placeholder="เวลา"
          type="text"
        />
      </div>
      <div align="center">
        <button class="btn btn-warning submit" type="submit">ตกลง</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      listSchool: {
        name: "",
        date: "",
        time: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "https://backend-vue-web.vercel.app/listSchool/listSchool-register";

      axios
        .post(apiURL, this.listSchool)
        .then(() => {
          this.$router.push("/alllistSchool");
          this.listSchool = {
            name: "",
            date: "",
            time: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
button:hover {
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-2px);
}
button:active {
  transform: translateY(-1px);
}
.form {
  background-color: #fff;
  display: block;
  padding: 3rem;
  max-width: 700px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 3rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-align: center;
  color: #000;
}

.input-container {
  position: relative;
}

.input-container input,select,
.form button {
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
}

.input-container input,select {
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 1rem;
  line-height: 1.25rem;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.input-container span {
  display: grid;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  place-content: center;
}

.input-container span svg {
  color: #9ca3af;
  width: 1rem;
  height: 1rem;
}

.submit {
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #26a69a;
  color: #ffffff;
  font-size: 1.3rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 20%;
  border-radius: 0.5rem;
  text-transform: uppercase;
}

.signup-link {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.signup-link a {
  text-decoration: underline;
}
@media only screen and (max-width: 480px) {
  .submit {
  line-height: 1rem;
  font-weight: 500;
  width: 30%;
}
}
</style>
