import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
// import CollectionItem from './../../components/collection-item/collection-item.component';

class ShopPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            collections : SHOP_DATA

        };
    }

    render() {

        const { collections } = this.state;
    
        return <div className="shop-page">
            {
                collections.map(({id, ...otherCollectionProp}) => (
                    <PreviewCollection key={id} {...otherCollectionProp} />
                ))
            } 
            
        </div>

    }
}

export default ShopPage;

