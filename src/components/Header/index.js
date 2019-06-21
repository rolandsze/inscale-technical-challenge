/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import React from 'react';
import i18n from 'i18next';
import {withTranslation} from 'react-i18next';
import {Link, NavLink} from 'react-router-dom';
import {routesConfig} from 'config/routes';
import logo from 'svg/logo.svg';

/**
 * @description
 * Language switcher.
 *
 * Render the header's language switcher.
 * This function is called within the HeaderComponent.
 *
 * @param {function} t Translation
 * @returns {*}
 */
const renderLanguageSwitcher = (t) => {
    const currentLanguage = i18n.language;

    const languages = ['en', 'zh', 'ms'].map((language, index) => {
        return (
            <li onClick={() => i18n.changeLanguage(language)} key={index}>
                <span className={(currentLanguage === language) ? 'active' : ''}>
                    {t(`languageCodes.${language}`)}
                </span>
            </li>
        );
    });

    return (
        <div className="header__language-switcher">
            <ul>
                {languages}
            </ul>
        </div>
    );
};

/**
 * @description
 * Header component.
 *
 * Render the header component.
 * Wrapped with React I18 Next for translations and React Router.
 *
 * @param {object} props Properties
 * @returns {*}
 * @constructor
 */
const HeaderComponent = (props) => {
    const {t} = props;

    return (
        <header className='header'>
            {/* Spring */}
            <div className="spring spring--extra-large">
                {/* Wrapper */}
                <div className="header__wrapper">
                    {/* Logo */}
                    <div className='header__logo'>
                        <Link to={routesConfig.index} title={t('backToIndex')}>
                            <img src={logo} alt={t('backToIndex')}/>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className='header__navigation'>
                        <ul>
                            <li>
                                <NavLink exact to={routesConfig.index} activeClassName='active'>
                                    {t('index')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact to={routesConfig.campaigns} activeClassName='active'>
                                    {t('campaigns')}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* Language switcher */}
                    {renderLanguageSwitcher(t)}
                </div>
            </div>
        </header>
    );
};

export default withTranslation()(HeaderComponent);
