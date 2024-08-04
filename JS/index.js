document.getElementById("tinhLuong").onclick = function () {
  const luongMotNgay = document.getElementById("luongMotNgay").value * 1;
  const soNgayLam = document.getElementById("soNgayLam").value * 1;
  let tongLuong = 0;
  tongLuong = luongMotNgay * soNgayLam;
  document.querySelector(
    ".ketQua"
  ).innerHTML = `<p class ="text-red">lương là ${tongLuong}</p>`;
};
document.querySelector(".tinhTrungBinh").onclick = function () {
  const soThuNhat = document.getElementById("nhapSo1").value * 1;
  const soThuHai = document.getElementById("nhapSo2").value * 1;
  const soThuBa = document.getElementById("nhapSo3").value * 1;
  const soThuTu = document.getElementById("nhapSo4").value * 1;
  const soThuNam = document.getElementById("nhapSo5").value * 1;
  let soTrungBinh = 0;
  soTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
  document.querySelector(".ketQua2").innerHTML = `<p>${soTrungBinh}</p>`;
};
document.querySelector(".doiTienTe").onclick = function () {
  const tienUSD = document.getElementById("USD").value * 1;
  let tienViet = 0;
  tienViet = tienUSD * 23500;
  let tienTe = tienViet.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  document.querySelector(".ketQua3").innerHTML = `<p>${tienTe}</p>`;
};
document.querySelector(".tinhDienTich").onclick = function () {
  const chieuDai = document.getElementById("chieuDai").value * 1;
  const chieuRong = document.getElementById("chieuRong").value * 1;
  let dienTich = 0;
  let chuVi = 0;
  dienTich = chieuDai * chieuRong;
  chuVi = (chieuDai + chieuRong) * 2;
  let result = `<p> diện tích là : ${dienTich} </p>`;
  result += `<p> chu vi là: ${chuVi} </p>`;
  document.querySelector(".ketQua4").innerHTML = `${result}`;
};
