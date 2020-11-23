import React ,{useState} from 'react'

export const ResizeImage = ({dimensiones}) => {
     const [estOriginal, setestOriginal] = useState(false);
     const [redimension, setRedimension] = useState({});
     const {width, height} = dimensiones;
     const resize = (width,height)=>{
          let orientacion;
          let shortSideMax =796; 
          let longSideMax = 1123;
          let wRatio;
          let hRatio;
          let resizeRatio;
          let newHeight;
          let newWidth;


          if (width >= height){
               orientacion ="Horizontal";
               if (width <= longSideMax && height <= shortSideMax)
                    return {width: width, heigth: height, orientacion: orientacion} ;

               wRatio = longSideMax / width;
               hRatio = shortSideMax / height;
               if(width === height)
                    orientacion="Vertical";
               else
                    orientacion="Horizontal"
          }

          else{
               orientacion = "Vertical";
               if (height <= longSideMax && width <= shortSideMax)
                    return {width: width, heigth: height, orientacion: orientacion} 
            
               wRatio = shortSideMax / width; 
               hRatio = longSideMax / height; 
               orientacion ="Vertical";
          }

          resizeRatio = Math.min(wRatio, hRatio);
          newHeight = Math.round(height * resizeRatio);
          newWidth = Math.round(width * resizeRatio);
          return {width: newWidth, heigth:  newHeight, orientacion: orientacion};
     }   

     const calcResize = () =>{      
          const objetoResize = resize(width,height);
          setRedimension(objetoResize);
          setestOriginal(true);
     }

     return (
          <div>
               <button className="boton-validar" onClick = {calcResize}>Validar Imagen</button> 
               {
                    estOriginal ? (
                         <>  
                              <p>Tamaño de la imagen Original</p>
                              <p>Width: {width}</p>
                              <p>Heigth: {height}</p>
                              <p>Tamaño de la imagen Modificada</p>
                              <p>Width: {redimension.width}</p>
                              <p>Heigth: {redimension.heigth}</p>
                              <p>Orientacion Hoja A4: {redimension.orientacion}</p>
                         </>
                    ): null
                    
               }

          </div>
     )
}
