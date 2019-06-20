/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import React from 'react';
import {withTranslation} from 'react-i18next';

/**
 * @description
 * Footer component.
 *
 * Render the footer component.
 * Wrapped with React I18 Next for translations.
 *
 * @param {object} props Properties
 * @returns {*}
 * @constructor
 */
const FooterComponent = (props) => {
    const {t} = props;

    return (
        <footer className='footer'>
            <div className='spring spring--medium'>
                {/* Created by */}
                <div className='footer__created-by'>
                    {t('footer.createdBy')}
                </div>

                {/* Links */}
                <div className='footer__links'>
                    <ul>
                        <li>
                            <a href='https://github.com/rolandsze'
                               title={t('footer.gitHub')}
                               target='_blank'
                               rel='noopener noreferrer'>
                                {t('footer.gitHub')}
                            </a>
                        </li>

                        <li>
                            <a href='https://www.linkedin.com/in/roland-szecsenyi/'
                               title={t('footer.linkedIn')}
                               target='_blank'
                               rel='noopener noreferrer'>
                                {t('footer.linkedIn')}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default withTranslation()(FooterComponent);
