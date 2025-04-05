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
        // --- ИСПРАВЛЕННЫЕ СТРОКИ С ЦЕНАМИ НИЖЕ ---
        "basement-parking-info": "9 חניונים נמכרו, 9 חניונים זמינים, מחיר חניון אחד <span dir='ltr'>€ 15 000</span>",
        "first-floor-1-a": "1-A: דירת שני חדרים, 62.83 מ\"ר, <span dir='ltr'>€ 56 547</span> - זמין",
        "first-floor-2-a": "2-A: דירת שני חדרים, 49.71 מ\"ר, <span dir='ltr'>€ 44 739</span> - זמין",
        "first-floor-3-a": "3-A: דירת שני חדרים, 76.45 מ\"ר, <span dir='ltr'>€ 68 805</span> - זמין",
        "first-floor-1-b": "1-Б: דירת שני חדרים, 62.83 מ\"ר, <span dir='ltr'>€ 53 406</span> - זמין",
        "first-floor-2-b": "2-Б: דירת שני חדרים, 49.71 מ\"ר - נמכר", // Нет цены
        "first-floor-3-b": "3-Б: דירת שני חדרים, 76.45 מ\"ר, <span dir='ltr'>€ 64 983</span> - זמין",
        "second-floor-4-a": "4-A: דירת שני חדרים, 67.84 מ\"ר, <span dir='ltr'>€ 61 056</span> - זמין",
        "second-floor-5-a": "5-A: דירת שני חדרים, 64.46 מ\"ר, <span dir='ltr'>€ 58 014</span> - זמין",
        "second-floor-6-a": "6-A: דירת שני חדרים, 62.63 מ\"ר, <span dir='ltr'>€ 56 367</span> - זמין",
        "second-floor-7-a": "7-A: סטודיו, 29.31 מ\"ר, <span dir='ltr'>€ 26 379</span> - זמין",
        "second-floor-4-b": "4-Б: דירת שני חדרים, 67.84 מ\"ר, <span dir='ltr'>€ 57 664</span> - זמין",
        "second-floor-5-b": "5-Б: דירת שני חדרים, 64.46 מ\"ר - נמכר", // Нет цены
        "second-floor-6-b": "6-Б: דירת שני חדרים, 62.63 מ\"ר, <span dir='ltr'>€ 53 236</span> - זמין",
        "second-floor-7-b": "7-Б: סטודיו, 29.31 מ\"ר, <span dir='ltr'>€ 24 914</span> - זמין",
        "third-floor-8-a": "8-A: דירת שני חדרים, 67.84 מ\"ר, <span dir='ltr'>€ 61 056</span> - זמין",
        "third-floor-9-a": "9-A: דירת שני חדרים, 64.46 מ\"ר, <span dir='ltr'>€ 58 014</span> - זמין",
        "third-floor-10-a": "10-A: דירת שני חדרים, 62.63 מ\"ר, <span dir='ltr'>€ 56 367</span> - זמין",
        "third-floor-11-a": "11-A: סטודיו, 29.31 מ\"ר - נמכר", // Нет цены
        "third-floor-8-b": "8-Б: דירת שני חדרים, 67.84 מ\"ר, <span dir='ltr'>€ 61 056</span> - זמין",
        "third-floor-9-b": "9-Б: דירת שני חדרים, 64.46 מ\"ר, <span dir='ltr'>€ 58 014</span> - זמין",
        "third-floor-10-b": "10-Б: דירת שני חדרים, 62.63 מ\"ר, <span dir='ltr'>€ 56 367</span> - זמין", // Проверил м"р
        "third-floor-11-b": "11-Б: סטודיו, 29.31 מ\"ר, <span dir='ltr'>€ 26 379</span> - זמין",
        "fourth-floor-12-a": "12-A: דירת שלושה חדרים, 75.16 מ\"ר, <span dir='ltr'>€ 67 644</span> - זמין",
        "fourth-floor-13-a": "13-A: דירת שלושה חדרים, 67.39 מ\"ר, <span dir='ltr'>€ 60 651</span> - זמין",
        "fourth-floor-14-a": "14-A: סטודיו, 48.28 מ\"ר - נמכר", // Нет цены
        "fourth-floor-15-a": "15-A: סטודיו, 53.05 מ\"ר, <span dir='ltr'>€ 47 745</span> - זמין",
        "fourth-floor-12-b": "12-Б: דירת שלושה חדרים, 75.16 מ\"ר - נמכר", // Проверил м"р, нет цены
        "fourth-floor-13-b": "13-Б: דירת שלושה חדרים, 67.39 מ\"ר, מחיר לפי בקשה - זמין", // Текст вместо цены
        "fourth-floor-14-b": "14-Б: סטודיו, 48.28 מ\"ר - נמכר", // Нет цены
        "fourth-floor-15-b": "15-Б: סטודיו, 53.05 מ\"ר, <span dir='ltr'>€ 45 093</span> - זמין",
        "attic-16-a": "16-A: סטודיו, 22.03 מ\"ר - נמכר", // Нет цены
        "attic-17-a": "17-A: דירת שני חדרים, 53.85 מ\"ר - נמכר", // Нет цены
        "attic-18-a": "18-A: דירת שני חדרים, 42.12 מ\"ר - נמכר", // Нет цены
        "attic-16-b": "16-Б: סטודיו, 22.03 מ\"ר - נמכר", // Нет цены
        "attic-17-b": "17-Б: דירת שני חדרים, 53.85 מ\"ר, <span dir='ltr'>€ 45 773</span> - זמין",
        "attic-18-b": "18-Б: דירת שני חדרים, 42.12 מ\"ר, <span dir='ltr'>€ 35 802</span> - זמין",
        // --- КОНЕЦ ИСПРАВЛЕННЫХ СТРОК ---
        "apartment-1-title": "דירת שני חדרים",
        "apartment-1-desc": "62.83 מ\"ר, מרפסת עם נוף להרים",
        "apartment-2-title": "סטודיו נעים",
        "apartment-2-desc": "29.31 מ\"ר, מושלם לזוג",
        "apartment-3-title": "דירת שני חדרים",
        "apartment-3-desc": "75.16 מ\"ר, מרווח ונוח",
        details: "פרטים נוספים"
    },
    ru: {
        // ... русский перевод ... (оставляем как есть)
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
        "basement-parking-info": "9 стоянок проданы, 9 стоянок в наличии, цена одной стоянки <span dir='ltr'>€ 15 000</span>", // Добавил span и сюда для единообразия
        "first-floor-1-a": "1-A: Двухкомнатная, 62.83 м², <span dir='ltr'>€ 56 547</span> - Доступна",
        "first-floor-2-a": "2-A: Двухкомнатная, 49.71 м², <span dir='ltr'>€ 44 739</span> - Доступна",
        "first-floor-3-a": "3-A: Двухкомнатная, 76.45 м², <span dir='ltr'>€ 68 805</span> - Доступна",
        "first-floor-1-b": "1-Б: Двухкомнатная, 62.83 м², <span dir='ltr'>€ 53 406</span> - Доступна",
        "first-floor-2-b": "2-Б: Двухкомнатная, 49.71 м² - Продана",
        "first-floor-3-b": "3-Б: Двухкомнатная, 76.45 м², <span dir='ltr'>€ 64 983</span> - Доступна",
        "second-floor-4-a": "4-A: Двухкомнатная, 67.84 м², <span dir='ltr'>€ 61 056</span> - Доступна",
        "second-floor-5-a": "5-A: Двухкомнатная, 64.46 м², <span dir='ltr'>€ 58 014</span> - Доступна",
        "second-floor-6-a": "6-A: Двухкомнатная, 62.63 м², <span dir='ltr'>€ 56 367</span> - Доступна",
        "second-floor-7-a": "7-A: Студия, 29.31 м², <span dir='ltr'>€ 26 379</span> - Доступна",
        "second-floor-4-b": "4-Б: Двухкомнатная, 67.84 м², <span dir='ltr'>€ 57 664</span> - Доступна",
        "second-floor-5-b": "5-Б: Двухкомнатная, 64.46 м² - Продана",
        "second-floor-6-b": "6-Б: Двухкомнатная, 62.63 м², <span dir='ltr'>€ 53 236</span> - Доступна",
        "second-floor-7-b": "7-Б: Студия, 29.31 м², <span dir='ltr'>€ 24 914</span> - Доступна",
        "third-floor-8-a": "8-A: Двухкомнатная, 67.84 м², <span dir='ltr'>€ 61 056</span> - Доступна",
        "third-floor-9-a": "9-A: Двухкомнатная, 64.46 м², <span dir='ltr'>€ 58 014</span> - Доступна",
        "third-floor-10-a": "10-A: Двухкомнатная, 62.63 м², <span dir='ltr'>€ 56 367</span> - Доступна",
        "third-floor-11-a": "11-A: Студия, 29.31 м² - Продана",
        "third-floor-8-b": "8-Б: Двухкомнатная, 67.84 м², <span dir='ltr'>€ 61 056</span> - Доступна",
        "third-floor-9-b": "9-Б: Двухкомнатная, 64.46 м², <span dir='ltr'>€ 58 014</span> - Доступна",
        "third-floor-10-b": "10-Б: Двухкомнатная, 62.63 м², <span dir='ltr'>€ 56 367</span> - Доступна",
        "third-floor-11-b": "11-Б: Студия, 29.31 м², <span dir='ltr'>€ 26 379</span> - Доступна",
        "fourth-floor-12-a": "12-A: Трёхкомнатная, 75.16 м², <span dir='ltr'>€ 67 644</span> - Доступна",
        "fourth-floor-13-a": "13-A: Трёхкомнатная, 67.39 м², <span dir='ltr'>€ 60 651</span> - Доступна",
        "fourth-floor-14-a": "14-A: Студия, 48.28 м² - Продана",
        "fourth-floor-15-a": "15-A: Студия, 53.05 м², <span dir='ltr'>€ 47 745</span> - Доступна",
        "fourth-floor-12-b": "12-Б: Трёхкомнатная, 75.16 м² - Продана",
        "fourth-floor-13-b": "13-Б: Трёхкомнатная, 67.39 м², Цена по запросу - Доступна", // Оставляем текст
        "fourth-floor-14-b": "14-Б: Студия, 48.28 м² - Продана",
        "fourth-floor-15-b": "15-Б: Студия, 53.05 м², <span dir='ltr'>€ 45 093</span> - Доступна",
        "attic-16-a": "16-A: Студия, 22.03 м² - Продана",
        "attic-17-a": "17-A: Двухкомнатная, 53.85 м² - Продана",
        "attic-18-a": "18-A: Двухкомнатная, 42.12 м² - Продана",
        "attic-16-b": "16-Б: Студия, 22.03 м² - Продана",
        "attic-17-b": "17-Б: Двухкомнатная, 53.85 м², <span dir='ltr'>€ 45 773</span> - Доступна",
        "attic-18-b": "18-Б: Двухкомнатная, 42.12 м², <span dir='ltr'>€ 35 802</span> - Доступна",
        "apartment-1-title": "Двухкомнатная квартира",
        "apartment-1-desc": "62.83 м², балкон с видом на горы",
        "apartment-2-title": "Уютная студия",
        "apartment-2-desc": "29.31 м², идеально для пары",
        "apartment-3-title": "Двухкомнатная квартира",
        "apartment-3-desc": "75.16 м², просторный и удобный",
        details: "Подробнее"
    },
    bg: {
        // ... болгарский перевод ... (оставляем как есть)
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
        "basement-note": "Нежилищна зона - паркинги (P1–P19)",
        "basement-parking-info": "9 паркоместа продадени, 9 паркоместа налични, цена на едно паркомясто <span dir='ltr'>€ 15 000</span>", // Добавил span и сюда
        "first-floor-1-a": "1-A: Двустаен, 62.83 м², <span dir='ltr'>€ 56 547</span> - Наличен",
        "first-floor-2-a": "2-A: Двустаен, 49.71 м², <span dir='ltr'>€ 44 739</span> - Наличен",
        "first-floor-3-a": "3-A: Двустаен, 76.45 м², <span dir='ltr'>€ 68 805</span> - Наличен",
        "first-floor-1-b": "1-Б: Двустаен, 62.83 м², <span dir='ltr'>€ 53 406</span> - Наличен",
        "first-floor-2-b": "2-Б: Двустаен, 49.71 м² - Продаден",
        "first-floor-3-b": "3-Б: Двустаен, 76.45 м², <span dir='ltr'>€ 64 983</span> - Наличен",
        "second-floor-4-a": "4-A: Двустаен, 67.84 м², <span dir='ltr'>€ 61 056</span> - Наличен",
        "second-floor-5-a": "5-A: Двустаен, 64.46 м², <span dir='ltr'>€ 58 014</span> - Наличен",
        "second-floor-6-a": "6-A: Двустаен, 62.63 м², <span dir='ltr'>€ 56 367</span> - Наличен",
        "second-floor-7-a": "7-A: Студио, 29.31 м², <span dir='ltr'>€ 26 379</span> - Наличен",
        "second-floor-4-b": "4-Б: Двустаен, 67.84 м², <span dir='ltr'>€ 57 664</span> - Наличен",
        "second-floor-5-b": "5-Б: Двустаен, 64.46 м² - Продаден",
        "second-floor-6-b": "6-Б: Двустаен, 62.63 м², <span dir='ltr'>€ 53 236</span> - Наличен",
        "second-floor-7-b": "7-Б: Студио, 29.31 м², <span dir='ltr'>€ 24 914</span> - Наличен",
        "third-floor-8-a": "8-A: Двустаен, 67.84 м², <span dir='ltr'>€ 61 056</span> - Наличен",
        "third-floor-9-a": "9-A: Двустаен, 64.46 м², <span dir='ltr'>€ 58 014</span> - Наличен",
        "third-floor-10-a": "10-A: Двустаен, 62.63 м², <span dir='ltr'>€ 56 367</span> - Наличен",
        "third-floor-11-a": "11-A: Студио, 29.31 м² - Продаден",
        "third-floor-8-b": "8-Б: Двустаен, 67.84 м², <span dir='ltr'>€ 61 056</span> - Наличен",
        "third-floor-9-b": "9-Б: Двустаен, 64.46 м², <span dir='ltr'>€ 58 014</span> - Наличен",
        "third-floor-10-b": "10-Б: Двустаен, 62.63 м², <span dir='ltr'>€ 56 367</span> - Наличен",
        "third-floor-11-b": "11-Б: Студио, 29.31 м², <span dir='ltr'>€ 26 379</span> - Наличен",
        "fourth-floor-12-a": "12-A: Тристаен, 75.16 м², <span dir='ltr'>€ 67 644</span> - Наличен", // Использовал Тристаен вместо Трёхкомнатная
        "fourth-floor-13-a": "13-A: Тристаен, 67.39 м², <span dir='ltr'>€ 60 651</span> - Наличен",
        "fourth-floor-14-a": "14-A: Студио, 48.28 м² - Продаден",
        "fourth-floor-15-a": "15-A: Студио, 53.05 м², <span dir='ltr'>€ 47 745</span> - Наличен",
        "fourth-floor-12-b": "12-Б: Тристаен, 75.16 м² - Продаден",
        "fourth-floor-13-b": "13-Б: Тристаен, 67.39 м², Цена при запитване - Наличен", // Текст вместо цены
        "fourth-floor-14-b": "14-Б: Студио, 48.28 м² - Продаден",
        "fourth-floor-15-b": "15-Б: Студио, 53.05 м², <span dir='ltr'>€ 45 093</span> - Наличен",
        "attic-16-a": "16-A: Студио, 22.03 м² - Продаден",
        "attic-17-a": "17-A: Двустаен, 53.85 м² - Продаден", // Заменил на Двустаен
        "attic-18-a": "18-A: Двустаен, 42.12 м² - Продаден", // Заменил на Двустаен
        "attic-16-b": "16-Б: Студио, 22.03 м² - Продаден",
        "attic-17-b": "17-Б: Двустаен, 53.85 м², <span dir='ltr'>€ 45 773</span> - Наличен", // Заменил на Двустаен
        "attic-18-b": "18-Б: Двустаен, 42.12 м², <span dir='ltr'>€ 35 802</span> - Наличен", // Заменил на Двустаен
        "apartment-1-title": "Двустаен апартамент", // Заменил на Двустаен
        "apartment-1-desc": "62.83 м², балкон с гледка към планината",
        "apartment-2-title": "Уютно студио",
        "apartment-2-desc": "29.31 м², идеално за двойка",
        "apartment-3-title": "Двустаен апартамент", // Заменил на Двустаен
        "apartment-3-desc": "75.16 м², просторен и удобен",
        details: "Повече информация"
    }
};

