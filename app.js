

const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const sideBarBtn = document.querySelector(".sidebar-toggle");

sideBarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar"); // remove show class from the element
});
