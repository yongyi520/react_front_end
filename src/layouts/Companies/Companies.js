import React, { Component } from 'react';
import './Companies.sass';

// import UikWidget from '../../components/Uik/UikWidget';
import { UikWidget, UikWidgetHeader, UikWidgetContent, UikNavSection, UikTabContainer, UikTabItem, 
    UikContainerHorizontal, UikContainerVertical, UikHeadlineDesc, UikButton, Uikon } from '../../dist/lib';
import '../../dist/lib/styles.css';

import MainHeader from '../../components/MainHeader/MainHeader'
import MetricBox from '../../components/MetricBox/MetricBox'
import DataSourceBlock from '../../components/DataSourceBlock/DataSourceBlock'
import RelatedArticles from '../../components/RelatedArticles/RelatedArticles'

class Companies extends Component {

    constructor(props){
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.state = {
          modal: false
        };
    }

    closeModal() {
        console.log("closing modal");
        this.setState({ modal: false });
      }
    
    showModal() {
        console.log("showing modal");
        this.setState({ modal: true });
    }
    
    render(){
        const metrics = {
            totalScore: 88,
            visibility: 64,
            growth: 92,
            managementQuality: 90,
            competition: 78
        }

        const relatedArticles = [

        ]

        return (
            <UikWidget id='Companies'>
                <RelatedArticles show={this.state.modal} onHide={this.closeModal}/>
                <MainHeader page="Companies"/>
                <UikContainerHorizontal className="content-wrapper">    
                    <UikNavSection className="left content-left">
                        
                    </UikNavSection>
                    <UikWidgetContent className="right content">
                        <UikContainerVertical>
                            <UikTabContainer>
                                <UikTabItem active className="tab-item">
                                    General
                                </UikTabItem >
                                <UikTabItem className="tab-item">
                                    Timeline
                                </UikTabItem>
                                <UikTabItem className="tab-item">
                                    Data Status
                                </UikTabItem>
                                <UikTabItem className="tab-item">
                                    Logs
                                </UikTabItem>
                            </UikTabContainer>
                            <UikContainerVertical id="General">
                                <UikContainerHorizontal className="metric-boxes">
                                    { Object.keys(metrics).map( (key) => (
                                        <MetricBox key={key} metric={key} score={metrics[key]}/>
                                    ))
                                    }
                                </UikContainerHorizontal>
                                <UikContainerHorizontal className="articles">
                                    <UikContainerVertical>
                                        article left
                                        <UikButton onClick={this.showModal}>
                                            Related Articles
                                        </UikButton>

                                    </UikContainerVertical>
                                    <UikContainerVertical>
                                        article right
                                    </UikContainerVertical>
                                </UikContainerHorizontal>
                                <UikContainerVertical className="data-sources">
                                    <UikHeadlineDesc>Data Sources</UikHeadlineDesc>
                                    <UikContainerHorizontal className="data-sources-row">
                                        <DataSourceBlock name={"Pitchbook"} active={true}/>
                                        <DataSourceBlock name={"Crunchbase"} active={false}/>
                                    </UikContainerHorizontal>
                                </UikContainerVertical>
                            </UikContainerVertical>
                        </UikContainerVertical>
                    </UikWidgetContent>
                </UikContainerHorizontal>
            </UikWidget>
        )
    }
}

export default Companies;