import React from "react";
import "./Home.css";
function Home(){
    return(
       <div>
        <div className="home">
            {/* ajustar imagen arriba y poca separacion OK*/}
                <div className="home-principal">
                <img className="img-Evento" alt="description" src={require("../../img/logo.PNG")}/>
                {/* centrar la forma en medio OK */}
                {/* font family : modern twenty OK*/}
                    <div className="home-text">
                        <h5>CÓMETE</h5>
                        <h5>EL MUNDO</h5>
                        <h5>Y</h5>
                        <h5>TÓMATE</h5>
                        <h5>LA VIDA</h5>
                        <h5>CON PASIÓN</h5>
                        </div>
                </div>
        </div>
       <div>
       <img className="img-Home" alt="description" src={require("../../img/local/place-1.JPG")}/>

       </div>
       </div>
        
    );
}
export default Home;