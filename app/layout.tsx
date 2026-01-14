// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ApplicationsProvider } from "@/context/ApplicationsContext";

export const metadata = {
  title: "Job Tracker",
  description: "Track your job applications easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Wrap the app in ApplicationsProvider */}
        <ApplicationsProvider>
          <Navbar />
          <main className="flex-1 p-6 bg-gray-50">{children}</main>
          <Footer />
        </ApplicationsProvider>
      </body>
    </html>
  );
}
