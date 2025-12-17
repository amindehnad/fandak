let slideIndex = 1;
showSlide(slideIndex);

// تابع تغییر اسلاید با دکمه‌ها
function changeSlide(n) {
    showSlide(slideIndex += n);
}

// تابع نمایش اسلاید خاص
function currentSlide(n) {
    showSlide(slideIndex = n);
}

// تابع اصلی نمایش اسلاید
function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // مخفی کردن همه اسلایدها
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // غیرفعال کردن همه نقاط
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // نمایش اسلاید و نقطه فعال جاری
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// اسلایدشو خودکار (اختیاری)
setInterval(() => {
    changeSlide(1);
}, 5000);