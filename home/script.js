const navLinks = document.querySelectorAll('.navlink a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');
    });
});

// ====== SETTINGS DROPDOWN TOGGLE ======
const settings = document.querySelector(".settings");
const languagesMenu = document.querySelector(".languages");
const langLabel = document.getElementById("lang-label"); // the <p> inside first option

// Toggle main dropdown (the whole box)
settings.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent immediate close
    settings.classList.toggle("active");
});

// Toggle first option submenu on click (Language submenu)
langLabel.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent closing dropdown
    languagesMenu.classList.toggle("active");
});

// Close dropdown and submenu when clicking outside
document.addEventListener("click", () => {
    settings.classList.remove("active");
    languagesMenu.classList.remove("active");
});


// script.js

// ====== SELECT LANGUAGE BUTTONS ======
const langEnBtn = document.getElementById("lang-en");
const langArBtn = document.getElementById("lang-ar");

// ====== SELECT TEXT ELEMENTS ======
const elements = {
    // NAV
    navHome: document.getElementById("nav-home"),
    navAbout: document.getElementById("nav-about"),
    navAcademics: document.getElementById("nav-academics"),
    navNews: document.getElementById("nav-news"),
    navContact: document.getElementById("nav-contact"),
    langLabel: document.getElementById("lang-label"),

    // HOME
    h1Home: document.getElementById("h1-home"),
    pHome: document.getElementById("p-home"),

    // ABOUT
    h1About: document.getElementById("h1-about"),
    pAbout: document.getElementById("p-about"),

    // ACADEMICS
    h1Academics: document.getElementById("h1-academics"),
    card7: document.getElementById("card-7"),
    card7P: document.getElementById("card-7-p"),
    card8: document.getElementById("card-8"),
    card8P: document.getElementById("card-8-p"),
    card9: document.getElementById("card-9"),
    card9P: document.getElementById("card-9-p"),
    card10: document.getElementById("card-10"),
    card10P: document.getElementById("card-10-p"),

    // NEWS
    h1News: document.getElementById("h1-news"),
    newsSports: document.getElementById("news-sports"),
    newsSportsP: document.getElementById("news-sports-p"),
    newsScience: document.getElementById("news-science"),
    newsScienceP: document.getElementById("news-science-p"),
    newsGrad: document.getElementById("news-grad"),
    newsGradP: document.getElementById("news-grad-p"),

    // CONTACT
    h1Contact: document.getElementById("h1-contact"),
    pContact: document.getElementById("p-contact"),

    // FOOTER
    footerText: document.getElementById("footer-text"),
    footerMade: document.getElementById("footer-made")
};

