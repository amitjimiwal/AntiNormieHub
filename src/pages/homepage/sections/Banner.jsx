import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
const Banner = () => {
  const { secure_base_url, size } = useSelector(
    (state) => state.homepageSlice.url
  );
  const navigate = useNavigate();
  const [backgroundImg, setBackgroundImg] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const { data} =useFetch("/movie/upcoming");
  const handlebackgroundImage = () => {
    try{
      // get a random number to select random images for background
    const randomNumber = Math.floor(
      Math.random() * (data?.results.length - 0 + 1) + 0
    );
    const randomMovieBackground = data?.results[randomNumber].backdrop_path;
    // console.log(secure_base_url+size+randomMovieBackground);
    setBackgroundImg(secure_base_url + size + randomMovieBackground);
    }catch(error){
      console.log(error);
    }
  };
  useEffect(() => {
    handlebackgroundImage();
  }, [data]);
  // handle searchbutton
  const handleSearch = () => {
    if (searchInput) {
      navigate(`/search/${searchInput}`);
    } else {
      alert("Search something");
      return;
    }
  };
  // handle the input getting from user.
  const handleSearchQuery = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className=" banner-section w-full h-[270px] rs:h=[700px] relative xsm:text-xl  bg-black ">
      {backgroundImg && (
        <div className="absolute top-0 z-[10000] w-full text-center mt-2">
          <h1 className="text-red-600 xd:text-4xl font-bold tracking-wide mb-2 xsm:text-2xl">
            AntiNormieHub
          </h1>
          <p className="text-white font-bold tracking-wide xd:text-3xl mb-8 xsm:text-1xl">
            Millions of movies,tvshows for anti-normie commmunity.
          </p>
          <div className="border-2 border-solid border-white w-[80%] rounded-2xl outline-none   object-contain relative m-auto overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-black p-2 bg-opacity-0 placeholder:text-slate-400 text-white placeholder:text-xl w-[80%]"
              onChange={handleSearchQuery}
              value={searchInput}
            />
            <button
              className=" w-[18%] text-red-400 object-contain xsm:text-[1rem] p-1 h-[46px]"
              onClick={handleSearch}
            >
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      )}

      {backgroundImg && (
        <div className="absolute top-0 h-full w-full object-center opacity-10">
          <img src={backgroundImg} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
};

export default Banner;
