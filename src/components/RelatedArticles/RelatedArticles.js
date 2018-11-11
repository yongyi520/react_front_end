import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RelatedArticles.sass';

import { UikTopBar, UikWidgetContent, UikTopBarSection, UikWidgetHeader, UikContainerHorizontal } from '../../dist/lib';
import '../../dist/lib/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import RelatedArticle from './RelatedArticle'

const RelatedArticles = ({show, onHide, articles}) => (
  <Modal isOpen={show} toggle={onHide} className="related-articles">
    <ModalHeader toggle={onHide}>Related Articles (4)</ModalHeader>
    <ModalBody>
      <RelatedArticle article={{}}/>
      <RelatedArticle article={{}}/>
      <RelatedArticle article={{}}/>
      <RelatedArticle article={{}}/>
    </ModalBody>
    <ModalFooter className="footer">
      <span>Report missing article</span>
    </ModalFooter>
  </Modal>
)
 
RelatedArticles.propTypes = {
    onShow: PropTypes.string.isRequired,
    onHide: PropTypes.bool.isRequired,
    articles: PropTypes.object
}

export default RelatedArticles;