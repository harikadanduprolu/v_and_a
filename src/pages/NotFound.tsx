
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-50 px-6">
      <div className="glass-card max-w-md w-full text-center">
        <div className="font-serif text-8xl text-rose-400 mb-4">404</div>
        <h1 className="font-serif text-3xl text-gray-800 mb-6">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          We couldn't find the page you were looking for. It might have been moved or doesn't exist.
        </p>
        <Link to="/" className="button-primary inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
