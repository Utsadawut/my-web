<template>
  <div>
    <!-- Nav bar -->
    <nav
      class="navbar navbar-dark justify-content-between flex-nowrap flex-row"
      style="background-color: #4db6ac"
    >
      <div class="container-fluid content-heading">
        <router-link
        @click="logout"
          to="/"
          class="navbar-brand float-left fw-bold fs-2 text-align: center;"
        >
          <img
            src="./image/logopanya.png"
            width="50"
            height="45"
          />&nbsp;หลักสูตรปัญญาอารยะ</router-link
        >
        <ul class="nav navbar-nav flex-row float-right">
          <router-link
            v-if="btnLoginShowing"
            :to="`/login`"
            class="btn btn-warning button3 fw-bold"
            style="
              background-color: #f9a825;
              color: #ffffff;
            "
          >
            เข้าสู่ระบบ
          </router-link>
          <router-link
            v-if="btnRegisterShowing"
            :to="`/register`"
            class="btn btn-warning button3 fw-bold"
            style="
              padding: 0.75rem 1.5rem;
              background-color: #009688;
              color: #ffffff;
            "
          >
            สมัครสมาชิก
          </router-link>
          <router-link
            v-if="btnLogoutShowing"
            @click="logout"
            :to="`/`"
            class="btn btn-danger button3"
            style="
              background-color: #e84e40;
              color: #ffffff;
            "
          >
            ออกจากระบบ
          </router-link>
        </ul>
      </div>
    </nav>

    <nav
      id="navbarfooterfixed"
      style="background-color: #e0f7fa"
      class="navbar navbar-expand-lg navbar-light bg-light"
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler ms-auto mb-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse position-absolute top-0 end-0 me-5 mt-4" id="navbarSupportedContent">
          <ul class="nav-item ms-auto">
            <router-link
              v-if="btnListHomeShowing"
              to="/"
              class="button2"
              type="button"
              style="text-decoration: none; color: inherit"
              >หน้าหลัก</router-link
            >
            <router-link
              v-if="btnListHomeShowing"
              to="/"
              class="button2"
              type="button"
              style="text-decoration: none; color: inherit"
              >เกียวกับ</router-link
            >
            <router-link
              v-if="btnListHomeShowing"
              to="/"
              class="button2"
              type="button"
              style="text-decoration: none; color: inherit"
              >ติดต่อ</router-link
            >
          </ul>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div v-if="this.users.roleuser == 'user' && menuShowing">
            <ul class="navbar-nav">
              <li class="nav-item ms-auto">
                <router-link to="/aboutuser" class="btn btn-warning button"
                  >หน้าหลัก</router-link
                >
              </li>
              <li class="nav-item ms-auto">
                <router-link to="/presentation" class="btn btn-warning button"
                  >พรีเซนเทชั่น</router-link
                >
              </li>
              <li class="nav-item ms-auto">
                <router-link to="/timeTable" class="btn btn-warning button"
                  >ตารางสอน</router-link
                >
              </li>
              <li class="nav-item ms-auto">
                <router-link to="/listschool" class="btn btn-warning button"
                  >รายชื่อโรงเรียน</router-link
                >
              </li>
              <li class="nav-item ms-auto">
                <router-link to="/downloadfile" class="btn btn-warning button"
                  >เอกสารประกอบการสอน</router-link
                >
              </li>
            </ul>
          </div>
          <div v-if="this.users.roleuser == 'admin' && menuShowing">
            <ul class="navbar-nav ms-auto" align="left">
              <li class="nav-item ms-auto">
                <router-link to="/aboutuser" class="btn btn-warning button"
                  >หน้าหลัก</router-link
                >
                <router-link to="/alllistschool" class="btn btn-warning button"
                  >รายชื่อโรงเรียนทั้งหมด</router-link
                >
              </li>
              <li class="nav-item ms-auto">
                <router-link to="/listuser" class="btn btn-warning button"
                  >รายชื่อพระสอน</router-link
                >
              </li>
              <li class="nav-item ms-auto">
                <router-link
                  to="/registerlistschool"
                  class="btn btn-warning button"
                  >เพิ่มรายชื่อโรงเรียน</router-link
                >
              </li>
              <li class="nav-item ms-auto">
                <router-link to="/createstudent" class="btn btn-warning button"
                  >เพิ่มรายชื่อนักเรียน</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container-fluid background-container">
      <router-view @btnpermission="this.checkbtnShow"></router-view>
    </div>
    <!-- navbar down -->
    <div class="container-fluid footer">
      <nav class="navbar navbar-dark"></nav>
    </div>
  </div>
