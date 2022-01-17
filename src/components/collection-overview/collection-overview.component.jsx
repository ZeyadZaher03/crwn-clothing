import React from "react"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionForPreview } from "../../redux/shop/shop.selector";

import PreviewCollection from "../preview-collection/preview-collection.component";

import "./collection-overview.styles.scss";

const CollectionsOverView = ({ collections }) => (
  <div className="collections-overview">
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverView);