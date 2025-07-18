// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">&copy; 2025 Abdelali Lebbar. Tous droits réservés.</p>
        <div className="flex justify-center space-x-6 text-lg">
          <a
            href="https://github.com/alilebbar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/abdelali-lebbar-b1745a87"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a
            href="mailto:tonemail@example.com"
            className="hover:text-gray-400"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
