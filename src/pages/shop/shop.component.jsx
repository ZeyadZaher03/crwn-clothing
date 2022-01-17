import React from "react";  
import { Route } from "react-router-dom";

import CollectionsOverView from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

import "./shop.styles.scss"

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverView} />
    <Route path={`${match.path}/:colectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage; 