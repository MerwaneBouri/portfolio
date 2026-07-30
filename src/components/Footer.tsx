export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Merwane. Tous droits réservés.</p>
      </div>
    </footer>
  );
}