<template>
  <div class="row justify-content-center mt-3">
    <div class="col-md-6">
      <form @submit.prevent="handleSubmitForm" class="form">
        <p class="form-title">สมัครสมาชิก</p>
        <div class="input-container">
          <input
            v-model="users.username"
            required
            placeholder="Username (ภาษาอังกฤษเท่านั้น)"
            type="text"
          />
        </div>
        <div class="input-container">
          <input
            v-model="users.password"
            required
            placeholder="Password (ภาษาอังกฤษและตัวเลขเท่านั้น)"
            type="text"
          />
        </div>
        <div class="input-container">
          <input v-model="users.name" required placeholder="ชื่อ" type="text" />
        </div>
        <div class="input-container">
          <input
            v-model="users.sername"
            required
            placeholder="นามสกุล/ฉายา"
            type="text"
          />
        </div>
        <div class="input-container">
          <input
            v-model="users.phone"
            required
            placeholder="เบอร์โทรศัพท์"
            type="text"
          />
        </div>
        <div class="form-group" align="center">
          <button class="btn btn-warning submit">ยืนยัน</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: {
        username: "",
        password: "",
        name: "",
        sername: "",
        position: "",
        academic_standing1: "",
        academic_standing2: "",
        affiliation: "",
        season: "",
        roleuser: "user",
        phone: "",
      },
    };
  },

  mounted() {
    this.$emit("btnpermission", {
      page: "register",
    });
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "https://backend-vue-web.vercel.app/user/register";

      axios
        .post(apiURL, this.users)
        .then(() => {
          this.$router.push("/");
          this.users = {
            username: "",
            password: "",
            name: "",
            sername: "",
            position: "",
            academic_standing1: "",
            academic_standing2: "",
            affiliation: "",
            season: "",
            roleuser: "user",
            phone: "",
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
  background-color: #23c483;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-1px);
}
button:active {
  transform: translateY(-1px);
}
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
