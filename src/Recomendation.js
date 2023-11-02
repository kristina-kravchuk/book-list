import { useState } from 'react';

import { dataTwo } from './dataTwo';


function Recomendation(){
    
const [recomendation, setRecomendation] =useState(0);
const{imageTwo}=dataTwo[recomendation];

    const previousRecomendation = () =>{
        setRecomendation((recomendation =>{
          recomendation--;
          if(recomendation < 0 ){
            return dataTwo.length -1;
          }
          return recomendation;
        }))
    
      }
      const nextRecomendation = () =>{
        setRecomendation((recomendation =>{
          recomendation++
          if(recomendation > dataTwo.length -1){
            recomendation =0;
          }
          return recomendation;
        } ))
      }


      return(
        <div>
        <div className='container'>
              <h2>Recomendations for you</h2>
            </div>
            <div className='buttonNext'>
              <img className='imageTwo' src={imageTwo} alt='book' width="300px"/>
            </div>
            <div className='buttonNext'>
            <button className='btnTwo' onClick={previousRecomendation}>Previous</button>
            <button className='btnTwo' onClick={nextRecomendation}>Next</button>
            </div>
            </div>
      )

}
export default Recomendation;