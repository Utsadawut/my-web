<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-9 mt-3">
        <!-- Display goes here -->
        <h1 class="fw-bold">รายนักเรียน {{ listSchool.name }}</h1>
        <div class="row">
          <div class="col-md-13">
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>ลำดับ</th>
                  <th>ชื่อ</th>
                  <th>นามสกุล</th>
                  <th>ชั้นเรียน</th>
                  <th class="d-flex justify-content-center">การทำงาน</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(student,index) in students" :key="(student._id,index)">
                  <td>{{ index+1 }}</td>
                  <td>{{ student.name }}</td>
                  <td>{{ student.sername }}</td>
                  <td>{{ student.class }}</td>
                  <td class="d-flex justify-content-center">
                    <router-link
                      :to="{ name: 'editstudent', params: { id: student._id } }"
                      class="btn btn-warning button"
                    >
                      แก้ไข
                    </router-link>
                    <button
                      @click.prevent="deleteStudent(student._id)"
                      class="btn btn-danger button"
                    >
                      ลบ
                    </button>
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
      students: [],
      listSchool: {}
    };
  },
  created() {
    let apiURL = "https://backend-vue-web.vercel.app/students";
    let apiURL2 = `https://backend-vue-web.vercel.app/listSchool/edit-listSchool/${this.$route.params.id}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.students = res.data;
      })
      axios.get(apiURL2).then((res) => {
            this.listSchool = res.data
        })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteStudent(id) {
      let apiURL = `http://localhost:4000/students/delete-student/${id}`;
      let indexOfArrayItem = this.students.findIndex((i) => i._id === id);

      if (window.confirm("คุณต้องการลบรายชื่อนี้?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.students.splice(indexOfArrayItem, 1);
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
