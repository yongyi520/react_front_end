import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DataSourceBlock.sass';

import { UikTopBar, UikWidgetContent, UikTopBarSection, UikWidgetHeader, UikContainerHorizontal } from '../../dist/lib';
import '../../dist/lib/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const DataSourceBlock = ({name, active}) => (
    <div className="data-source-block">
        <span>{name}</span>
        <FontAwesomeIcon icon={faCircle} size="2x" className={active? "active":"inactive"} />
    </div>
)
 
DataSourceBlock.propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool
}

export default DataSourceBlock;