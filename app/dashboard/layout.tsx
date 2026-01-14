import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white fixed inset-y-0">
        <div className="p-6 font-bold text-xl border-b border-gray-700">
          JobTracker
        </div>

        <nav className="p-4 space-y-2">
          <SidebarLink href="/dashboard" label="📊 Dashboard" />
          <SidebarLink href="/dashboard/applications" label="➕ Applications" />
          <SidebarLink href="/dashboard/analytics" label="📈 Analytics" />
          <SidebarLink href="/dashboard/settings" label="⚙️ Settings" />
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
          <button className="w-full text-left text-red-400">
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 bg-gray-50 p-6">
        {children}
      </main>
    </div>
  );
}

function SidebarLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded hover:bg-gray-700"
    >
      {label}
    </Link>
  );
}
