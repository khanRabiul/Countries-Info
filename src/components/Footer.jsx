
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()

  return (
    <footer className="bg-blue-500 px-8">
        <div className="text-center text-white py-4 cursor-pointer">Al Rights to @Countries {year} </div>
    </footer>
  )
}

export default Footer