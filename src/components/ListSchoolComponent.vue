<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-9 mt-3">
        <!-- Display goes here -->
        <h1>รายชื่อโรงเรียนทั้งหมด</h1>
        <div class="row">
          <div class="col-md-13">
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>ลำดับ</th>
                  <th>ชื่อโรงเรียน</th>
                  <th>วันที่สอน</th>
                  <th>เวลาที่สอน</th>
                  <th class="d-flex justify-content-center">การทำงาน</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(listSchool,index) in listSchools" :key="(listSchool._id,index)">
                  <td>{{ index+1 }}</td>
                  <td>{{ listSchool.name }}</td>
                  <td>{{ listSchool.date }}</td>
                  <td>{{ listSchool.time }}</td>
                  <td class="d-flex justify-content-center">
                    <router-link
                      :to="{ name: 'liststudent', params: { id: listSchool._id } }"
                      class="btn btn-secondary button"
                    >
                      รายชื่อนักเรียน
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      listSchools: []
    };
  },
  created() {
    let apiURL = "https://backend-vue-web.vercel.app/listSchool";
    axios
      .get(apiURL)
      .then((res) => {
        this.listSchools = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteStudent(id) {
      let apiURL = `https://backend-vue-web.vercel.app/listSchool/delete-listSchool/${id}`;
      let indexOfArrayItem = this.listSchools.findIndex((i) => i._id === id);

      if (window.confirm("คุณต้องการลบรายชื่อนี้?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.listSchools.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
<style scoped>
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
  margin-right: 3px;
  margin-left: 3px;
  float: left;
  border: none;
  padding: 0.5rem 1.5rem;
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
</style>