</template>

<style scoped>
/* .background-container {
  background-image: url('/src/assets/backgradpage2.png'); 
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh; 
} */
.button:hover {
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-2px);
}
.button:active {
  transform: translateY(-1px);
}
.button2 {
  margin-left: 2px;
  margin-right: 2px;
  padding: 0.6em 2em;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 550;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
.button3 {
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  margin-left: 2px;
  margin-right: 2px;
  padding: 0.6em 2em;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 550;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.button2:hover {
  background-color: #23c483;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-2px);
}

.button2:active {
  transform: translateY(-1px);
}
.addmin {
  margin-left: 2px;
}
.button {
  margin-top: 2px;
  margin-bottom: 2px;
  margin-right: 2px;
  margin-left: 2px;
  float: left;
  border: none;
  padding: 0.5rem 1.5rem;
  background-color: #26a69a;
  color: #ffffff;
  letter-spacing: 2px;
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  align-items: center;
  border-radius: 1rem;
  user-select: none;
  box-shadow: 0 4px 6px -1px #488aec31, 0 2px 4px -1px #488aec17;
  transition: all 0.6s ease;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f9a825;
  color: white;
  text-align: center;
}
/***************** #content ******************/
.content-heading{
  width: 100%;
}

@media only screen and (max-width: 480px) {
  .button3 {
  font-size: 0.5rem;
  padding: 0.5rem 1rem;
}
}

</style>
<script>
//import axios from "axios";

export default {
  data() {
    return {
      users: {
        username: "",
        password: "",
        roleuser: "",
      },
      btnListHomeShowing: true,
      btnLoginShowing: true,
      btnRegisterShowing: true,
      btnLogoutShowing: false,
      menuShowing: false,
      userRole: "",
    };
  },
  mounted() {
    this.users = {
      _id: "",
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
  },
  methods: {
    logout() {
      this.btnLoginShowing = true;
      this.btnRegisterShowing = true;
      this.btnLogoutShowing = false;
      this.menuShowing = false;
      this.btnListHomeShowing= true;
    },
    checkbtnShow(value) {
      if (value.page == "login") {
        this.btnListHomeShowing= false;
        this.btnLoginShowing = false;
        this.btnRegisterShowing = true;
        this.btnLogoutShowing = false;
        console.log(value.page);
      } else if (value.page == "register") {
        this.btnListHomeShowing= false;
        this.btnRegisterShowing = false;
        this.btnLoginShowing = true;
        this.btnLogoutShowing = false;
        console.log(value.page);
      } else if (value.page == "loginsuccess") {
        this.btnListHomeShowing= false;
        this.btnRegisterShowing = false;
        this.btnLoginShowing = false;
        this.btnLogoutShowing = true;
        this.menuShowing = true;

        this.users.username = value.users.username;
        this.users._id = value.users._id;
        this.users.name = value.users.name;
        this.users.sername = value.users.sername;
        this.users.position = value.users.position;
        this.users.academic_standing1 = value.users.academic_standing1;
        this.users.academic_standing2 = value.users.academic_standing2;
        this.users.affiliation = value.users.affiliation;
        this.users.season = value.users.season;

        sessionStorage.setItem("id", this.users._id);
        sessionStorage.setItem("name", this.users.name);
        sessionStorage.setItem("sername", this.users.sername);
        sessionStorage.setItem("position", this.users.position);
        sessionStorage.setItem(
          "academic_standing1",
          this.users.academic_standing1
        );
        sessionStorage.setItem(
          "academic_standing2",
          this.users.academic_standing2
        );
        sessionStorage.setItem("affiliation", this.users.affiliation);
        sessionStorage.setItem("season", this.users.season);

        this.users.roleuser = value.users.roleuser;

        console.log(this.users._id);
      }
    },
  },
};
</script>
