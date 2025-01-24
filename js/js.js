//스크롤 다운 시 네비게이션 컨테이너 사라짐, 스크롤 업 시 네비게이션 컨테이너 생성
let lastScrollTop = 0;
const nav = document.querySelector('.chanel-header');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // 스크롤 다운
    nav.style.top = '-80px'; // 네비게이션 메뉴 높이만큼 숨김
  } else {
    // 스크롤 업
    nav.style.top = '0'; // 네비게이션 메뉴 표시
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});


//상단로고컨테이너가 컨테이너9에 도달 시(스크롤) sticky되어 고정 사라짐
//footer-logo opacity 적용

window.addEventListener('scroll', function() {
    const footer = document.querySelector('.footer-container');
    const main = document.querySelector('#main');
    const footerHeight = footer.offsetHeight;
    const mainHeight = main.offsetHeight;
    
    // 스크롤 위치가 main 컨텐츠 끝에 다다르면 footer가 "문처럼 열리듯" 나타나도록
    if (window.scrollY + window.innerHeight >= mainHeight - footerHeight) {
      footer.classList.add('show');
    } else {
      footer.classList.remove('show');
    }
  });