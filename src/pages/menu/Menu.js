import React from "react";
import "./Menu.css";
function Menu(){
    return(
        <div className="carta-content">
            <img className="carta" alt="description of image" src={require("../../img/menu/menu-1.JPG")}/>
            <img className="carta" alt="description of image" src={require("../../img/menu/menu-2.JPG")}/>
            <img className="carta" alt="description of image" src={require("../../img/menu/menu-2.2.JPG")}/>
            <img className="carta" alt="description of image" src={require("../../img/menu/menu-3.JPG")}/>
        </div>
    );
}
export default Menu;