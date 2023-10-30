import { useState } from 'react';
import { data } from './data';
import { dataTwo } from './dataTwo';
import './App.css';

function App() {
  const  [books, setBooks] = useState(data);
  const [showText, setShowText]= useState(false);
  const [recomendation, setRecomendation] =useState(0);
const{imageTwo}=dataTwo[recomendation];
  console.log(dataTwo[recomendation])

  const removeBook = (id => {
    console.log(id)
    let newBooks = books.filter(books => books.id !== id);
    console.log(newBooks)
    setBooks(newBooks)
  })

  const showTextClick =(element)=>{
    element.showMore = !element.showMore
    setShowText(!showText)
  }
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

  return (
    <div>
      <div className='container'>
        <h1>My {books.length} books to read</h1>
      </div>
      {books.map((element =>{
        const {id, title, image, description, showMore} = element;

        return(<div key={id}>
          <div className='container'>
            <h2>{id}- {title}</h2>
          </div>
          <div className='container'>
            <img src={image} width="250px" alt='book'/>
          </div>
          <div className='container'>
            <p>{showMore ? description : description.substring(0, 140) + "..."}
            <button className='btn' onClick={() => showTextClick(element)}>{showMore ? "Show less" : "Show more"}</button>
            </p>
          </div>
          <div className='container'>
          <button onClick={() => removeBook(id)}>Remove book</button>
          </div>
        </div>)
      }))}
      <div className='container'>
        <button onClick={() => setBooks([])}>Remove all books</button>
      </div>
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
    </div>
  );
}

export default App;
