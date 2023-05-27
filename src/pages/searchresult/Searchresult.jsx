import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../utils/api";
import Moviecard from "../../components/Moviecard";
const Searchresult = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { input } = useParams();
  const [page, setPage] = useState(1);
  const fetchSearchData = async () => {
    // why i dont used useFetch because a hook cant be used inside a function of a Component in React.
    try {
      const response = await fetchData(
        `/search/multi?query=${input}&page=${page}`
      );
      setData(response);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchSearchData();
  }, [loading]);
  return (
    <div className="min-h-[100vh]">
    {loading? 
    <div className="lds-dual-ring w-full h-[80vh] flex justify-center items-center"></div>
    :
    (
      <>
      <h1 className="text-center text-white text-3xl mb-6">Search results for <span className="font-bold text-red-900">{input}</span></h1>
      <div className="w-full h-auto flex flex-wrap justify-center">
        {data?.results.map((item, index) => (
          <Moviecard
            key={index}
            name={item.title || item.name}
            posterpath={item.poster_path}
            rating={item.vote_average}
            id={item.id}
            showtype={item.media_type}
          />
        ))}
      </div>
      </>
    )
    }
    </div>
  );
};

export default Searchresult;
