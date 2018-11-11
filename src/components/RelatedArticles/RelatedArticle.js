import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RelatedArticle.sass';

import { UikTopBar, UikWidgetContent, UikTopBarSection, UikWidgetHeader, UikContainerHorizontal } from '../../dist/lib';
import '../../dist/lib/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const RelatedArticle = ({article}) => (
  <div className="related-article">
    <div className="date">
      <span className="day">11</span>
      <span className="month">Oct</span>
      <span className="year">2017</span>
    </div>
    <div className="article">
        <div className="header">
          <div className="rating">74%</div>
          <div className="title">Nexthink ajoute des capacités de remédiation à son logiciel d'analyse des terminaux</div>
        </div>
        <div className="source">
          <span>Source ICT Journal - 7 months ago</span>
        </div>
        <div className="preview">
          <span>
            Avec Act, Nexthink enrichit sa suite logicielle d'outils permettant aux équipes support et aux utilisateurs de résoudre les problémes identificiés sur les ordinateurs.
          </span>
          <a >
            Read more
          </a>
        </div>
        <div className="footer">
          <a>Report as non relevant</a>
          <a>Report invalid score</a>
          <a className="explain-data">Explain data</a>
        </div>
    </div>

  </div>
)
 
RelatedArticle.propTypes = {
    article: PropTypes.object.isRequired
}

export default RelatedArticle;