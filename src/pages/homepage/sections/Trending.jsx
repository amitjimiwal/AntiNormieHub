import Moviecard from "../../../components/Moviecard";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";

const Trending = ({name}) => {
  const [selectedTab, setSelectedTab] = useState("day");
  const { data, loading } = useFetch(`/${name}/movie/${selectedTab}`);
  return (
    <div className="w-full m-auto py-5 bg-black text-white min-h-[500px] overflow-x-hidden">
      <div className="w-full flex h-10 mx-2 items-center">
        <div className="">{name.toUpperCase()}</div>
        <div className="ml-auto mr-6">
          {/* you can make seperate button component for this*/}
          <button
            className={`text-black font-bold py-2 px-4 transition-property:background-color focus:bg-white-500 rounded-s-xl duration-100 ${
              selectedTab === "day" ? "bg-blue-500" : "bg-white"
            }`}
            onClick={() => {
              setSelectedTab("day");
            }}
          >
            Day
          </button>
          <button
            className={`text-black font-bold py-2 px-4 transition-property:background-color focus:bg-white-500 duration-100 rounded-e-xl ${
              selectedTab === "day" ? "bg-white" : "bg-blue-500"
            }`}
            onClick={() => {
              setSelectedTab("week");
            }}
          >
            Week
          </button>
        </div>
      </div>
      {loading ? <div className="h-[500px] bg-black">Loading</div>: <div className="flex flex-wrap justify-center mt-2">
        {data?.results.map((item,index) => (
          <Moviecard
            key={index}
            name={item.title || item.name}
            posterpath={item.poster_path}
            rating={item.vote_average}
            id={item.id}
            showtype={item.media_type}
          />
        ))}
      </div>}
    </div>
  );
};

export default Trending;
