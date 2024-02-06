
import "./globals.css";
import SideBar from "./components/SideBar";

import Login from "./components/Login";




export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html>
      <head />
      <body>
      
           <Login />
       
       <div className="flex">
        <div className="bg-[#bea060] max-w-xs h-screen overflow-y-auto md:min-w-[20rem}">
          <SideBar />
        </div>

      {/*ClientProvider - notification */}

     <div className="bg-black flex-1">{children}</div>
    </div>
       
      
      </body>
      </html>
  );
}
