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
        "studio-title": "סטודיו נעים",
        "studio-details": '35 מ"ר | 45,000 €',
        "view-apartment-title": "דירה עם נוף",
        "view-apartment-details": '60 מ"ר | 70,000 €',
        "lift-apartment-title": "דירה ליד המעלית",
        "lift-apartment-details": '85 מ"ר | 95,000 €',
        "details-button": "פרטים נוספים",
        "footer-copyright": "© 2025 כל הזכויות שמורות",
        telegram: "Telegram",
        instagram: "Instagram"
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
        "studio-title": "Уютная студия",
        "studio-details": "35 м² | 45 000 €",
        "view-apartment-title": "Апартаменты с видом",
        "view-apartment-details": "60 м² | 70 000 €",
        "lift-apartment-title": "Квартира у подъемника",
        "lift-apartment-details": "85 м² | 95 000 €",
        "details-button": "Подробнее",
        "footer-copyright": "© 2025 Все права защищены",
        telegram: "Telegram",
        instagram: "Instagram"
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
        "studio-title": "Уютно студио",
        "studio-details": "35 м² | 45 000 €",
        "view-apartment-title": "Апартамент с гледка",
        "view-apartment-details": "60 м² | 70 000 €",
        "lift-apartment-title": "Апартамент до лифта",
        "lift-apartment-details": "85 м² | 95 000 €",
        "details-button": "Повече",
        "footer-copyright": "© 2025 Всички права запазени",
        telegram: "Telegram",
        instagram: "Instagram"
    }
};

function changeLanguage() {
    const lang = document.getElementById("language").value;
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });

    // Меняем направление текста
    if (lang === "he") {
        document.body.style.direction = "rtl";
        document.body.style.textAlign = "right";
    } else {
        document.body.style.direction = "ltr";
        document.body.style.textAlign = "left";
    }
}

// Устанавливаем иврит по умолчанию
changeLanguage();
