import PropTypes from 'prop-types'
const Pratice = ({ title, image, content, url }) => {
  function onclick(){
    window.location.href=url
  }
  return (
    <div className='p-10'>
      <div className="  border rounded-lg shadow-lg overflow-hidden max-w-sm bg-slate-300">
        <img src={image} alt="" className=' w-full' />

        <span className='line-clamp-2 font-bold  ml-1 '>{title}</span>
        <span className='block text-sm p-2 text-justify'>{content}</span>
        <div className=' rounded-full bg-slate-100 pl-2 text-center hover:bg-slate-500'>
         <button className='hover:text-white 'onClick={onclick}>Click</button>
        </div>
      </div>
    </div>

  )
}
Pratice.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
  url: PropTypes.string
}
export default Pratice;
