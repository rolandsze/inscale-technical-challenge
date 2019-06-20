/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description
 * Message component.
 *
 * Display a simple text message.
 * The type can be one of: info, success, warning, error.
 * The style of the message change according to the type.
 *
 * @param {object }props Properties
 * @returns {*}
 * @constructor
 */
const MessageComponent = (props) => {
    const text = {__html: props.text};

    // The reason for using dangerouslySetInnerHTML is to pass in formatted text.
    return <div className={`message-component message-component--${props.type}`} dangerouslySetInnerHTML={text}/>;
};

/**
 * Typechecking
 */
MessageComponent.propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
    text: PropTypes.string.isRequired
};

export default MessageComponent;
