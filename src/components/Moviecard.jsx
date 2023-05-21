import image from "../assets/images/no-poster.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Moviecard = ({ name, posterpath, rating, id, showtype }) => {
  const navigate = useNavigate();
  const { secure_base_url, size } = useSelector(
    (state) => state.homepageSlice.url
  );
  // go to movie description
  const goToMovieDesc = () => {
    navigate(`/${showtype}/${id}`);
  };
  return (
    <div
      className="w-[20%] min-w-[110px] h-auto p-2 m-2 flex flex-col cursor-pointer"
      onClick={goToMovieDesc}
    >
      <div className="w-full">
        {/* if posterpath invalid then will use image from assests */}
        <img
          src={posterpath ? secure_base_url + size + posterpath : image}
          className="cover"
        />
      </div>
      <h1 className="text-xsm xsm:text-sm font-bold  text-[#FFA559] text-left">
        {name}
      </h1>
      <p className="text-xsm font-medium text-[#E3CCAE]">{rating}</p>
    </div>
  );
};

export default Moviecard;
