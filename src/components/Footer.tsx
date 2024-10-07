const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 p-4 mt-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 MyWebsite. All rights reserved.</p>
          <nav>
            <a href="/privacy" className="text-gray-400 ml-4">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 ml-4">Terms of Service</a>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  