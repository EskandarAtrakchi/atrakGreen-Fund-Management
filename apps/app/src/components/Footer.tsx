import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/services/portfolio-management"
                    className="hover:text-gray-300"
                  >
                    Portfolio Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/risk-management"
                    className="hover:text-gray-300"
                  >
                    Risk Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/financial-advisory"
                    className="hover:text-gray-300"
                  >
                    Financial Advisory
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="hover:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="hover:text-gray-300">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-gray-300">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog" className="hover:text-gray-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-gray-300">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="hover:text-gray-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-gray-300">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer" className="hover:text-gray-300">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>
              &copy; {new Date().getFullYear()} FundMaster. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

