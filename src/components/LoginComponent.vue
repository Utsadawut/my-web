<template>
  <div class="row justify-content-center mt-3">
    <div class="col-md-6">
      <form @submit.prevent="login" class="form">
        <p class="form-title">เข้าสู่ระบบ</p>
        <div class="input-container">
          <input
            v-model="users.username"
            required
            placeholder="Username"
            type="text"
          />
        </div>
        <div class="input-container">
          <input
            type="password"
            id="inputPassword5"
            placeholder="Password"
            class="form-control"
            aria-describedby="passwordHelpBlock"
          />
        </div>
        <div class="form-group mt-2" align="center">
          <button class="btn btn-success submit">ยืนยัน</button>
        </div>
        <tr v-for="listUser in listUsers" :key="listUser._id">
          <td></td>
        </tr>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      listUsers: [],
      users: {
        username: "",
        password: "",
      },
    };
  },

  mounted() {
    this.$emit("btnpermission", {
      page: "login",
    });
  },
  methods: {
    login() {
      this.auth();
    },
    auth() {
      const axios = require("axios");

      axios
        .get("http://localhost:4000/user/checkuser", {
          params: {
            username: this.users.username,
            password: this.users.password,
          },
        })
        .then((res) => {
          console.log(res);

          if (res.data.length > 0) {
            this.$emit("btnpermission", {
              page: "loginsuccess",
              users: res.data[0],
            });
            this.$router.push({ path: "/aboutuser" });
            window.alert("login success");
          } else {
            window.alert("nouser!!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    created() {
      let apiURL = "http://localhost:4000/user";
      axios
        .get(apiURL)
        .then((res) => {
          this.listUsers = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.form {
  background-color: #fff;
  display: block;
  padding: 2rem;
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

.input-container input,
select,
.form button {
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
}

.input-container input,
select {
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 1rem;
  line-height: 1.25rem;
  width: 600px;
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

button:hover {
  background-color: #23c483;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-1px);
}
button:active {
  transform: translateY(-1px);
}
</style>
