<template>
  <div class="container-fluid">
    <div>
      <ul class="">
        <th class="headText2">ยินดีต้อนรับเข้าสู่</th>
        <th class="headText">หลักสูตรปัญญาอารยะ</th>
      </ul>
      <ul>
        <h1 class="nameText">{{ this.users.name }} &nbsp; {{ this.users.sername }}</h1>
        <li>ตำแหน่ง : &nbsp;{{ this.users.position }}</li>
        <li>
          วิทยฐานะทางโลก : &nbsp;{{ this.users.academic_standing1 }}
        </li>
        <li>วิทยฐานะทางธรรม : &nbsp;{{ this.users.academic_standing2 }}</li>
        <li>สังกัด : &nbsp;{{ this.users.affiliation }}</li>
        <li>พรรษา : &nbsp;{{ this.users.season }}</li>
        <router-link
          :to="{ name: 'aboutedituser', params: { id: this.users.id } }"
          class="btn btn-warning button mt-4"
        >
          แก้ไขข้อมูลส่วนตัว
        </router-link>
      </ul>
    </div>
    <div class="card3 position-absolute start-0"></div>
  </div>
</template>
<style scoped>
.card3 {
  width: 100%;
  height: 100px;
  transition: 0.2s ease-in-out;
}
.button:hover {
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-2px);
}
.button:active {
  transform: translateY(-1px);
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
.headText {
  font-size: 3rem;
  font-weight: bold;
  color: #00897b;
}
.headText2 {
  font-size: 3rem;
  font-weight: bold;
  color: #fbc02d;
  margin-right: 10px;
}
.nameText {
  font-weight: bold;
}
li {
  font-size: 1.5rem;
  margin-left: 1.5rem;
}


@media only screen and (max-width: 480px) {
  li{
    font-size: 0.5rem;
  }
  .nameText{
    font-size: 0.5rem;
  }
  .headText2,.headText{
    font-size: 1rem;
  }

  .button {
  font-size: 0.5rem;
  line-height: 1rem;
  font-weight: 500;
  width: 30%;
}
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      UserLists: [],
      users: {
        username: "",
        password: "",
        name: "",
      },
    };
  },
  created() {
    let apiURL = "https://backend-vue-web.vercel.app/user";
    axios
      .get(apiURL)
      .then((res) => {
        this.UserLists = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {
    this.setname();
  },
  methods: {
    setname() {
      this.users.id = sessionStorage.getItem("id");
      this.users.name = sessionStorage.getItem("name");
      this.users.sername = sessionStorage.getItem("sername");
      this.users.position = sessionStorage.getItem("position");
      this.users.academic_standing1 =
        sessionStorage.getItem("academic_standing1");
      this.users.academic_standing2 =
        sessionStorage.getItem("academic_standing2");
      this.users.affiliation = sessionStorage.getItem("affiliation");
      this.users.season = sessionStorage.getItem("season");
    },
  },
};
</script>
