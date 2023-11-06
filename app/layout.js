import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Login from "@/components/Login";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatGPT Clone",
  description: "The optimized chat GPT clone app clone made by Tushar Anand",
};

export default async function RootLayout({ children, session }) {
  console.log(session); // Log the session

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image svg" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        <AuthProvider session={session}>
          {
            session ? (
              <div className="flex">
            {/* sidebar */}
            <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[18rem]">
              <Sidebar />
            </div>
            {/* client provider -notification */}
            <div className="bg-[#343541] flex-1">{children}</div>
          </div>
            ) : (
              <Login/>
            )
          }
        </AuthProvider>
      </body>
    </html>
  );
}
