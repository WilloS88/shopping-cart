export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between sm:flex-row flex-wrap">
        <p className="text-center sm:text-left mb-4 sm:mb-0">
          © {currentYear} WilloS. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=3s"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=3s"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
