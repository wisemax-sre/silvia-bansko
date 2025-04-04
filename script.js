function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-lang]");
    const translations = {
        "ru": {
            "title": "Жилой комплекс",
            "ru": "Русский",
            "he": "עברית",
            "apartments-title": "Квартиры",
            "first-floor-1-a": "1-A: Двухкомнатная квартира, 67.84 м² - Продано"
        },
        "he": {
            "title": "מתחם מגורים",
            "ru": "Русский",
            "he": "עברית",
            "apartments-title": "דירות",
            "first-floor-1-a": "1-A: דירת שני חדרים, 67.84 מ\"ר - נמכר"
        }
    };

    elements.forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll(".lang-button").forEach(button => {
        button.classList.remove("active");
    });
    document.querySelector(`.lang-button[data-lang="${lang}"]`).classList.add("active");

    if (lang === "he") {
        document.body.style.direction = "rtl";
        document.body.style.textAlign = "right";
    } else {
        document.body.style.direction = "ltr";
        document.body.style.textAlign = "left";
    }
}

// Сразу загружаем сайт на иврите
changeLanguage("he");
