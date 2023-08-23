<template>
  <div class="row justify-content-center mt-5">
    <div class="card text-center" style="width: 18rem">
      <img src="../assets/imageDownloadPdf.png" class="card-img-top imgCard" />
      <div class="card-body">
        <h5 class="card-title">แบบฝึกหัด PDF</h5>
        <p class="card-text">
          ไฟล์เล่มแบบฝึกหัดสำหรับนักเรียนหลัดสูตรปัญญาอารยะ
        </p>
        <p class="card-text">
          ในรูปแบบ
          <img src="../assets/PDF_file_icon.svg.png" class="card-img-logo" />
        </p>

        <a
          href="https://drive.google.com/uc?export=download&id=1iHrGi_aOVWqeV52GKeBCc4O4I3WBd25r"
          download="pdf"
          class="btn btn-warning button"
          >Download
          <i class="fa fa-download"></i>
        </a>
      </div>
    </div>

    <div class="card text-center" style="width: 18rem">
      <img src="../assets/imageDownloadPdf.png" class="card-img-top imgCard" />
      <div class="card-body">
        <h5 class="card-title">แบบฝึกหัด DOC</h5>
        <p class="card-text">
          ไฟล์เล่มแบบฝึกหัดสำหรับนักเรียนหลัดสูตรปัญญาอารยะ
        </p>
        <p class="card-text">
          ในรูปแบบ
          <img src="../assets/docx_icon.svg.png" class="card-img-logo2" />
        </p>

        <a
          href="https://drive.google.com/uc?export=download&id=1vYcpXcY2cZkmS3kRX8Hqknzz7nMRZom6"
          download="pdf"
          class="btn btn-warning button"
          >Download
          <i class="fa fa-download"></i>
        </a>
      </div>
    </div>

    <!-- การทำลิงค์โหลดจาก google drive 
        https://drive.google.com/uc?export=download&id= +
        1iHrGi_aOVWqeV52GKeBCc4O4I3WBd25r -->
  </div>
</template>
<script></script>
<style scoped>
.imgCard {
    margin-top: 6px;
  border-style: solid;
  border-width: 5px;
  border-color: #e0f2f1;
}
.card {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}
.card-img-logo {
  width: 2rem;
  height: 2.4rem;
}
.card-img-logo2 {
  width: 2.6rem;
  height: 2.6rem;
}
.button {
  margin-top: 2px;
  margin-bottom: 2px;
  margin-right: 2px;
  margin-left: 2px;
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
.button:hover {
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-2px);
}
.button:active {
  transform: translateY(-1px);
}
</style>
