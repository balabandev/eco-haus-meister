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
        send: "Отправить",
         servicesTitle: "Наши услуги",
        servicesDesc: "Мы предоставляем комплексные услуги в сфере строительства.",
        service1: "Проектирование",
        service2: "Инжиниринг",
        service3: "Строительство",
        service1Desc: "Мы создаем современные и эффективные проекты домов.",
        learnMore: "Подробнее",
        service2Desc: "Комплексные инженерные решения.",
        service3Desc: "Полный цикл строительства домов."
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
        send: "Send",
        servicesTitle: "Our Services",
        servicesDesc: "We provide comprehensive construction services.",
        service1: "Design",
        service2: "Engineering",
        service3: "Construction",
        service1Desc: "We create modern and efficient house designs.",
        learnMore: "Learn more",
        service2Desc: "Engineering solutions.",
        service3Desc: "Full construction cycle."
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
        send: "Trimite",
        servicesTitle: "Serviciile noastre",
        servicesDesc: "Oferim servicii complete în domeniul construcțiilor.",
        service1: "Proiectare",
        service2: "Inginerie",
        service3: "Construcție",
        service1Desc: "Creăm proiecte moderne și eficiente.",
        learnMore: "Detalii",
        service2Desc: "Soluții inginerești complete.",
        service3Desc: "Ciclu complet de construcție."
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
        send: "Senden",
        servicesTitle: "Unsere Dienstleistungen",
        servicesDesc: "Wir bieten umfassende Bauleistungen an.",
        service1: "Planung",
        service2: "Ingenieurwesen",
        service3: "Bau",
        service1Desc: "Wir erstellen moderne und effiziente Hausprojekte.",
        learnMore: "Mehr erfahren",
        service2Desc: "Ingenieurlösungen.",
        service3Desc: "Vollständiger Bauzyklus."
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

        if (translations[lang][key]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.placeholder = translations[lang][key];
        } else {
            el.innerText = translations[lang][key];
        }
    }
    });

    document.getElementById("langMenu").classList.add("hidden");

    localStorage.setItem("lang", lang);
}

function openModal(id) {
    document.getElementById(id).classList.remove("hidden");
    document.getElementById(id).classList.add("flex");
}

function closeModal(id) {
    document.getElementById(id).classList.add("hidden");
}