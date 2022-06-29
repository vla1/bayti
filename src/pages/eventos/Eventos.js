import React from "react";
import "./Eventos.css";
import ImageSliderEventos1 from "./ImageSlideEventos1";
import ImageSliderEventos2 from "./ImageSlideEventos2";

function Eventos(){
    return(
        <div className="event-container">
            <div className="evento">
{/*                     <img className="img-Evento" src={require("../../img/plate-4.JPG")}/>
 */}                    
                        <h3>Solteros</h3>
                        <h6>Viernes: 20 a 01:00</h6>
                   
                    </div>
                    <ImageSliderEventos1 />
                    <div className="evento">
{/*                     <img className="img-Evento" src={require("../../img/plate-4.JPG")}/>
 */}                    
                        <h3>Disfraz</h3>
                        <h6>Sabado: 20 a 01:00</h6>
                   
                    </div>
                    {/* imageSlider no automatico OK */}
                    <ImageSliderEventos2 />
                    {/* crear video con link youtube */}
        </div>
    );
}
export default Eventos;