function changeLanguage() {
    const lang = document.getElementById("language").value;
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang] && translations[lang][key]) { // Проверка на существование ключа
             // --- ИЗМЕНЕНИЕ ЗДЕСЬ: textContent -> innerHTML ---
            element.innerHTML = translations[lang][key];
        }
    });

    // Установка направления для body в зависимости от языка
    if (lang === "he") {
        document.documentElement.setAttribute('lang', 'he'); // Устанавливаем язык для <html>
        document.documentElement.setAttribute('dir', 'rtl'); // Устанавливаем направление для <html>
        document.body.style.direction = "rtl";
        // document.body.style.textAlign = "right"; // Можно убрать, так как dir=rtl на <html> уже выравнивает
    } else {
        document.documentElement.setAttribute('lang', lang); // Устанавливаем язык для <html>
        document.documentElement.setAttribute('dir', 'ltr'); // Устанавливаем направление для <html>
        document.body.style.direction = "ltr";
       // document.body.style.textAlign = "left"; // Можно убрать
    }
}

function openSection(evt, sectionName) {
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });
    // Убираем класс active со всех ссылок навигации
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.classList.remove("active");
     });
    document.getElementById(sectionName).classList.add("active");
    // Добавляем класс active только к нажатой ссылке (если это ссылка из навигации)
    // Проверяем, существует ли evt.currentTarget перед добавлением класса
    if (evt && evt.currentTarget && evt.currentTarget.closest('.nav-links')) {
       evt.currentTarget.classList.add("active");
    }

    // Дополнительно: Установить активную ссылку при первой загрузке или если секция открыта не через меню
     const currentLink = document.querySelector(`.nav-links a[onclick*="${sectionName}"]`);
     if(currentLink) {
        currentLink.classList.add("active");
     }
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

// Устанавливаем активную секцию и язык при загрузке страницы
document.addEventListener('DOMContentLoaded', (event) => {
    changeLanguage(); // Применяем язык по умолчанию
    // Активируем первую секцию (home) и первую вкладку этажей при загрузке
     const homeLink = document.querySelector('.nav-links a[data-lang="home"]');
     if(homeLink) {
        openSection({currentTarget: homeLink}, 'home-section'); // Открываем домашнюю секцию
     }
     const firstFloorButton = document.querySelector('.floor-tab-button[data-lang="first-floor-tab"]');
     if (firstFloorButton) {
         openFloorTab({currentTarget: firstFloorButton}, 'first-floor-tab'); // Активируем первую вкладку этажей
     }
});
