import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMEssages from "./locales/en";

import JobsList from "./components/jobslist";

const userLocale = navigator.language || navigator.userLanguage; //Detectar el lenguaje del navegador
const messages = userLocale.startsWith('es') ? localeEsMessages : localeEnMEssages //Defnir que mensajes utilizar
const locale = userLocale.split('-')[0]


ReactDOM.render(
    <IntlProvider locale={locale} messages= {messages}>
        <JobsList/>
    </IntlProvider>, document.getElementById("root")
);