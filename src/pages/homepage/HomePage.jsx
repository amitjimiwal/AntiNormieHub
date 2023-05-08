import Banner from "./sections/Banner"
import Trending from "./sections/Trending"

const HomePage = () => {
  return (
    <div className="w-full">
      <Banner/>
      <Trending name='trending'/>
    </div>
  )
}

export default HomePage