import React, { Component } from 'react';
import './MainHeader.sass';

// import UikWidget from '../../components/Uik/UikWidget';
import { UikTopBar, UikTopBarSection, UikWidgetHeader } from '../../dist/lib';
import '../../dist/lib/styles.css';

import { HeaderAvatar } from '../HeaderAvatar/HeaderAvatar'

export class MainHeader extends Component {
    render(){
        return (
            <div id="MainHeader">
                <UikTopBar className="top-bar">
                    <UikTopBarSection className="left">
                        SQUAD
                    </UikTopBarSection>
                    <UikWidgetHeader className="right" rightEl={<HeaderAvatar/>}>
                        Dashboard
                    </UikWidgetHeader>
                </UikTopBar>
            </div>
        )
    }
}
