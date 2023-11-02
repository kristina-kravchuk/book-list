import { useState } from 'react';

import { data } from './data';

function Books(){
    const  [books, setBooks] = useState(data);
  const [showText, setShowText]= useState(false);

  const removeBook = (id => {
    console.log(id)
    let newBooks = books.filter(books => books.id !== id);
    setBooks(newBooks)
  })

  const showTextClick =(element)=>{
    element.showMore = !element.showMore
    setShowText(!showText)
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
          </div>
  );
}

export default Books;

