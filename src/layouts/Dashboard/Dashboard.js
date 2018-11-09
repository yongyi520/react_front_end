import React, { Component } from 'react';
import './Dashboard.sass';

// import UikWidget from '../../components/Uik/UikWidget';
import { UikWidget, UikWidgetHeader, UikWidgetContent, UikNavSection, UikWidgetTable, UikTopBar, UikTopBarSection, UikContainerHorizontal, UikContainerVertical,
    UikButton, UikInput } from '../../dist/lib';
import '../../dist/lib/styles.css';

import Slider from 'react-rangeslider'

import { MainHeader } from '../../components/MainHeader/MainHeader'
import { ResultInput } from '../../components/ResultInput/ResultInput'
import { ResultTable } from '../../components/ResultTable/ResultTable'
class Dashboard extends Component {



    render(){
        return (
            <div id="dashboard">
                <UikWidget className="wrapper">
                    <MainHeader/>
                    <div className="content-wrapper">
                        <UikContainerHorizontal>
                            <UikNavSection className="left content-left">
                                
                            </UikNavSection>
                            <UikWidgetContent className="right content">
                                <UikContainerVertical className="content-input-wrapper">
                                    <ResultInput/>
                                    <ResultInput/>
                                    <ResultInput/>
                                </UikContainerVertical>
                                <UikContainerVertical className="content-result">
                                    <UikTopBar className="content-result-header">
                                        <UikTopBarSection>
                                            Companies ranking results
                                        </UikTopBarSection>
                                        <UikTopBarSection>
                                            <div className="input">
                                                <UikInput />
                                            </div>
                                            <UikButton>
                                                Export
                                            </UikButton>
                                        </UikTopBarSection>
                                    </UikTopBar>
                                    <ResultTable/>
                                </UikContainerVertical>
                                
                            </UikWidgetContent>
                        </UikContainerHorizontal>
                    </div>
                </UikWidget>
            </div>
        )
    }
}

export default Dashboard;