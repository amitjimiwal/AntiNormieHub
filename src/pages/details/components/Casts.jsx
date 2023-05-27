import pfp from "../../../assets/images/avatar.png";
import { useSelector } from "react-redux";
const Casts = ({ casts }) => {
  const { secure_base_url, size } = useSelector(
    (state) => state.homepageSlice.url
  );
  return (
    <div className="w-full my-5">
      <h1 className="text-center text-white font-bold text-2xl my-4">
        Top Casts
      </h1>
      <div className="flex flex-wrap my-6 justify-center items-center m-auto">
        {casts?.map((item, index) => (
          <div
            className="flex flex-col justify-center  p-4 items-center cursor-pointer"
            key={index}
          >
            <img
              src={
                item.profile_path
                  ? secure_base_url + size + item.profile_path
                  : pfp
              }
              className="rounded-full w-[150px] h-[150px]"
            />
            <h4 className="my-3 font-serif text-slate-400 text-xl mb-4">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Casts;
