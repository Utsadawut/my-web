<template>
  <div>
    <div class="container">
      <h1 class="headText text-center">ตารางสอน</h1>
      <div class="table-responsive">
        <table class="table table-bordered text-center">
          <thead>
            <tr class="bg-light-gray">
              <th class="text-uppercase">วัน / เวลา</th>
              <th class="fw-bold">08:30 - 09:30</th>
              <th class="fw-bold">09:30 - 10:30</th>
              <th class="fw-bold">10:30 - 11:30</th>
              <th class="fw-bold">10:30 - 12:30</th>
              <th class="fw-bold">13:30 - 14:30</th>
              <th class="fw-bold">14:30 - 15:30</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="align-middle fw-bold">วันจันทร์</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="align-middle fw-bold">วันอังคาร</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td class="align-middle fw-bold">วันพุธ</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td class="align-middle fw-bold">วันพฤหัสบดี</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td class="align-middle fw-bold">วันศุกร์</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
.headText {
  margin-top: 5px;
  font-size: 4rem;
  font-weight: bold;
}
body {
  margin-top: -5px;
}
.bg-light-gray {
  background-color: #f7f7f7;
}
.table-bordered thead td,
.table-bordered thead th {
  border-bottom-width: 2px;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}
.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
}

.bg-sky.box-shadow {
  box-shadow: 0px 5px 0px 0px #00a2a7;
}

.bg-orange.box-shadow {
  box-shadow: 0px 5px 0px 0px #af4305;
}

.bg-green.box-shadow {
  box-shadow: 0px 5px 0px 0px #4ca520;
}

.bg-yellow.box-shadow {
  box-shadow: 0px 5px 0px 0px #dcbf02;
}

.bg-pink.box-shadow {
  box-shadow: 0px 5px 0px 0px #e82d8b;
}

.bg-purple.box-shadow {
  box-shadow: 0px 5px 0px 0px #8343e8;
}

.bg-lightred.box-shadow {
  box-shadow: 0px 5px 0px 0px #d84213;
}

.bg-sky {
  background-color: #02c2c7;
}

.bg-orange {
  background-color: #e95601;
}

.bg-green {
  background-color: #5bbd2a;
}

.bg-yellow {
  background-color: #f0d001;
}

.bg-pink {
  background-color: #ff48a4;
}

.bg-purple {
  background-color: #9d60ff;
}

.bg-lightred {
  background-color: #ff5722;
}

.padding-15px-lr {
  padding-left: 15px;
  padding-right: 15px;
}
.padding-5px-tb {
  padding-top: 5px;
  padding-bottom: 5px;
}
.margin-10px-bottom {
  margin-bottom: 5px;
}
.border-radius-5 {
  border-radius: 5px;
}

.margin-10px-top {
  margin-top: 1px;
}
.font-size14 {
  font-size: 14px;
}

.text-light-gray {
  color: #d6d5d5;
}
.font-size13 {
  font-size: 13px;
}

.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
}
.table td,
.table th {
  padding: 0.5rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}
</style>
