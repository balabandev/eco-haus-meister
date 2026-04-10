const translations = {

    ru: {
        lang: "Язык",
        services: "Услуги",
        stages: "Этапы строительства",
        advantages: "Преимущества",
        projects: "Проекты",
        contacts: "Контакты",
        question: "Есть вопросы?",
        contact: "Свяжитесь с нами",
        name: "Ваше имя",
        email: "Ваш email",
        phone: "Телефон",
        subject: "Тема",
        message: "Ваше сообщение",
        send: "Отправить"
    },

    en: {
        lang: "Language",
        services: "Services",
        stages: "Construction Stages",
        advantages: "Advantages",
        projects: "Projects",
        contacts: "Contacts",
        question: "Any questions?",
        contact: "Contact Us",
        name: "Your name",
        email: "Your email",
        phone: "Phone",
        subject: "Subject",
        message: "Your message",
        send: "Send"
    },

    ro: {
        lang: "Limbă",
        services: "Servicii",
        stages: "Etapele construcției",
        advantages: "Avantaje",
        projects: "Proiecte",
        contacts: "Contacte",
        question: "Aveți întrebări?",
        contact: "Contactați-ne",
        name: "Numele dvs.",
        email: "Emailul dvs.",
        phone: "Telefon",
        subject: "Subiect",
        message: "Mesajul dvs.",
        send: "Trimite"
    },

    de: {
        lang: "Sprache",
        services: "Dienstleistungen",
        stages: "Bauphasen",
        advantages: "Vorteile",
        projects: "Projekte",
        contacts: "Kontakte",
        question: "Haben Sie Fragen?",
        contact: "Kontaktieren Sie uns",
        name: "Ihr Name",
        email: "Ihre E-Mail",
        phone: "Telefon",
        subject: "Betreff",
        message: "Ihre Nachricht",
        send: "Senden"
    }

};

function toggleLang() {
    document.getElementById("langMenu").classList.toggle("hidden");
}

function setLang(lang) {

    document.getElementById("currentLang").innerText = translations[lang].lang;

    const elements = document.querySelectorAll("[data-key]");

    elements.forEach(el => {
        const key = el.getAttribute("data-key");

        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.placeholder = translations[lang][key];
        } else {
            el.innerText = translations[lang][key];
        }
    });

    document.getElementById("langMenu").classList.add("hidden");

    localStorage.setItem("lang", lang);
}