import React from 'react';
import PropTypes from 'prop-types';
import './RelatedArticle.sass';

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
          <button >
            Read more
          </button>
        </div>
        <div className="footer">
          <button>Report as non relevant</button>
          <button>Report invalid score</button>
          <button className="explain-data">Explain data</button>
        </div>
    </div>

  </div>
)
 
RelatedArticle.propTypes = {
    article: PropTypes.object.isRequired
}

export default RelatedArticle;