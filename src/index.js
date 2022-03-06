import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import App from "./App";
import "./index.css";

i18next.init({
    interpolation: { escapeValue: false },
    lng: localStorage.getItem("lang") ? localStorage.lang : "es",
    /*     lng: "es", */
    resources: {
        es: {
            global: global_es,
        },
        en: {
            global: global_en,
        },
    },
    fallbackLng: global_es,
});

ReactDOM.render(
    <BrowserRouter>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
