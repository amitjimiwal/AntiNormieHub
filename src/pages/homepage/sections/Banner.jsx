
const Banner = () => {
  return (
    <div className="w-[100%] text-center">
      <h1 className="text-red-600 text-4xl font-bold tracking-wide mb-2">AntiNormieHub</h1>
      <p className="text-white font-bold tracking-wide text-3xl mb-8">Millions of movies,tvshows for anti-normie commmunity.</p>
      <div className="border-2 border-solid border-white w-[50%] p-4 rounded-2xl outline-none text-center">
      <input type="text" placeholder="Search Movies,TvShows" className="outline-none p-1"/>
      <button className="bg-red-600 ">Search</button>
      </div>
    </div>
  )
}

export default Banner