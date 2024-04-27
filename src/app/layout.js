/*
    Laget av Markus Moen Magnussen og Kaisa Lien
 */
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }) => {

  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
