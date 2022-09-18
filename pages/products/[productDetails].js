import CommonBanner from "Components/sustainability/CommonBanner";
import ProductDetailBanner from "public/Images/products/productDetails.jpg"
const ProductDetails = () => {
    return ( <>
    <CommonBanner headerBanner={ProductDetailBanner} title={"DETAILS"}/>
    <h1>Here is All product details</h1>
    </> );
}
 
export default ProductDetails;