// ====== TRANSLATION DICTIONARY ======
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About Us",
        navAcademics: "Academics",
        navNews: "News",
        navContact: "Contact Us",
        langLabel: "Language",

        h1Home: "Welcome to Anas bin Al Nadr",
        pHome: "Inspiring students to learn, grow, and achieve excellence.",

        h1About: "About Us",
        pAbout: "Our school is committed to academic excellence, creativity, and the holistic development of every student.",

        h1Academics: "Academics",
        card7: "7th grade",
        card7P: "Building a strong foundation for lifelong learning.",
        card8: "8th grade",
        card8P: "Encouraging curiosity, creativity, and critical thinking.",
        card9: "9th grade",
        card9P: "Preparing students for higher education and future careers.",
        card10: "10th grade",
        card10P: "Preparing students for higher education and future careers.",

        h1News: "News & Events",
        newsSports: "Annual Sports Day",
        newsSportsP: "Join us for a day full of fun, competition, and school spirit!",
        newsScience: "Science Fair 2025",
        newsScienceP: "Students showcase their innovative projects and experiments.",
        newsGrad: "Graduation Ceremony",
        newsGradP: "Celebrating the achievements of our graduating class.",

        h1Contact: "Contact Us",
        pContact: "You can reach us via the following methods:",

        footerText: "©2025 All rights reserved.",
        footerMade: "Made by QuantumLayout for Anas bin Al-Nadr school"
    },
    ar: {
        navHome: "الصفحة الرئيسية",
        navAbout: "من نحن",
        navAcademics: "الصفوف",
        navNews: "الأخبار",
        navContact: "اتصل بنا",
        langLabel: "اللغة",

        h1Home: "مرحبا بكم في مدرسة أنس بن النضر",
        pHome: "إلهام الطلاب للتعلم والنمو وتحقيق التميز.",

        h1About: "من نحن",
        pAbout: "مدرستنا ملتزمة بالتميز الأكاديمي والإبداع والتنمية الشاملة لكل طالب.",

        h1Academics: "الصفوف",
        card7: "الصف السابع",
        card7P: "بناء أساس قوي للتعلم مدى الحياة.",
        card8: "الصف الثامن",
        card8P: "تشجيع الفضول والإبداع والتفكير النقدي.",
        card9: "الصف التاسع",
        card9P: "إعداد الطلاب للتعليم العالي والمستقبل المهني.",
        card10: "الصف العاشر",
        card10P: "إعداد الطلاب للتعليم العالي والمستقبل المهني.",

        h1News: "الأخبار والفعاليات",
        newsSports: "اليوم الرياضي السنوي",
        newsSportsP: "انضموا إلينا ليوم مليء بالمرح والتنافس وروح المدرسة!",
        newsScience: "معرض العلوم 2025",
        newsScienceP: "يعرض الطلاب مشاريعهم وتجاربهم المبتكرة.",
        newsGrad: "حفل التخرج",
        newsGradP: "الاحتفال بإنجازات دفعة التخرج.",

        h1Contact: "اتصل بنا",
        pContact: "يمكنك التواصل معنا عبر الوسائل التالية:",

        footerText: "©2025 جميع الحقوق محفوظة.",
        footerMade: "تم التصميم بواسطة QuantumLayout لمدرسة أنس بن النضر."
    }
};

// ====== FONT SETTINGS ======
const fonts = {
    en: {
        heading: "Montserrat",
        body: "Poppins"
    },
    ar: {
        heading: "Amiri",
        body: "Noto Naskh Arabic"
    }
};

// ====== APPLY TRANSLATION ======
function applyLanguage(lang) {
    // Text
    for (let key in elements) {
        if (elements[key] && translations[lang][key]) {
            elements[key].textContent = translations[lang][key];
        }
    }

    // Fonts
    document.documentElement.style.setProperty("--heading-font", fonts[lang].heading);
    document.documentElement.style.setProperty("--body-font", fonts[lang].body);
}

// ====== EVENT LISTENERS ======
langEnBtn.addEventListener("click", () => applyLanguage("en"));
langArBtn.addEventListener("click", () => applyLanguage("ar"));

// ====== SET DEFAULT LANGUAGE ======
applyLanguage("ar");

// ====== SELECT THE NEWS SECTION ======
const newsSection = document.getElementById("news");

// ====== MODIFY applyLanguage FUNCTION ======
function applyLanguage(lang) {
    // Text
    for (let key in elements) {
        if (elements[key] && translations[lang][key]) {
            elements[key].textContent = translations[lang][key];
        }
    }

    // Fonts
    document.documentElement.style.setProperty("--heading-font", fonts[lang].heading);
    document.documentElement.style.setProperty("--body-font", fonts[lang].body);

    // ====== NEWS RTL FOR ARABIC ======
    if (lang === "ar") {
        newsSection.style.direction = "rtl";
        newsSection.style.textAlign = "right";
    } else {
        newsSection.style.direction = "ltr";
        newsSection.style.textAlign = "left";
    }
}

const root = document.documentElement;
const body = document.body;

// Language buttons
const langEn = document.getElementById("lang-en");
const langAr = document.getElementById("lang-ar");

// Function to set text direction
function setDirection(isArabic) {
    if (isArabic) {
        body.style.direction = "rtl"; // Right-to-left
    } else {
        body.style.direction = "ltr"; // Left-to-right
    }
}

// Event listeners
langEn.addEventListener("click", () => {
    // Font change
    root.style.setProperty("--heading-font", "'Montserrat'");
    root.style.setProperty("--body-font", "'Poppins'");
    // Text direction
    setDirection(false);
});

langAr.addEventListener("click", () => {
    // Font change
    root.style.setProperty("--heading-font", "'Amiri'");
    root.style.setProperty("--body-font", "'Noto Naskh Arabic'");
    // Text direction
    setDirection(true);
});
