import useFetch from "../../hooks/useFetch"
import Banner from "./sections/Banner"

const HomePage = () => {
  const {data}=useFetch('/movie/popular')
  // console.log(data);
  return (
    <div>
      <Banner/>
    </div>
  )
}

export default HomePage