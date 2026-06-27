import { Funnel_Display } from 'next/font/google';
import './globals.css';
import Cursor from './components/Cursor';

const funnelDisplay = Funnel_Display({
  subsets: ['latin'],
  display: 'swap', // Recommended for better performance
});

export const metadata = {
  title: 'Jubair Alam | Full Stack Developer',
  description: 'Portfolio of Jubair Alam - Full Stack Developer specializing in modern web technologies',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className="antialiased overflow-x-hidden relative">
        
         {/* CUSTOM CURSOR */}
        <Cursor />

        {/* Ambient Back-sided Glow Overlay */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Large Green Orb 1 */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] animate-glow-slow" />
          
          {/* Medium Green/Teal Orb 2 */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-green-600/15 rounded-full blur-[130px] animate-glow-medium" />
          
          {/* Small Center Orb */}
          <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px] animate-pulse duration-[5000ms]" />
        </div>

        {/* Main Content Wrapper - ensures content sits above the glow */}
        <main className="relative z-10">
          <div className={funnelDisplay.className}>
            {children}
          </div>
        </main>

      </body>
    </html>
  );
}