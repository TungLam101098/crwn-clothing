import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = () => {
  const [shopdata, setShopdata] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {shopdata.map(({ id, ...ortherCollectionProps }) => (
        <CollectionPreview key={id} {...ortherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
