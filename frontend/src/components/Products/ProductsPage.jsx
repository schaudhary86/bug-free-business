import React, { useContext, useEffect, useState } from "react";
import Mainnav from "../mainnav/Mainnav";
import Nav2 from "../sec nav/Nav2";
import bannerbg from "../../contents/images/bannerbg2.png";

import "./products.css";
import "../Home/Home.css";
import ProduCard from "./ProduCard";
import ProductContext from "../../context/Products/ProductsContext";
import AddProdForm from "./AddProdForm";
import EditProdForm from "./EditProdForm";
const ProductsPage = () => {
  const[ProdEditId,setProdEditId] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [EditFormVisible, setEditFormVisible] = useState(false);
  const Products = useContext(ProductContext);
  const { getAllprod, prodarr } = Products;
  useEffect(() => {
    console.log("get all products");
    getAllprod();
  }, []);
  const handleToggleForm = () => {
    setIsFormVisible(true);
  };
  return (
    <div className="maindivhome">
      <Mainnav />
      <div className="productpage">
        {isFormVisible && (
          <AddProdForm
            setVisible={setIsFormVisible}
          />
        )}
        {EditFormVisible && (
          <EditProdForm setVisible={setEditFormVisible} prodId={ProdEditId}/>
        )}
        <Nav2 />
        <div className="productbanner">
          <div className="bannerslogan">
            <h1>Launched New Product ??</h1>
            <h2>Add To Your List !!</h2>
            <button onClick={handleToggleForm} className="addprodbtn">
              Add Now
            </button>
          </div>
          <div className="bannerimg">
            <img src={bannerbg} alt="" srcset="" className="prodpageimg" />
          </div>
        </div>
        <div className="pordlisthead">
          <h1 className="allproducttext">All Products</h1>
        </div>
        <div className="productlistcont">
          {prodarr.map((prod) => {
            return (
              <ProduCard
                editnotvis={setEditFormVisible}
                setProdId={setProdEditId}
                prodname={prod.name}
                Stock={prod.Stock}
                price1 = {prod.SellingPrice}
                price2 = {prod.CostPrice}
                key={prod._id}
                ey={prod._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
