import { useState, useEffect } from 'react'
import './App.css'
import Pratice from './components/Pratice'
// import Card from './components/Card'
// import Navbar from './components/Navbar'


function App() {
  const [data, setdata] = useState([])
  const [page,setpage] = useState(1)
   useEffect(() => {
    const api = async () => {
      const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e991a52de0f244bc9223214f734256ef')
      const obj = await res.json()
      setdata(obj.articles)
     
    }
    api()
  }, [])
  async function onPrevious() {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e991a52de0f244bc9223214f734256ef&page=${page+1}`)
    const obj = await res.json()
    setdata(obj.articles)
    setpage(page=>page-1)
    }
  async function onNext(){
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e991a52de0f244bc9223214f734256ef&page=${page-1}`)
    const obj = await res.json()
    setdata(obj.articles)
    setpage(page=>page+1)
    }

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
      <div className="flex justify-evenly w-screen">
       
       <button className="py-2 px-4 mb-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={onPrevious}>Previous</button>
       <button className="py-2 px-4 mb-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={onNext}>Next</button>
   </div>
   </div>

   
    </>

  )
}

export default App
