import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import enTranslation from '../../public/language/en/translation.json';
import uzTranslation from '../../public/language/uz/translation.json';
import frTranslation from '../../public/language/fr/translation.json';


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation,
            },
            uz: {
                translation: uzTranslation,
            },
            fr: {
                translation: frTranslation,
            },
        },
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;





