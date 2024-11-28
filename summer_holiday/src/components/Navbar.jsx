const Navbar = () => {
  return (
    <div className="h-14 w-full text-center bg-blue-500 flex space-x-72 justify-center">
        <div className="logo py-3">Logo{}</div>
        <div className="choice flex bg-white space-x-14">
        <div className="py-3">Shop</div>
        <div className=" py-3">Most wanted</div>
        <div className=" py-3">New Arrival</div>
        <div className=" py-3">Brands</div>
        </div>
        <div className="flex bg-white space-x-9">
            <div className=" py-3">Search{}</div>
            <div className=" py-3">Cart</div>
            <div className=" py-3">Account</div>
        </div>
    </div>
    
  )
}

export default Navbar