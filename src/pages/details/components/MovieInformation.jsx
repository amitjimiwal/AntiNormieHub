import image from "../../../assets/images/no-poster.png";
import { useSelector } from "react-redux";
const MovieInformation = ({poster}) => {
  const { secure_base_url, size } = useSelector(
      (state) => state.homepageSlice.url
  );
  return (
      <div className="w-[50%] h-auto flex">
      <div>
      <img className="w-[20%] h-auto"
        src={
          poster ? secure_base_url+size+poster : image
        }
      />
      </div>
      <div>
        {/* all the desc */}
      </div>
    </div>
  )
}

export default MovieInformation