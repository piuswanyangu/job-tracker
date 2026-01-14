export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} JobTracker. Built by Pius.</p>
      </div>
    </footer>
  );
}
