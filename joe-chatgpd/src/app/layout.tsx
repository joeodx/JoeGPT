'use client'


import "./globals.css";
import SideBar from "./components/SideBar";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import Login from "./components/Login";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
         {!session ? (
           <Login />
        ) : ( 
       <div className="flex">
        <div className="bg-[#bea060] max-w-xs h-screen overflow-y-auto md:min-w-[20rem}">
          <SideBar />
        </div>

      {/*ClientProvider - notification */}

     <div className="bg-black flex-1">{children}</div>
    </div>
       )}
       </SessionProvider>
      </body>
      </html>
  );
}
