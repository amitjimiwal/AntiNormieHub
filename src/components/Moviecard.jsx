import image from '../assets/images/no-poster.png'
import { useSelector } from 'react-redux';
const Moviecard = ({name,posterpath,rating}) => {
      const { secure_base_url, size } = useSelector(
            (state) => state.homepageSlice.url
          );
  return (
    <div className="w-[20%] h-auto p-2 m-2 flex flex-col">
       <div className='w-full'>
            <img src={posterpath? secure_base_url+size+posterpath:image} className='cover'/>
       </div>
       <h1 className='text-xsm xsm:text-sm font-bold  text-[#FFA559] text-left'>{name}</h1>
       <p className='text-xsm font-medium text-[#E3CCAE]'>{rating}</p>
    </div>
  )
}

export default Moviecard