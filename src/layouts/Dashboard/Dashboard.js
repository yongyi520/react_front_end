import React, { Component } from 'react';
import './Dashboard.sass';

import { connect } from 'react-redux';
import { fetchAllCompanies } from '../../actions'

import { UikWidget, UikWidgetContent, UikNavSection, UikTopBar, UikTopBarSection, UikContainerHorizontal, UikContainerVertical,
    UikButton, UikInput } from '../../dist/lib';
import '../../dist/lib/styles.css';

import MainHeader from '../../components/MainHeader/MainHeader'
import { ResultInput } from '../../components/ResultInput/ResultInput'
import { ResultTable } from '../../components/ResultTable/ResultTable'
class Dashboard extends Component {

    componentDidMount(){
        this.props.fetchAllCompanies();
    }

    render(){
        console.log("dashboard companies prop", this.props.companies);
        return (
            <UikWidget id='Dashboard' className="wrapper">
                <MainHeader page="Dashboard"/>

                <UikContainerHorizontal className="content-wrapper">
                    <UikNavSection className="left content-left">
                        
                    </UikNavSection>
                    <UikWidgetContent className="right content">
                        <UikContainerVertical className="content-input-wrapper">
                            <ResultInput/>
                            <ResultInput/>
                        </UikContainerVertical>
                        <UikContainerVertical className="content-result">
                            <UikTopBar className="content-result-header">
                                <UikTopBarSection className="table-header-left">
                                    Companies ranking results (891)
                                </UikTopBarSection>
                                <UikTopBarSection className="table-header-right">
                                    <div className="table-header-input">
                                        <UikInput placeholder="Filter on company name"/>
                                    </div>
                                    <UikButton primary className="table-header-button">
                                        Export
                                    </UikButton>
                                </UikTopBarSection>
                            </UikTopBar>
                            <ResultTable/>
                        </UikContainerVertical>
                        
                    </UikWidgetContent>
                </UikContainerHorizontal>
            </UikWidget>
        )
    }
}

const mapStateToProps = state => {
    return {
        companies: state.companies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllCompanies: () => {
            dispatch(fetchAllCompanies);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);