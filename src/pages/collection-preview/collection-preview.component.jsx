import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";

import './collection-preview.styles.scss'

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4 ).map( ({id, ...otherProps}) => (
                    <CollectionItem key={id} { ...otherProps} ></CollectionItem>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;