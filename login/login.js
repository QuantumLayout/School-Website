// ====== LOGIN FORM HANDLER ======
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert("يرجى إدخال اسم المستخدم وكلمة المرور");
            return;
        }

        // Dummy login check (replace with your real auth logic)
        if (username === "admin" && password === "1234") {
            alert("تم تسجيل الدخول بنجاح!");
            window.location.href = "/dashboard.html"; 
        } else {
            alert("اسم المستخدم أو كلمة المرور غير صحيح");
        }

        // Clear password field
        passwordInput.value = "";
    });
});

// ====== SETTINGS DROPDOWN TOGGLE ======
const settings = document.querySelector(".settings");
const languagesMenu = document.querySelector(".languages");
const langLabel = document.getElementById("lang-label");

settings.addEventListener("click", (e) => {
    e.stopPropagation();
    settings.classList.toggle("active");
});

langLabel.addEventListener("click", (e) => {
    e.stopPropagation();
    languagesMenu.classList.toggle("active");
});

document.addEventListener("click", () => {
    settings.classList.remove("active");
    languagesMenu.classList.remove("active");
});

// ====== LOGIN PAGE LANGUAGE SWITCH & FONTS ======
const loginLang = (() => {
    const langEn = document.getElementById("lang-en");
    const langAr = document.getElementById("lang-ar");

    // Texts for login page and navbar
    const texts = {
        en: {
            navbarHome: "Home",
            h1: "Login",
            usernameLabel: "Username",
            usernamePlaceholder: "Enter your username",
            passwordLabel: "Password",
            passwordPlaceholder: "Enter your password",
            loginButton: "Login",
            forgotPassword: "Forgot password?",
            signupText: "Don't have an account? Create one"
        },
        ar: {
            navbarHome: "الصفحة الرئيسية",
            h1: "تسجيل الدخول",
            usernameLabel: "اسم المستخدم",
            usernamePlaceholder: "أدخل اسم المستخدم",
            passwordLabel: "كلمة المرور",
            passwordPlaceholder: "أدخل كلمة المرور",
            loginButton: "تسجيل الدخول",
            forgotPassword: "نسيت كلمة المرور؟",
            signupText: "ليس لديك حساب؟ إنشاء حساب"
        }
    };

    const updateTexts = (lang) => {
        // Navbar home link
        const navHome = document.getElementById("nav-home");
        if (navHome) navHome.textContent = texts[lang].navbarHome;

        // Login form
        document.querySelector(".login-header h1").textContent = texts[lang].h1;
        document.querySelector("label[for='username']").textContent = texts[lang].usernameLabel;
        document.querySelector("#username").placeholder = texts[lang].usernamePlaceholder;
        document.querySelector("label[for='password']").textContent = texts[lang].passwordLabel;
        document.querySelector("#password").placeholder = texts[lang].passwordPlaceholder;
        document.querySelector(".btn-login").textContent = texts[lang].loginButton;
        document.querySelector(".forgot-password a").textContent = texts[lang].forgotPassword;
        document.querySelector(".signup-link").innerHTML = texts[lang].signupText;

        // Fonts
        const root = document.documentElement;
        if (lang === "en") {
            root.style.setProperty("--heading-font", "'Montserrat'");
            root.style.setProperty("--body-font", "'Poppins'");
        } else {
            root.style.setProperty("--heading-font", "'Amiri'");
            root.style.setProperty("--body-font", "'Noto Naskh Arabic'");
        }
    };

    // Default language: Arabic
    updateTexts("ar");

    // Event listeners
    langEn.addEventListener("click", (e) => {
        e.stopPropagation();
        updateTexts("en");
        languagesMenu.classList.remove("active");
    });

    langAr.addEventListener("click", (e) => {
        e.stopPropagation();
        updateTexts("ar");
        languagesMenu.classList.remove("active");
    });
})();

