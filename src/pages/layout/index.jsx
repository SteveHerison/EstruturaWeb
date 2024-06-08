import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import RequireAuth from "../../RequireAuth";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full ">
      <div className="flex w-full h-full">
        <Navbar />
        <div className="flex flex-col w-full h-full">
          <Header />
          <main className="h-full w-full">
            <RequireAuth>{children}</RequireAuth>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
