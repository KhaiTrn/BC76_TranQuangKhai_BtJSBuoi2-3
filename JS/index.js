// Bài tập 1
document.getElementById("tinhLuong").onclick = function () {
  const luongMotNgay = document.getElementById("luongMotNgay").value * 1;
  const soNgayLam = document.getElementById("soNgayLam").value * 1;
  let tongLuong = 0;
  tongLuong = luongMotNgay * soNgayLam;
  document.querySelector(
    ".ketQua"
  ).innerHTML = `<p class ="mb-0"><i class="fa-regular fa-hand-point-right"></i> Lương của bạn là ${tongLuong}</p>`;
};
// Bài tập 2
document.querySelector(".tinhTrungBinh").onclick = function () {
  const soThuNhat = document.getElementById("nhapSo1").value * 1;
  const soThuHai = document.getElementById("nhapSo2").value * 1;
  const soThuBa = document.getElementById("nhapSo3").value * 1;
  const soThuTu = document.getElementById("nhapSo4").value * 1;
  const soThuNam = document.getElementById("nhapSo5").value * 1;
  let soTrungBinh = 0;
  soTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
  document.querySelector(
    ".ketQua2"
  ).innerHTML = `<p class ="mb-0"><i class="fa-regular fa-hand-point-right"></i> ${soTrungBinh}</p>`;
};
// Bài tập 3
document.querySelector(".doiTienTe").onclick = function () {
  const tienUSD = document.getElementById("USD").value * 1;
  let tienViet = 0;
  tienViet = tienUSD * 23500;
  let tienTe = tienViet.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  document.querySelector(
    ".ketQua3"
  ).innerHTML = `<p class ="mb-0"><i class="fa-regular fa-hand-point-right"></i>${tienTe}</p>`;
};
// Bài tập 4
document.querySelector(".tinhDienTich").onclick = function () {
  const chieuDai = document.getElementById("chieuDai").value * 1;
  const chieuRong = document.getElementById("chieuRong").value * 1;
  let dienTich = 0;
  let chuVi = 0;
  dienTich = chieuDai * chieuRong;
  chuVi = (chieuDai + chieuRong) * 2;
  let result = `<p class ="mb-0"> diện tích là : ${dienTich} </p>`;
  result += `<p class ="mb-0"> chu vi là: ${chuVi} </p>`;
  document.querySelector(
    ".ketQua4"
  ).innerHTML = `<p class ="mb-0"><i class="fa-regular fa-hand-point-right"></i>${result}</p>`;
};
// Bài tập 5
document.querySelector(".tinhTong").onclick = function () {
  const nhapSo = document.getElementById("nhapSo").value * 1;
  if (nhapSo > 99) {
    document.querySelector(
      ".ketQua5"
    ).innerHTML = `<p class ="mb-0"><i class="fa-regular fa-hand-point-right"></i> xin hãy nhập số có 2 chữ số</p>`;
  } else {
    let soHangDonVi = nhapSo % 10;
    let soHangChuc = Math.floor(nhapSo / 10);

    let tongHaiKySo = 0;
    tongHaiKySo = soHangChuc + soHangDonVi;
    document.querySelector(
      ".ketQua5"
    ).innerHTML = `<p class ="mb-0"><i class="fa-regular fa-hand-point-right"></i> ${tongHaiKySo}</p>`;
  }
};
