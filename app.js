const translations = {

    ru: {
        lang: "Язык",
        services: "Услуги",
        stages: "Этапы строительства",
        advantages: "Преимущества",
        projects: "Проекты",
        contacts: "Контакты"
    },

    en: {
        lang: "Language",
        services: "Services",
        stages: "Construction Stages",
        advantages: "Advantages",
        projects: "Projects",
        contacts: "Contacts"
    },

    ro: {
        lang: "Limbă",
        services: "Servicii",
        stages: "Etapele construcției",
        advantages: "Avantaje",
        projects: "Proiecte",
        contacts: "Contacte"
    },

    de: {
        lang: "Sprache",
        services: "Dienstleistungen",
        stages: "Bauphasen",
        advantages: "Vorteile",
        projects: "Projekte",
        contacts: "Kontakte"
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
        el.innerText = translations[lang][key];
    });

    document.getElementById("langMenu").classList.add("hidden");

}