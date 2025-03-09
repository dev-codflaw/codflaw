import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="flex items-center justify-center min-h-screen p-8 text-white">
          {/* Branding Section */}
          <div className="text-center">
          <Link to="https://blog.codflaw.com/projects/"  className="text-gray-400 hover:text-gray-300 mr-4">Projects</Link>
          <Link to="https://blog.codflaw.com/blog/" className="text-gray-400 hover:text-gray-300">Blog</Link>
          <h1 className="text-4xl font-bold mt-4">&lt; codflaw &gt;</h1>
        </div>
      </div>
    );
  };
  
  export default Home;
  