import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MetricBox.sass';

import { UikTopBar, UikWidgetContent, UikTopBarSection, UikWidgetHeader, UikContainerHorizontal } from '../../dist/lib';
import '../../dist/lib/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

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