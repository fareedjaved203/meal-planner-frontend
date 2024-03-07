import Image from "next/image";

const Navbar = () => {
  const username = "Fareed Javed"; // Replace with actual username
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  const imageSrc = ({ src }) => {
    return `https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg`;
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white text-black">
      <div className="flex flex-col items-center">
        <span className="mr-2 font-bold">Hello {username}</span>
        <div className="text-sm text-gray-400">
          <p>
            {currentTime} <span>{currentDate}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="mr-2 max-sm:hidden">{username}</span>
        <img
          src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
          width={400}
          height={400}
          alt="logo icon"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
