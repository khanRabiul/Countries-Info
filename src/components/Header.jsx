

const Header = () => {
  return (
    <header className="bg-blue-500 fixed top-0 right-0 left-0 z-50 mb-64">
        <div className="flex justify-center items-center px-8">
        <div className= "container mx-auto text-white text-2xl py-8 cursor-pointer ">
            Countries Info
        </div>
        <div className="">
            <input type="text" placeholder="Search here" className="px-2 py-1 rounded-md" />
        </div>
        </div>
    </header>
  )
}

export default Header