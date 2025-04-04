const translations = {
    he: {
        logo: "בנסקו דום",
        home: "בית",
        apartments: "דירות",
        about: "על בנסקו",
        contacts: "צור קשר",
        "hero-title": "הבית שלך בלב בנסקו",
        "hero-subtitle": "מצא את הדירה המושלמת בהרים",
        "hero-button": "מצא את דירת החלומות שלך",
        "apartments-title": "ההצעות שלנו",
        "about-title": "על בנסקו",
        "about-description": "בנסקו היא עיירה יפהפייה בדרום-מערב בולגריה, הידועה בזכות אתר הסקי שלה ובארכיטקטורה המסורתית. ממוקמת למרגלות הרי פירין, היא מציעה נופים עוצרי נשימה ופעילויות חוץ כל השנה.",
        "contacts-title": "צור קשר",
        "contacts-description": "לפרטים נוספים, אנא צור קשר איתנו בטלפון או בדוא\"ל.",
        "footer-copyright": "© 2025 כל הזכויות שמורות",
        telegram: "Telegram",
        instagram: "Instagram",
        "basement-tab": "מרתף",
        "first-floor-tab": "קומה ראשונה",
        "second-floor-tab": "קומה שנייה",
        "third-floor-tab": "קומה שלישית",
        "fourth-floor-tab": "קומה רביעית",
        "attic-tab": "קומת גג",
        "basement-note": "אזור לא למגורים - חניונים (P1–P19)",
        "basement-parking-info": "9 חניונים נמכרו, 9 חניונים זמינים, מחיר חניון אחד 15 000 €",
        "first-floor-1-a": "1-A: דירת שני חדרים, 62.83 м\"р, 56 547 € - זמין",
        "first-floor-2-a": "2-A: דירת שני חדרים, 49.71 м\"р, 44 739 € - זמין",
        "first-floor-3-a": "3-A: דירת שני חדרים, 76.45 м\"р, 68 805 € - זמין",
        "first-floor-1-b": "1-Б: דירת שני חדרים, 62.83 м\"р, 53 406 € - זמין",
        "first-floor-2-b": "2-Б: דירת שני חדרים, 49.71 м\"р - נמכר",
        "first-floor-3-b": "3-Б: דירת שני חדרים, 76.45 м\"р, 64 983 € - זמין",
        "second-floor-4-a": "4-A: דירת שני חדרים, 67.84 м\"р, 61 056 € - זמין",
        "second-floor-5-a": "5-A: דירת שני חדרים, 64.46 м\"р, 58 014 € - זמין",
        "second-floor-6-a": "6-A: דירת שני חדרים, 62.63 м\"р, 56 367 € - זמין",
        "second-floor-7-a": "7-A: סטודיו, 29.31 м\"р, 26 379 € - זמין",
        "second-floor-4-b": "4-Б: דירת שני חדרים, 67.84 м\"р, 57 664 € - זמין",
        "second-floor-5-b": "5-Б: דירת שני חדרים, 64.46 м\"р - נמכר",
        "second-floor-6-b": "6-Б: דירת שני חדרים, 62.63 м\"р, 53 236 € - זמין",
        "second-floor-7-b": "7-Б: סטודיו, 29.31 м\"р, 24 914 € - זמין",
        "third-floor-8-a": "8-A: דירת שני חדרים, 67.84 м\"р - נמכר",
        "third-floor-9-a": "9-A: דירת שני חדרים, 64.46 м\"р - נמכר",
        "third-floor-10-a": "10-A: דירת שני חדרים, 62.63 м\"р, 56 367 € - זמין",
        "third-floor-11-a": "11-A: סטודיו, 29.31 м\"р - נמכר",
        "third-floor-8-b": "8-Б: דירת שני חדרים, 67.84 м\"р, 61 056 € - זמין",
        "third-floor-9-b": "9-Б: דירת שני חדרים, 64.46 м\"р, 58 014 € - זמין",
        "third-floor-10-b": "10-Б: דירת שני חדרים, 62.63 м\"р, 56 367 € - זמין",
        "third-floor-11-b": "11-Б: סטודיו, 29.31 м\"р, 26 379 € - זמין",
        "fourth-floor-12-a": "12-A: דירת שני חדרים, 75.16 м\"ר, 67 644 € - זמין",
        "fourth-floor-13-a": "13-A: דירת שני חדרים, 67.39 м\"ר - נמכר",
        "fourth-floor-14-a": "14-A: סטודיו, 48.28 м\"ר, 43 452 € - זמין",
        "fourth-floor-15-a": "15-A: סטודיו, 53.05 м\"ר, 47 745 € - זמין",
        "fourth-floor-12-b": "12-Б: דירת שני חדרים, 75.16 м\"ר - נמכר",
        "fourth-floor-13-b": "13-Б: דירת שני חדרים, 67.39 м\"ר, מחיר לפי בקשה - זמין",
        "fourth-floor-14-b": "14-Б: סטודיו, 48.28 м\"ר - נמכר",
        "fourth-floor-15-b": "15-Б: סטודיו, 53.05 м\"ר, 45 093 € - זמין",
        "attic-16-a": "16-A: סטודיו, 22.03 м\"ר - נמכר",
        "attic-17-a": "17-A: דירת שני חדרים, 53.85 м\"ר - נמכר",
        "attic-18-a": "18-A: דירת שני חדרים, 42.12 м\"ר - נמכר",
        "attic-16-b": "16-Б: סטודיו, 22.03 м\"ר - נמכר",
        "attic-17-b": "17-Б: דירת שני חדרים, 53.85 м\"ר, 45 773 € - זמין",
        "attic-18-b": "18-Б: דירת שני חדרים, 42.12 м\"ר, 35 802 € - זמין",
        "apartment-1-title": "דירת שני חדרים",
        "apartment-1-desc": "62.83 м\"р, мרפסת עם נוף להרים",
        "apartment-2-title": "סטודיו נעים",
        "apartment-2-desc": "29.31 м\"р, מושלם לזוג",
        "apartment-3-title": "דירת שני חדרים",
        "apartment-3-desc": "75.16 м\"ר, מרווח ונוח",
        details: "פרטים נוספים"
    },
    ru: {
        logo: "Банско Дом",
        home: "Главная",
        apartments: "Квартиры",
        about: "О Банско",
        contacts: "Контакты",
        "hero-title": "Ваш дом в сердце Банско",
        "hero-subtitle": "Найдите идеальную квартиру в горах",
        "hero-button": "Найти квартиру мечты",
        "apartments-title": "Наши предложения",
        "about-title": "О Банско",
        "about-description": "Банско — красивый городок на юго-западе Болгарии, известный своим горнолыжным курортом и традиционной архитектурой. Расположенный у подножия Пиринских гор, он предлагает захватывающие виды и круглогодичные активности на свежем воздухе.",
        "contacts-title": "Контакты",
        "contacts-description": "Для получения дополнительной информации, пожалуйста, свяжитесь с нами по телефону или электронной почте.",
        "footer-copyright": "© 2025 Все права защищены",
        telegram: "Telegram",
        instagram: "Instagram",
        "basement-tab": "Подвал",
        "first-floor-tab": "Первый этаж",
        "second-floor-tab": "Второй этаж",
        "third-floor-tab": "Третий этаж",
        "fourth-floor-tab": "Четвертый этаж",
        "attic-tab": "Мансардный этаж",
        "basement-note": "Нежилая зона - парковки (P1–P19)",
        "basement-parking-info": "9 стоянок проданы, 9 стоянок в наличии, цена одной стоянки 15 000 €",
        "first-floor-1-a": "1-A: Двухкомнатная, 62.83 м², 56 547 € - Доступна",
        "first-floor-2-a": "2-A: Двухкомнатная, 49.71 м², 44 739 € - Доступна",
        "first-floor-3-a": "3-A: Двухкомнатная, 76.45 м², 68 805 € - Доступна",
        "first-floor-1-b": "1-Б: Двухкомнатная, 62.83 м², 53 406 € - Доступна",
        "first-floor-2-b": "2-Б: Двухкомнатная, 49.71 м² - Продана",
        "first-floor-3-b": "3-Б: Двухкомнатная, 76.45 м², 64 983 € - Доступна",
        "second-floor-4-a": "4-A: Двухкомнатная, 67.84 м², 61 056 € - Доступна",
        "second-floor-5-a": "5-A: Двухкомнатная, 64.46 м², 58 014 € - Доступна",
        "second-floor-6-a": "6-A: Двухкомнатная, 62.63 м², 56 367 € - Доступна",
        "second-floor-7-a": "7-A: Студия, 29.31 м², 26 379 € - Доступна",
        "second-floor-4-b": "4-Б: Двухкомнатная, 67.84 м², 57 664 € - Доступна",
        "second-floor-5-b": "5-Б: Двухкомнатная, 64.46 м² - Продана",
        "second-floor-6-b": "6-Б: Двухкомнатная, 62.63 м², 53 236 € - Доступна",
        "second-floor-7-b": "7-Б: Студия, 29.31 м², 24 914 € - Доступна",
        "third-floor-8-a": "8-A: Двухкомнатная, 67.84 м² - Продана",
        "third-floor-9-a": "9-A: Двухкомнатная, 64.46 м² - Продана",
        "third-floor-10-a": "10-A: Двухкомнатная, 62.63 м², 56 367 € - Доступна",
        "third-floor-11-a": "11-A: Студия, 29.31 м² - Продана",
        "third-floor-8-b": "8-Б: Двухкомнатная, 67.84 м², 61 056 € - Доступна",
        "third-floor-9-b": "9-Б: Двухкомнатная, 64.46 м², 58 014 € - Доступна",
        "third-floor-10-b": "10-Б: Двухкомнатная, 62.63 м², 56 367 € - Доступна",
        "third-floor-11-b": "11-Б: Студия, 29.31 м², 26 379 € - Доступна",
        "fourth-floor-12-a": "12-A: Двухкомнатная, 75.16 м², 67 644 € - Доступна",
        "fourth-floor-13-a": "13-A: Двухкомнатная, 67.39 м² - Продана",
        "fourth-floor-14-a": "14-A: Студия, 48.28 м², 43 452 € - Доступна",
        "fourth-floor-15-a": "15-A: Студия, 53.05 м², 47 745 € - Доступна",
        "fourth-floor-12-b": "12-Б: Двухкомнатная, 75.16 м² - Продана",
        "fourth-floor-13-b": "13-Б: Двухкомнатная, 67.39 м², Цена по запросу - Доступна",
        "fourth-floor-14-b": "14-Б: Студия, 48.28 м² - Продана",
        "fourth-floor-15-b": "15-Б: Студия, 53.05 м², 45 093 € - Доступна",
        "attic-16-a": "16-A: Студия, 22.03 м² - Продана",
        "attic-17-a": "17-A: Двухкомнатная, 53.85 м² - Продана",
        "attic-18-a": "18-A: Двухкомнатная, 42.12 м² - Продана",
        "attic-16-b": "16-Б: Студия, 22.03 м² - Продана",
        "attic-17-b": "17-Б: Двухкомнатная, 53.85 м², 45 773 € - Доступна",
        "attic-18-b": "18-Б: Двухкомнатная, 42.12 м², 35 802 € - Доступна",
        "apartment-1-title": "Двухкомнатная квартира",
        "apartment-1-desc": "62.83 м², балкон с видом на горы",
        "apartment-2-title": "Уютная студия",
        "apartment-2-desc": "29.31 м², идеально для пары",
        "apartment-3-title": "Двухкомнатная квартира",
        "apartment-3-desc": "75.16 м², просторный и удобный",
        details: "Подробнее"
    }
};

function changeLanguage() {
    const lang = document.getElementById("language").value;
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });

    if (lang === "he") {
        document.body.style.direction = "rtl";
        document.body.style.textAlign = "right";
    } else {
        document.body.style.direction = "ltr";
        document.body.style.textAlign = "left";
    }
}

function openSection(evt, sectionName) {
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.classList.remove("active");
    });
    document.getElementById(sectionName).classList.add("active");
    evt.currentTarget.classList.add("active");
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

changeLanguage();
