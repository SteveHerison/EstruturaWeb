import NavComponent from "../NavComponent";

const Navbar = () => {
  return (
    <div className="w-60 border-r ">
      <div className="flex flex-col justify-between h-full ">
        <div className="h-20 bg-black w-full px-2 text-white flex items-center">
          {" "}
          <h1>Logo</h1>
        </div>
        <NavComponent />
        <div className="h-20 bg-black w-full px-2 text-white flex items-center">
          {" "}
          <h2>Footer</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
