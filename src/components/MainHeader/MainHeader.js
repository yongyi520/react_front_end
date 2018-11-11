import React from 'react';
import PropTypes from 'prop-types';
import './MainHeader.sass';

// import UikWidget from '../../components/Uik/UikWidget';
import { UikTopBar, UikTopBarSection, UikWidgetHeader } from '../../dist/lib';
import '../../dist/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { HeaderAvatar } from '../HeaderAvatar/HeaderAvatar'

const MainHeader = ({page, profile, data}) => (
    <UikTopBar id="MainHeader">
        <UikTopBarSection className="left main-header-left">
            SQUAD
        </UikTopBarSection>
        <UikWidgetHeader className="right main-header-right" rightEl={<HeaderAvatar/>}>
            { (page === "Dashboard") ? "Dashboard" : "" }
            { (page === "Companies") ? "Companies" : "" }
            
            { (page === "Companies") ? <div className="main-header-company-title">
                    <FontAwesomeIcon icon={faAngleRight} size="2x" className="right-arrow"/>
                    <span>{"Nexthink SA"}</span>
                    </div> 
                    : "" }
        </UikWidgetHeader>
    </UikTopBar>
)
 
MainHeader.propTypes = {
    page: PropTypes.string.isRequired,
    profile: PropTypes.object
}

export default MainHeader;