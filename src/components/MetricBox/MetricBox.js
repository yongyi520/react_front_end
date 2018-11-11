import React from 'react';
import PropTypes from 'prop-types';
import './MetricBox.sass';

const MetricBox = ({metric, score}) => (
    <div className="metric-box">
        <span className="main">{score}%</span>
        <span className="base">{metric}</span>
    </div>
)
 
MetricBox.propTypes = {
    metric: PropTypes.string.isRequired,
    score: PropTypes.number
}

export default MetricBox;