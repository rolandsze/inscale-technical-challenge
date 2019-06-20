/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import React from 'react';
import {compose} from 'redux';
import i18n from 'i18next';
import {withTranslation} from 'react-i18next';
import {withRouter, Link} from 'react-router-dom';
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
 * Get navigation link class.
 *
 * Return active class if the route equals the currentLocation.
 * Returns an empty string if the route does not equal to the currentLocation.
 *
 * @param {string} route Route to compare
 * @param {string} currentLocation Current browser's location
 * @returns {string}
 */
const getNavigationLinkClass = (route, currentLocation) => {
    return (route === currentLocation) ? 'active' : '';
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
    const pathname = props.location.pathname;

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
                                <Link to={routesConfig.index}
                                      className={getNavigationLinkClass(routesConfig.index, pathname)}>
                                    {t('index')}
                                </Link>
                            </li>
                            <li>
                                <Link to={routesConfig.campaigns}
                                      className={getNavigationLinkClass(routesConfig.campaigns, pathname)}>
                                    {t('campaigns')}
                                </Link>
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

export default compose(
    withTranslation(),
    withRouter
)(HeaderComponent);
