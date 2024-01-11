import { useState } from 'react'
import './App.css'

function App() {
  const [person, setPerson] = useState({

    fullName: "Kobbie Mainoo",
    bio:  "He is from England. He plays as a Midfielder for real manchecster united.",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xeHg9mzWucmluzN0Tj9FkPqh2DLirLEJWeoU1eye83DqPuflaMDWG3cnm3fMifYNxus&usqp=CAU",
    profession: "Footballer"
  
  });
  const [shows, setShows] = useState(0)

  return (
    <>
      <div>
          {shows
          ? (<h1>Welcome here</h1>)
          :(
            <div>
                <img className=" img" src={person.imgSrc} alt={person.fullName} />
                <h4>{person.fullName}</h4>
                <p>{person.bio}</p>
            </div> 
          )
        }        
        <div>
            <button className='toggle' onClick={() => setShows(!shows)}>Toggle Me</button>
        </div>
        </div>
    </>
  )
}

export default App
