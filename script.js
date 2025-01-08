// ハンバーガーナビゲーション
let nav = document.querySelector("#navArea")
let btn = document.querySelector(".toggle-btn")

btn.onclick = () => {
  nav.classList.toggle("open");
};

// メニューバーの固定
const menuBar = document.querySelector("#effectItem");
const stickyPoint = menuBar.offsetTop;
window.addEventListener("scroll",()=>{
  if(window.scrollY >= stickyPoint){
  menuBar.classList.add("fixed");
}else{
  menuBar.classList.remove("fixed");
}
});





