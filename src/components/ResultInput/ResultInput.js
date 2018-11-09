import React, { Component } from 'react';
import './ResultInput.sass';

import { UikWidget, UikTopBar, UikTopBarSection, UikWidgetContent, UikContainerVertical } from '../../dist/lib';
import '../../dist/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCaretDown } from '@fortawesome/free-solid-svg-icons'

export class ResultInput extends Component {
    render(){
        return (
            <UikWidget className="content-input">
                <UikTopBar className="content-input-header">
                    <UikTopBarSection>
                        Company Visibility
                    </UikTopBarSection>
                    <UikTopBarSection>
                            <div><FontAwesomeIcon icon={faCaretDown} size="lg" /></div>
                    </UikTopBarSection>    
                </UikTopBar>
                <UikWidgetContent>
                    <UikContainerVertical>
                        Social Attention
                        <input type="range" id="number-articles" min="-5" max="5" defaultValue="0" step="0.1"
                            />
                    </UikContainerVertical>
                </UikWidgetContent>
                <UikWidgetContent>
                    <UikContainerVertical>
                        Number of Articles
                        <input type="range" id="number-articles" min="-5" max="5" defaultValue="0" step="0.1"
                            />
                    </UikContainerVertical>
                </UikWidgetContent>
                <UikWidgetContent>
                    <UikContainerVertical>
                        Partnerships Signed
                        <input type="range" id="partnerships-signed" min="-5" max="5" defaultValue="0" step="0.1"
                            />
                    </UikContainerVertical>
                </UikWidgetContent>
            </UikWidget>
        )
    }
}
