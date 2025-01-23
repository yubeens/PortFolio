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