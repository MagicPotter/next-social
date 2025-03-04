import Comments from './Comments'
import Image from 'next/image'

const Post = () => {
  return (
      <div className='flex flex-col gap-4'>
          {/* User */ }
          <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src={"https://images.pexels.com/photos/30981944/pexels-photo-30981944/free-photo-of-charmante-strassenszene-in-guangzhou-china.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Image" className="w-10 h-10 rounded-full" width={ 40 } height={ 40 } />
                    <span className='font-medium'>MagicPotter</span>
                </div>
                <Image src={"/more.png"} alt="More" width={ 16 } height={ 16 } />

          </div>
          {/* Beschreibung */ }
          <div className="flex flex-col gap-4">
              <div className="w-full min-h-96 relative">
                  <Image src={"https://images.pexels.com/photos/30981944/pexels-photo-30981944/free-photo-of-charmante-strassenszene-in-guangzhou-china.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} fill className='rounded-md object-cover' alt='Image' />
              </div>
              <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, laboriosam? Saepe enim ratione, nostrum officia quisquam nihil incidunt vitae deserunt quaerat fugit porro exercitationem. A eaque non reiciendis sed perspiciatis.</p>
          </div>
          {/* Interaction */ }
          <div className="flex items-center justify-between text-sm my-4">
              <div className="flex gap-8">
                  <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                      <Image src="/like.png" alt="Like" width={ 16 } height={ 16 } className='cursor-pointer' />
                      <span className='text-gray-300'>|</span>
                      <span className='text-gray-500'>123 <span className='hidden md:inline'>Likes</span></span>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                      <Image src="/comment.png" alt="Like" width={ 16 } height={ 16 } className='cursor-pointer' />
                      <span className='text-gray-300'>|</span>
                      <span className='text-gray-500'>123 <span className='hidden md:inline'>Kommentare</span></span>
                  </div>
              </div>
              <div className="">
                  <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                      <Image src="/share.png" alt="Like" width={ 16 } height={ 16 } className='cursor-pointer' />
                      <span className='text-gray-300'>|</span>
                      <span className='text-gray-500'>123 <span className='hidden md:inline'>Reposts</span></span>
                  </div>
              </div>
          </div>
          <Comments />
    </div>
  )
}

export default Post