import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faUser, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div className="h-14 w-full text-center bg-blue-500 flex space-x-72 justify-center">
        <div className="logo py-3">Logo{}</div>
        <div className="choice flex bg-white space-x-14">
        <div className="py-3">
          Shop
        </div>
        <div className=" py-3">Most wanted</div>
        <div className=" py-3">New Arrival</div>
        <div className=" py-3">Brands</div>
        </div>
        <div className="flex bg-white space-x-9">
            <div className=" py-3 bg-green-600">
            <form action="" className='flex'>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#c1c9d1",}} className="bg-white text-2xl rounded-l-sm border-b-2 border-l-2 border-t-2 border-slate-200" />
            <input type="text" placeholder='Search' className='w-40 rounded-r-sm border-t-2 border-b-2 border-r-2 border-slate-200'></input>
            </form>
            </div>
            <div className=" py-3">
            <FontAwesomeIcon icon={faCartShopping}  className='text-xl'/>
            </div>
            <div className=" py-3">
            <FontAwesomeIcon icon={faUser} className='text'/>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar