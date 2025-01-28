import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex-grow bg-gray-100 p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
