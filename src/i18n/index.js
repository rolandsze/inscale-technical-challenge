/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from 'i18n/en';
import zh from 'i18n/zh';
import ms from 'i18n/ms';

/**
 * @description
 * I18n initialization
 */
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    ...en
                }
            },
            zh: {
                translation: {
                    ...zh
                }
            },
            ms: {
                translation: {
                    ...ms
                }
            }
        },
        lng: 'en',
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        react: {
            wait: true
        }
    });

export default i18n;
