import { useState } from 'react'
import './App.css'
import Pratice from './components/Pratice'
// import Card from './components/Card'
// import Navbar from './components/Navbar'
import Data from './Data.json'

function App() {
  const [data, setdata] = useState(Data.articles)

  
     return (
    <>
   {/* <Navbar/>
   <Card/> */}
   <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden' >
   {
    
     data.map((element,index)=>{
        return(
        <Pratice title= {element.title} image ={element.urlToImage} content={element.content} key={index} url={element.url}/>
        );

      })
     }
 
   </div>

   
    </>

  )
}

export default App
