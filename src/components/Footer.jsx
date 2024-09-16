const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Products</h3>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Updates</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Social</h3>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
