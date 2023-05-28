import { useParams } from "react-router-dom";
import Banner from "../homepage/sections/Banner";
import fetchData from "../../utils/api";
import { useState, useEffect } from "react";
const Explore = () => {
  const { showtype } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchSearchData = async () => {
    // why i dont used useFetch because a hook cant be used inside a function of a Component in React.
    try {
      const response = await fetchData(`/discover/${showtype}`);
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
    <div>
      <Banner />
      {loading ? (
        <div className="lds-dual-ring w-full h-[80vh] flex justify-center items-center"></div>
      ) : (
        <div className="w-full min-h-[50vh] h-auto">
          <h1>{showtype}</h1>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Explore;
