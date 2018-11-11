import React, { Component } from 'react';
import './ResultTable.sass';

import { UikWidgetTable } from '../../dist/lib';
import '../../dist/lib/styles.css';


export class ResultTable extends Component {
    render(){
        const sampleProp = [
            {
                name: "Company X",
                visibility: 48,
                growth: 28,
                managementQuality: 68,
                competition: 55,
                totalScore: 79,
                age: 5,
                lastRevenue: 50,
                country: "Isreal"
            },
            {
                name: "Company",
                visibility: 48,
                growth: 28,
                managementQuality: 68,
                competition: 55,
                totalScore: 79,
                age: 5,
                lastRevenue: 50,
                country: "Isreal"
            },
            {
                name: "Company",
                visibility: 48,
                growth: 28,
                managementQuality: 68,
                competition: 55,
                totalScore: 79,
                age: 72,
                lastRevenue: 50,
                country: "Isreal"
            },
            {
                name: "Company",
                visibility: 48,
                growth: 28,
                managementQuality: 68,
                competition: 55,
                totalScore: 79,
                age: 5,
                lastRevenue: 50,
                country: "Isreal"
            },
            {
                name: "Company",
                visibility: 48,
                growth: 28,
                managementQuality: 68,
                competition: 55,
                totalScore: 79,
                age: 50,
                lastRevenue: 50,
                country: "Isreal"
            },
            {
                name: "Company",
                visibility: 48,
                growth: 28,
                managementQuality: 68,
                competition: 55,
                totalScore: 79,
                age: 5,
                lastRevenue: 50,
                country: "Isreal"
            },
            {
                name: "Company",
                visibility: 48,
                growth: 28,
                managementQuality: 68,
                competition: 55,
                totalScore: 79,
                age: 5,
                lastRevenue: 50,
                country: "Isreal"
            },
            {
                name: "Company",
                visibility: 48,
                growth: 28,
                managementQuality: 68,
                competition: 55,
                totalScore: 79,
                age: 5,
                lastRevenue: 50,
                country: "Isreal"
            }
        ]

        return (
            <UikWidgetTable id="ResultTable">
                <thead>
                    <th>Name</th>
                    <th>Visibility</th>
                    <th>Growth</th>
                    <th>Man. Qual.</th>
                    <th>Competition</th>
                    <th>Total Score</th>
                </thead>
                <tbody>
                    { sampleProp.map( data => {
                        return (
                            <tr>
                                <td>
                                    <div className="company-name">{data.name}</div>
                                    <div className="company-info">
                                        <span>Age: <b>{data.age} years</b></span>
                                        <span>Last Revenue: <b>{data.lastRevenue}M$</b></span>
                                        <span>Country: <b>{data.country}</b></span>
                                    </div>
                                </td>
                                <td>
                                    <div>{data.visibility}%</div>
                                    <div></div>
                                </td>
                                <td>{data.growth}%</td>
                                <td>{data.managementQuality}%</td>
                                <td>{data.competition}%</td>
                                <td><b>{data.totalScore}%</b></td>
                            </tr>
                        )
                    })

                    }
                </tbody>
            </UikWidgetTable>
        )
    }
}
