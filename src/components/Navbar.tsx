import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  return (
        <div className='h-24 flex items-center justify-between'>
          {/* Links */ }
          <div className="font-bold text-xl text-blue-600">Social Network</div>
          {/* Mitte */ }
          <div className="hidden"></div>
          {/* Rechts */ }
          <div className="">
              <MobileNavbar />
          </div>
        </div>
  )
}

export default Navbar