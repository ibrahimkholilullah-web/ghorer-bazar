const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-800 py-10 px-5 md:px-16">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <img src="/logo.png" alt="Ghorer Bazar" className="w-28 mb-4" />
            <h2 className="text-lg font-bold">
              Ghorer Bazar: Your Trusted Source for Safe & Organic Food
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Ghorer Bazar is a leading e-commerce platform committed to delivering 
              safe, healthy, and organic food products across Bangladesh.
            </p>
          </div>
  
          {/* Middle Section */}
          <div>
            <h3 className="text-lg font-bold text-orange-600 mb-3">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500">রিটার্ন পলিসি</a></li>
              <li><a href="#" className="hover:text-orange-500">রিফান্ড পলিসি</a></li>
            </ul>
          </div>
  
          {/* Right Section */}
          <div>
            <h3 className="text-lg font-bold text-orange-600 mb-3">QUICK HELP</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">গ্রাহক সেবা</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact</a></li>
            </ul>
            <p className="text-sm font-semibold mt-4">DBID ID : 437361334</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  