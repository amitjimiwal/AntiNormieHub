import image from "../../../assets/images/no-poster.png";
import { useSelector } from "react-redux";
const MovieInformation = ({data}) => {
  const {overview,poster_path,genres,original_title,vote_average,tagline,homepage,title}=data;
  const { secure_base_url, size } = useSelector(
    (state) => state.homepageSlice.url
  );
  return (
    <div className="w-[100%%] h-auto flex gap-10 justify-center pt-8 z-10 xsm:flex-col xd:flex-row">
      <div className="xd:w-[30%] rounded-xl mx-4">
        <img
          className="w-[100%] h-auto rounded-xl"
          src={poster_path ? secure_base_url + size + poster_path : image}
        />
      </div>
      <div className="flex flex-col xd:w-[60%] text-center">
        <h1 className="text-white font-bold text-2xl my-4">{original_title || title}</h1>
        <p className="font-serif text-slate-400 text-xl mb-4">{tagline}</p>
        <div className="genres mb-4 mt-3">
        {genres.map((item,index)=> 
          <span className="bg-red-600 text-white p-[5px] m-1 rounded-xl object-contain mb-4" key={index}>{item.name}</span>)}
        </div>
        <div className="my-5">
          <span className="text-white font-extrabold mr-4"> &#11088; {vote_average}</span>
          <a href={homepage} target="_blank" rel="noreferrer" className="text-white bg-yellow-400 p-2 font-bold rounded-xl text-center absolute z-40">Visit</a>
        </div>
        <div className="text-white mt-3" >
          <h1 className="font-bold text-2xl my-3 border-b-2 border-slate-500 pb-2">Overview</h1>
          <p className="font-serif text-slate-400 text-xl">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInformation;
