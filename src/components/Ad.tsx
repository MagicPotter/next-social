import Image from 'next/image'

const Ad = ({ size } : { size: "sm" | "md" | "lg"}) => {
  return (
      <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
          {/* TOP */ }
          <div className="flex items-center justify-between text-gray-500 font-medium">
              <span>Sponsored Ads</span>
              <Image src={"/more.png"} alt="More" width={ 16 } height={ 16 } />
          </div>
          {/* BOTTOM */ }
          <div className={ `flex flex-col mt-4 ${ size === "sm" ? "gap-2" : "gap-4" } text-gray-600` }>
              <div className={ `relative w-full ${ size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48" }` }>
                  <Image src={"https://images.pexels.com/photos/2290786/pexels-photo-2290786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Image" fill className="rounded-lg object-cover" />
              </div>
              <div className="flex items-center gap-4">
                  <Image src={"https://images.pexels.com/photos/2290786/pexels-photo-2290786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Image" width={ 24 } height={ 24 } className="rounded-full w-6 h-6 object-cover" />
                    <span className="text-blue-500 font-medium">BigChef Lounge</span>
              </div>
              <p className={ size === "sm" ? "text-xs" : "text-sm" }>
                  {size === "sm" ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, asperiores." : size === "md" ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga minima corrupti maxime optio omnis veritatis id est maiores quae?" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero voluptatum, tempore optio aliquid repellat atque esse, aspernatur fuga, minus doloribus sapiente omnis labore laboriosam rerum earum obcaecati soluta! Dolorem, harum!"}
              </p>
              <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Mehr erfahren</button>
          </div>
    </div>
  )
}

export default Ad