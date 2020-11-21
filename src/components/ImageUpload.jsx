import React from 'react';
import Prueba from './Prueba';

const ImageUpload = () => {
  const handleImageChange = (e)=> {
    e.preventDefault();
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    
    let height;
    let width;
    reader.onloadend = () => {
      let img = new Image();
      img.src = reader.result;
      img.onload = function(){
        height =this.height;
        width = this.width;
        console.log(height, width);
      };
    };   
  }; 

  const handleSubmit = (e) =>{
    console.log(e);
  };
  
  return (
    <div className="previewComponent">
     <h3>Validar tamaño de imagen</h3>
     <form onSubmit={handleSubmit}>
          <input className="fileInput" type="file" accept="jpeg,.jpg" onChange={(e) => handleImageChange(e)}/>
          <button className="submitButton" type="submit" onClick={handleSubmit}>Upload Image</button>
     </form>
    </div>
  );
};
export default ImageUpload;
