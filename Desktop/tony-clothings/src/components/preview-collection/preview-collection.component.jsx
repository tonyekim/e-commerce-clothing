import React from "react";
import "./preview-collection.component.style.scss";
import CollectionItem from "../collection-item/collection-item.component";

function PreviewCollection({ title, items }) {
    
    
    return (
      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items
            .filter((item, idx) => idx < 4)
             .map(({id, ...OtherItemsProps}) => (
               <CollectionItem key={id} { ...OtherItemsProps} />
            ))}
        </div>
      </div>
    );
}

export default PreviewCollection;