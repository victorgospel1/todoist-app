function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 shadow-lg ">
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left px-6">
        <aside>
          <a
            href="/"
            className="text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-green-300 via-blue-300 to-blue-700 bg-clip-text text-transparent"
          >
            MTA
          </a>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Simplifying tasks & boosting productivity with smart solutions.
          </p>
        </aside>

        <nav>
          <h6 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            Navigation
          </h6>
          <a
            href="/products"
            className="block hover:text-blue-500 transition font-medium"
          >
            Products
          </a>
          <a
            href="/todos"
            className="block hover:text-blue-500 transition font-medium"
          >
            Todos
          </a>
          <a
            href="/recipes"
            className="block hover:text-blue-500 transition font-medium"
          >
            Recipes
          </a>
        </nav>

        <nav>
          <h6 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            Company
          </h6>
          <a
            href="#"
            className="block hover:text-blue-500 transition font-medium"
          >
            About Us
          </a>
          <a
            href="#"
            className="block hover:text-blue-500 transition font-medium"
          >
            Contact
          </a>
          <a
            href="#"
            className="block hover:text-blue-500 transition font-medium"
          >
            Careers
          </a>
        </nav>

        <nav>
          <h6 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            Legal
          </h6>
          <a
            href="#"
            className="block hover:text-blue-500 transition font-medium"
          >
            Terms of Use
          </a>
          <a
            href="#"
            className="block hover:text-blue-500 transition font-medium"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="block hover:text-blue-500 transition font-medium"
          >
            Cookie Policy
          </a>
        </nav>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 mx-6"></div>

      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; 2025 <span className="font-semibold">MTA</span>. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
