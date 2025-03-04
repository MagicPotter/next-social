import Image from 'next/image'

const AddPost = () => {
  return (
      <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
          {/* Avatar */ }
          <Image src={"https://images.pexels.com/photos/13190374/pexels-photo-13190374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" } alt="Avatar" width={48} height={48}  className="w-12 h-12 object-cover rounded-full" />
          
          {/* POST */ }
          <div className='flex-1'>
              {/* Text Input */ }
              <div className="flex gap-4">
                  <textarea name='' id='' placeholder='Was geht?' className='flex-1 bg-slate-100 rounded-lg p-2'></textarea>
                  <Image src="/emoji.png" alt="" width={20} height={20} className="w-5 h-5 cursor-pointer self-end" />
              </div>
              {/* Post Options */ }
              <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                  <div className="flex items-center gap-2 cursor-pointer">
                      <Image src={ "/addImage.png" } alt='Foto' width={ 20 } height={ 20 } />
                      Foto
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                      <Image src={ "/addVideo.png" } alt='Video' width={ 20 } height={ 20 } />
                      Video
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                      <Image src={ "/addEvent.png" } alt='Event' width={ 20 } height={ 20 } />
                      Foto
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                      <Image src={ "/poll.png" } alt='Umfrage' width={ 20 } height={ 20 } />
                      Umfrage
                  </div>
              </div>
          </div>
    </div>
  )
}

export default AddPost