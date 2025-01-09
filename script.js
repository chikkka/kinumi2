// ハンバーガーナビゲーション
let nav = document.querySelector("#navArea")
let btn = document.querySelector(".toggle-btn")

btn.onclick = () => {
  nav.classList.toggle("open");
};

// 下にスクロールするとtopに戻るボタンが出現する
const returnTopButton = document.getElementById("returnTop");
const title = document.getElementById("subTitle");
const setPoint = title.offsetTop;
window.addEventListener("scroll",()=>{
  if(window.scrollY >= setPoint){
    returnTopButton.classList.add("fixed");
  }else{
    returnTopButton.classList.remove("fixed");
  }
});



// -------menuページ---------
// メニューバーの固定
const menuBar = document.getElementById("effectItem");
const stickyPoint = menuBar.offsetTop;
window.addEventListener("scroll",()=>{
  if(window.scrollY >= stickyPoint){
  menuBar.classList.add("fixed");
  }else{
  menuBar.classList.remove("fixed");
  }
});







