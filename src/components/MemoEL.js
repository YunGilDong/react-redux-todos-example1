import React from 'react';
import PropTypes from 'prop-types';

const MemoEL = ({text}) => (
    <p>
        {text}
    </p>
)

MemoEL.propTypes = {
    text: PropTypes.string.isRequired
}

export default MemoEL;