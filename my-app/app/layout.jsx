import "@/app/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemProvider";
import { Toaster } from 'sonner';
import Header from '../components/Header'

export const metadata = {
  title: "GOAT Notes",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body>
              <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex min-h-screen w-full flex-col">
                <Header />
                <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
                  {children}
                </main>
                < Toaster richColors />
              </div>
            </ThemeProvider>
        </body>
      </html>
  );
}
