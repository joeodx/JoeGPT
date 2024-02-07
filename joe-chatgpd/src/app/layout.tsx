import "./globals.css";
import SideBar from "./components/SideBar";
import Login from "./components/Login";
import { SessionProvider } from "next-auth/react";





export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html>
      <head />
      <body>
        < SessionProvider>
           <Login />
       <div className="flex">
        <div className="bg-[#bea060] max-w-xs h-screen overflow-y-auto md:min-w-[20rem}">
          <SideBar />
        </div>

      {/*ClientProvider - notification */}

     <div className="bg-black flex-1">{children}</div>
    </div>
       
    </SessionProvider>
      </body>
      </html>
  );
}
