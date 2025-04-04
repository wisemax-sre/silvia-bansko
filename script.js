function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-lang]");
    const translations = {
        "ru": {
            "title": "Жилой комплекс",
            "ru": "Русский",
            "he": "עברית",
            "apartments-nav": "Квартиры",
            "about-nav": "О проекте",
            "apartments-title": "Квартиры",
            "first-floor-tab": "Первый этаж",
            "second-floor-tab": "Второй этаж",
            "third-floor-tab": "Третий этаж",
            "basement-tab": "Подвал",
            "first-floor-1-a": "1-A: Двухкомнатная квартира, 67.84 м² - Продано",
            "first-floor-2-a": "2-A: Двухкомнатная квартира, 64.46 м², 58 014 € - Доступно",
            "second-floor-5-a": "5-A: Двухкомнатная квартира, 67.84 м² - Продано",
            "second-floor-6-a": "6-A: Двухкомнатная квартира, 64.46 м², 58 014 € - Доступно",
            "third-floor-8-a": "8-A: Двухкомнатная квартира, 67.84 м² - Продано",
            "third-floor-9-a": "9-A: Двухкомнатная квартира, 64.46 м² - Продано",
            "third-floor-10-a": "10-A: Двухкомнатная квартира, 62.63 м², 56 367 € - Доступно",
            "third-floor-11-a": "11-A: Студия, 29.31 м² - Продано",
            "third-floor-8-b": "8-Б: Двухкомнатная квартира, 67.84 м², 61 056 € - Доступно",
            "third-floor-9-b": "9-Б: Двухкомнатная квартира, 64.46 м², 58 014 € - Доступно",
            "third-floor-10-b": "10-Б: Двухкомнатная квартира, 62.63 м², 56 367 € - Доступно",
            "third-floor-11-b": "11-Б: Студия, 29.31 м², 26 379 € - Доступно",
            "basement-note": "Зона не для проживания - парковки (P1–P19)",
            "basement-parking-info": "9 парковок продано, 9 парковок доступно, цена одной парковки 15 000 €",
            "about-title": "О проекте",
            "about-text": "Это современный жилой комплекс с удобным расположением."
        },
        "he": {
            "title": "מתחם מגורים",
            "ru": "Русский",
            "he": "עברית",
            "apartments-nav": "דירות",
            "about-nav": "על הפרויקט",
            "apartments-title": "דירות",
            "first-floor-tab": "קומה ראשונה",
            "second-floor-tab": "קומה שנייה",
            "third-floor-tab": "קומה שלישית",
            "basement-tab": "מרתף",
            "first-floor-1-a": "1-A: דירת שני חדרים, 67.84 מ\"ר - נמכר",
            "first-floor-2-a": "2-A: דירת שני חדרים, 64.46 מ\"ר, 58 014 € - זמין",
            "second-floor-5-a": "5-A: דירת שני חדרים, 67.84 מ\"ר - נמכר",
            "second-floor-6-a": "6-A: דירת שני חדרים, 64.46 מ\"ר, 58 014 € - זמין",
            "third-floor-8-a": "8-A: דירת שני חדרים, 67.84 מ\"ר - נמכר",
            "third-floor-9-a": "9-A: דירת שני חדרים, 64.46 מ\"ר - נמכר",
            "third-floor-10-a": "10-A: דירת שני חדרים, 62.63 מ\"ר, 56 367 € - זמין",
            "third-floor-11-a": "11-A: סטודיו, 29.31 מ\"ר - נמכר",
            "third-floor-8-b": "8-Б: דירת שני חדרים, 67.84 מ\"ר, 61 056 € - זמין",
            "third-floor-9-b": "9-Б: דירת שני חדרים, 64.46 מ\"ר, 58 014 € - זמין",
            "third-floor-10-b": "10-Б: דירת שני חדרים, 62.63 מ\"ר, 56 367 € - זמין",
            "third-floor-11-b": "11-Б: סטודיו, 29.31 מ\"ר, 26 379 € - זמין",
            "basement-note": "אזור לא למגורים - חניונים (P1–P19)",
            "basement-parking-info": "9 חניונים נמכרו, 9 חניונים זמינים, מחיר חניון אחד 15 000 €",
            "about-title": "על הפרויקט",
            "about-text": "זהו מתחם מגורים מודרני במיקום נוח."
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

function openSection(sectionName) {
    document.querySelectorAll(".section-content").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(sectionName).classList.add("active");
}

function openFloorTab(evt, tabName) {
    document.querySelectorAll(".floor-tab-content").forEach(tab => {
        tab.classList.remove("active");
    });
    document.querySelectorAll(".floor-tab-button").forEach(button => {
        button.classList.remove("active");
    });
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Инициализация на иврите
changeLanguage("he");
