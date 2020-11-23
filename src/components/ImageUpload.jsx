import React,{useState} from 'react';
import { ResizeImage } from './ResizeImage.';

const ImageUpload = () => {

  const [state, setstate] = useState({})

  const handleImageChange = (e)=> {
    e.preventDefault();
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    
    reader.onloadend = () => {
      let img = new Image();
      img.src = reader.result;
      img.onload = function(){
        setstate({width: this.width, height: this.height});
      };
    };   
  }; 

  return (
    <div className="previewComponent">
      
      <h3>Validar tamaño de imagen</h3>
     
      <div className="container-validar">
        <input className="fileInput" type="file" accept="jpeg,.jpg" onChange={(e) => handleImageChange(e)}/>
        <ResizeImage dimensiones={state} />
      </div>
      
    </div>
  );
};
export default ImageUpload;
