export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4 h-16">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} My E-commerce Store. All rights reserved.
          </div>
          <div className="space-x-4">
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    );
  }
  