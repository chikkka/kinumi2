// ハンバーガーナビゲーション

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('#navArea');
  const btn = document.querySelector('.toggle-btn');

  btn.onclick = () => {
    nav.classList.toggle('open');
  };
});

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.menu_content section');
  const navLinks = document.querySelectorAll('#effectItem p a');

  const observer = new IntersectionObserver( //intersectionObsereverAPIで、ある要素が画面に入ってきたか出ていったかを監視するためのコード
    (entries) => {
      //(entries)=>{}は要素が見えた時または消えた時に呼ばれるコールバック関数
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('見えたよ', entry.target);
          let id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === id) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
