import Image from 'next/image'
import Link from 'next/link'

const FriendRequests = () => {
  return (
      <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
          {/* TOP */ }
          <div className="flex justify-between items-center font-medium">
              <span className="text-gray-500">Freundschafts Anfragen</span>
              <Link href={"/"} className="text-blue-500 text-xs">Alle anzeigen</Link>
          </div>
          {/* USER */ }
          <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                  <Image src={"https://images.pexels.com/photos/30981944/pexels-photo-30981944/free-photo-of-charmante-strassenszene-in-guangzhou-china.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='Avatar' height={40} width={40} className='w-10 h-10 rounded-full object-cover'/>
                  <span className='font-semibold'>MagicPotter</span>
              </div>
              <div className="flex gap-3 justify-end">
                  <Image src={"/accept.png"} alt='Accept' height={20} width={20} className='cursor-pointer'/>
                  <Image src={"/reject.png"} alt='Accept' height={20} width={20} className='cursor-pointer'/>
              </div>
          </div>
          <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                  <Image src={"https://images.pexels.com/photos/30981944/pexels-photo-30981944/free-photo-of-charmante-strassenszene-in-guangzhou-china.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='Avatar' height={40} width={40} className='w-10 h-10 rounded-full object-cover'/>
                  <span className='font-semibold'>MagicPotter</span>
              </div>
              <div className="flex gap-3 justify-end">
                  <Image src={"/accept.png"} alt='Accept' height={20} width={20} className='cursor-pointer'/>
                  <Image src={"/reject.png"} alt='Accept' height={20} width={20} className='cursor-pointer'/>
              </div>
          </div>
          <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                  <Image src={"https://images.pexels.com/photos/30981944/pexels-photo-30981944/free-photo-of-charmante-strassenszene-in-guangzhou-china.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='Avatar' height={40} width={40} className='w-10 h-10 rounded-full object-cover'/>
                  <span className='font-semibold'>MagicPotter</span>
              </div>
              <div className="flex gap-3 justify-end">
                  <Image src={"/accept.png"} alt='Accept' height={20} width={20} className='cursor-pointer'/>
                  <Image src={"/reject.png"} alt='Accept' height={20} width={20} className='cursor-pointer'/>
              </div>
          </div>
    </div>
  )
}

export default FriendRequests