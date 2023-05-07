import React from "react"
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
const Works =()=>{
    return(
     <div className="Works">
        <div className="awesome">
<span>Work for All these</span>

<span>brand & client</span>
<span>
    i will work work 
    <br />
    i will work work 
    <br />
    i will work work  <br />
    i will work work  <br />
    i will work work 
</span>

          <button className="button s-button">hire me</button>
       

<div className="blur s-blurl" style={{background:"#ABF1FF94"}}></div>
</div>
<div className="w-right">

  <div className="w-mainCircle">
    <div className="w-secCircle">
      <img src={Upwork} alt="" />
    </div>
    <div className="w-secCircle">
      <img src={Fiverr} alt="" />
    </div>
    <div className="w-secCircle">
      <img src={Amazon} alt="" />
    </div>
    <div className="w-secCircle">
      <img src={Shopify} alt="" />
    </div>
    <div className="w-secCircle">
      <img src={Facebook} alt="" />
    </div>
  </div>

</div>
     </div>
    )
}
export default Works