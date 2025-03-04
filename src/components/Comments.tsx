import Image from 'next/image'

const Comments = () => {
  return (
      <div className=''>
          {/* Schreiben */ }
          <div className="flex items-center gap-4">
                <Image src={"https://images.pexels.com/photos/30981944/pexels-photo-30981944/free-photo-of-charmante-strassenszene-in-guangzhou-china.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Avatar" className="w-7 h-7 rounded-full" width={28} height={28}/>
                <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                  <input type='text' placeholder='Schreib ein Kommentar' className='bg-transparent outline-none flex-1' />
                  <Image src={"/emoji.png"} alt='Emoji' width={16} height={16} className='cursor-pointer' />
                </div>
          </div>
          {/* Kommentare */ }
          <div className="flex gap-4 justify-between mt-6">
              {/* AVATAR */ }
              <Image src={"https://images.pexels.com/photos/30981944/pexels-photo-30981944/free-photo-of-charmante-strassenszene-in-guangzhou-china.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Avatar" className="w-9 h-9 rounded-full" width={36} height={36}/>
              {/* Content */ }
              <div className="flex flex-col gap-2 flex-1">
                    <span className='font-medium'>MagicPotter</span>
                  <p className='text-sm text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum dolor, nulla quisquam excepturi dicta praesentium adipisci optio voluptas. Fuga minus quisquam atque nobis tempore numquam maiores magni, quasi deserunt debitis.</p>
                  <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                      <div className="flex items-center gap-4">
                          <Image src={ "/like.png" } alt='Like' width={ 12 } height={ 12 } className='cursor-pointer w-4 h-4' />
                          <span className='text-gray-300'>|</span>
                          <span className='text-gray-500'>123 Likes</span>
                      </div>  
                    <div className=''>
                        Antworten
                    </div>
                  </div>
              </div>
              {/* Icon */ }
              <Image src={"/more.png"} alt='Icon' width={16} height={16} className='cursor-pointer w-4 h-4' />
          </div>
    </div>
  )
}

export default Comments