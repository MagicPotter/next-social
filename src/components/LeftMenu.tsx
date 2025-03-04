import Ad from './Ad'
import Image from 'next/image'
import Link from 'next/link'
import ProfileCard from './ProfileCard'

const LeftMenu = ( { type } : { type: "home" | "profile"}) => {
  return (
    <div className="flex flex-col gap-6">
      { type === "home" && <ProfileCard /> }
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link href={ "/" } className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src={ "/posts.png" } alt='Posts' width={ 20 } height={ 20 } />
          <span>Meine Posts</span>
        </Link>
        <hr className='border-t border-gray-50 w-36 self-center'/>
        <Link href={ "/" } className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src={ "/activity.png" } alt='Posts' width={ 20 } height={ 20 } />
          <span>Aktivitäten</span>
        </Link>
        <hr className='border-t border-gray-50 w-36 self-center'/>
        <Link href={ "/" } className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src={ "/market.png" } alt='Posts' width={ 20 } height={ 20 } />
          <span>Marktplatz</span>
        </Link>
        <hr className='border-t border-gray-50 w-36 self-center'/>
        <Link href={ "/" } className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src={ "/events.png" } alt='Posts' width={ 20 } height={ 20 } />
          <span>Events</span>
        </Link>
        <hr className='border-t border-gray-50 w-36 self-center'/>
        <Link href={ "/" } className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src={ "/albums.png" } alt='Posts' width={ 20 } height={ 20 } />
          <span>Album</span>
        </Link>
        <hr className='border-t border-gray-50 w-36 self-center'/>
        <Link href={ "/" } className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src={ "/videos.png" } alt='Posts' width={ 20 } height={ 20 } />
          <span>Videos</span>
        </Link>
        <hr className='border-t border-gray-50 w-36 self-center'/>
        <Link href={ "/" } className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src={ "/news.png" } alt='Posts' width={ 20 } height={ 20 } />
          <span>News</span>
        </Link>
        <hr className='border-t border-gray-50 w-36 self-center'/>
        <Link href={ "/" } className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src={ "/courses.png" } alt='Posts' width={ 20 } height={ 20 } />
          <span>Kurze</span>
        </Link>
        <hr className='border-t border-gray-50 w-36 self-center'/>
        <Link href={ "/" } className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src={ "/lists.png" } alt='Posts' width={ 20 } height={ 20 } />
          <span>Lists</span>
        </Link>
        <hr className='border-t border-gray-50 w-36 self-center'/>
        <Link href={ "/" } className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src={ "/settings.png" } alt='Posts' width={ 20 } height={ 20 } />
          <span>Einstellungen</span>
        </Link>
        <hr className='border-t border-gray-50 w-36 self-center'/>
      </div>
      <Ad size='sm' />
    </div>
  )
}

export default LeftMenu