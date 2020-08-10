import React, { useState , useEffect} from "react";
import Menu from "./Menu";
import Cart from "./Cart";

function MenuCart() {
    const [menuData, setMenuData] = useState({
        "2342153": {
            productName: "Mouse",
            price: 199
          },
      
          "12364324": {
            productName: "Keyboard",
            price: 699
          },
      
          "7893424": {
            productName: "AMD CPU",
            price: 6999
          }
    });

    const [cartData, setCartData]= useState(data)
    const[cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        let total =0
        Object.keys(cartData).map((sku) =>{
            // let qty = cartData[sku]
            // let price = menuData[sku].price
            // total += qty*price
        })

        setCartTotal(total)
    },[cartData])

    const addToCart = sku =>{
        let newCart =  {...cartData};
        if(sku in cartData){
            newCart[sku]+= 1;
        }else{
            newCart[sku] = 1;
        }

        setCartData(newCart)
    }

    const reduceFromCart = sku =>{
        let newCart = {...cartData};

        if(sku in cartData){
            newCart[sku]-= 1;
            if(newCart[sku]<1){
                delete newCart[sku]
            }
        }

        setCartData(newCart)
    };

    return(
        <div id="menu-cart">
            <Menu menu = {menuData} addToCart={addToCart} cart ={cartData}  reduceFromCart ={reduceFromCart}/>
        </div>
    );
 }

 export default MenuCart; 
const data = [
    {
        bgColor: "",
        image: "/live/campaign/5f2256094e09ac2a7012e2be/15960857699715f2256094e09ac2a7012e2be_random.jpg",
        likeCount: 23,
        line1: "Like diamond between coal",
        line1_country: "India",
        line2: "Like coffee in cold weather",
        line2_country: "India",
        line3: "which is why we're forever",
        line3_country: "Hidden",
        title: "Old Friends",
        _source: "haikus",
        
     },
     {
        bgColor: "",
        image: "/live/campaign/5f2256094e09ac2a7012e2be/15960857699715f2256094e09ac2a7012e2be_random.jpg",
        likeCount: 23,
        line1: "Like diamond between coal",
        line1_country: "India",
        line2: "Like coffee in cold weather",
        line2_country: "India",
        line3: "which is why we're forever",
        line3_country: "Hidden",
        title: "Old Friends",
        _source: "haikus",
        
     }

 ]