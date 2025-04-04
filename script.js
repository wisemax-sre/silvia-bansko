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
        "basement-tab": "סוטרן",
        "first-floor-tab": "קומה ראשונה",
        "second-floor-tab": "קומה שנייה",
        "third-floor-tab": "קומה שלישית",
        "fourth-floor-tab": "קומה רביעית",
        "attic-tab": "קומת גג",
        "apartment-1-title": "דירה דו-חדרית",
        "apartment-1-desc": "62.83 מ\"ר, מרפסת עם נוף להרים",
        "apartment-2-title": "סטודיו נעים",
        "apartment-2-desc": "29.31 מ\"ר, מושלם לזוג",
        "apartment-3-title": "דופלקס משפחתי",
        "apartment-3-desc": "75.16 מ\"ר, מרווח ונוח",
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
        "apartment-1-title": "Двухкомнатная квартира",
        "apartment-1-desc": "62.83 м², балкон с видом на горы",
        "apartment-2-title": "Уютная студия",
        "apartment-2-desc": "29.31 м², идеально для пары",
        "apartment-3-title": "Семейный дуплекс",
        "apartment-3-desc": "75.16 м², просторный и удобный",
        details: "Подробнее"
    },
    bg: {
        logo: "Банско Дом",
        home: "Начало",
        apartments: "Апартаменти",
        about: "За Банско",
        contacts: "Контакти",
        "hero-title": "Вашият дом в сърцето на Банско",
        "hero-subtitle": "Намерете идеалния апартамент в планините",
        "hero-button": "Намери апартамент на мечтите си",
        "apartments-title": "Нашите предложения",
        "about-title": "За Банско",
        "about-description": "Банско е красив град в югозападна България, известен със ски курорта си и традиционната архитектура. Разположен в подножието на Пирин планина, той предлага спиращи дъха гледки и целогодишни активности на открито.",
        "contacts-title": "Контакти",
        "contacts-description": "За повече информация, моля, свържете се с нас по телефон или имейл.",
        "footer-copyright": "© 2025 Всички права запазени",
        telegram: "Telegram",
        instagram: "Instagram",
        "basement-tab": "Сутерен",
        "first-floor-tab": "Първи етаж",
        "second-floor-tab": "Втори етаж",
        "third-floor-tab": "Трети етаж",
        "fourth-floor-tab": "Четвърти етаж",
        "attic-tab": "Тавански етаж",
        "apartment-1-title": "Двустаен апартамент",
        "apartment-1-desc": "62.83 м², балкон с изглед към планините",
        "apartment-2-title": "Уютно студио",
        "apartment-2-desc": "29.31 м², перфектно за двойка",
        "apartment-3-title": "Семеен дуплекс",
        "apartment-3-desc": "75.16 м², просторен и удобен",
        details: "Повече информация"
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
