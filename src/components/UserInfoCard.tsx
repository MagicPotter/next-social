import Image from 'next/image'
import Link from 'next/link'

const UserInfoCard = ({ userId } : { userId: string}) => {
  return (
      <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
          {/* TOP */ }
          <div className="flex justify-between items-center font-medium">
              <span className='text-gray-500'>User Information</span>
              <Link href="" className='text-blue-500 text-xs'>
                Alle anzeigen
              </Link>
          </div>
          {/* USER */ }
          <div className='flex flex-col gap-4 text-gray-500'>
              <div className='flex items-center gap-2'>
                  <span className='text-xl text-black'>MagicPotter</span>
                  <span className='text-sm'>@MagicPotter</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magnam deleniti quis odio eum repellat quaerat sunt aperiam dolores beatae?</p>
            <div className="flex items-center gap-2">
                  <Image src={ "/map.png" } alt='Standort' width={ 16 } height={ 16 } />
                  <span>Wohnhaft in <b>Graz</b></span>
            </div>
            <div className="flex items-center gap-2">
                  <Image src={ "/school.png" } alt='Schule' width={ 16 } height={ 16 } />
                  <span>Schule besucht in <b>Graz</b></span>
            </div>
            <div className="flex items-center gap-2">
                  <Image src={ "/work.png" } alt='Arbeit' width={ 16 } height={ 16 } />
                  <span>Arbeitet bei <b>Rettungsdienst</b></span>
              </div>
              <div className='flex items-center justify-between'>
                  <div className='flex gap-1 items-center'>
                      <Image src={ "/link.png" } alt='Website' width={ 16 } height={ 16 } />
                      <Link href="/magicpotter.at" className='text-blue-500'>magicpotter.at</Link>
                  </div>
                  <div className='flex gap-1 items-center'>
                      <Image src={ "/date.png" } alt='Date' width={ 16 } height={ 16 } />
                      <span>Beigetreten am <b>01.01.2025</b></span>
                  </div>
              </div>
              <button className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md">Folgen</button>
              <span className="text-red-400 self-end text-xs cursor-pointer">Blockieren</span>
          </div>
    </div>
  )
}

export default UserInfoCard