import useFetch from "../../hooks/useFetch"
import Banner from "./sections/Banner"
import Section from "./sections/Trending"

const HomePage = () => {
  return (
    <div className="w-full">
      <Banner/>
      <Section name='trending'/>
    </div>
  )
}

export default HomePage