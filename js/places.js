
function checkScreenWidths() {
    const screenWidth = window.innerWidth;
    const navLinks = document.getElementById('nav_links');
    const menu = document.getElementById('menu');
    const navLinksOut = document.getElementById('nav_links_out');
  
    // التحقق من وجود العناصر
    if (navLinks && menu && navLinksOut) {
      if (screenWidth < 768) {
        navLinks.style.display = 'none';
        menu.style.display = 'block';
        navLinksOut.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        menu.style.display = 'none';
        navLinksOut.style.display = 'none';
      }
    } else {
      console.error("One or more elements are missing in the DOM.");
    }
  }
  
  function toggleMenu() {
    const navLinksOut = document.getElementById('nav_links_out');
    if (navLinksOut) {
      if (navLinksOut.style.display === 'none' || navLinksOut.style.display === '') {
        navLinksOut.style.display = '';
      } else {
        navLinksOut.style.display = 'none';
      }
    }
  }
  
  // استمع لتغيير حجم الشاشة
  window.addEventListener("resize", checkScreenWidths);
  
  // استدعاء دالة التحقق عند التحميل
  checkScreenWidths();
  


  // إضافة حدث إلى كل عنصر يحتوي على الكلاس "book-now"
document.querySelectorAll('.book-now').forEach(function(link) {
  link.addEventListener('click', function(event) {
      event.preventDefault(); // منع السلوك الافتراضي للرابط
      window.location.href = 'pay.html'; // الانتقال إلى الصفحة المطلوبة
  });
});

