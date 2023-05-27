import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import image from "../../assets/images/no-poster.png";
import MovieInformation from "./components/MovieInformation";
const Details = () => {
  const { secure_base_url, size } = useSelector(
    (state) => state.homepageSlice.url
  );
  const { showtype, id } = useParams();
  // fetching that movie details
  const { data, loading } = useFetch(`/${showtype}/${id}`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${showtype}/${id}/credits`
  );
  return (
    <div className="w-full h-[100vh] relative">
    {data && <MovieInformation poster={data.poster_path} />}
     {data &&<div className="absolute top-0 h-full w-full object-center opacity-10"> <img className="w-full h-full object-cover"
        src={
          data.backdrop_path ? secure_base_url+size+data.backdrop_path : image
        }
      /></div>}
      <div>
        <h1></h1>      </div>
    </div>
  );
};

export default Details;
