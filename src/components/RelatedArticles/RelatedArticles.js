import React from 'react';
import PropTypes from 'prop-types';
import './RelatedArticles.sass';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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