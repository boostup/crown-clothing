import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import CollectionItem from "../CollectionItem";

import Container from "./collection-preview-styles";

function CollectionPreview({ title, routeName, items }) {
  const history = useHistory();
  const { path } = useRouteMatch();
  return (
    <Container>
      <div className="nav-bar">
        <h1
          className="title"
          onClick={(e) => history.push(`${path}/${routeName}`)}
        >
          {title}<span className="nav-icon">&nbsp;&rsaquo;</span>
        </h1>

      </div>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </Container>
  );
}

export default CollectionPreview;
