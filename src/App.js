import React from 'react';
import imgg from './imageInSrc.jpg';
import Video from "./vedio.mp4";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     
     <div className="aa">
 
 <h1 className='title '>Your name here</h1>  

     <br/>  

       <img src={imgg} /> 
<br/>
          <img src="/imageInPublic.jpg" />  


 <br/>
           
          <video src={Video} width="320" height="240" controls /> 



 
          </div>
</div>
  );
}

export default App;
