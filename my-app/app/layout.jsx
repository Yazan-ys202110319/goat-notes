import "@/app/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemProvider";

export const metadata = {
  title: "GOAT Notes",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" suppressContentEditableWarning>
        <body>
              <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
        </body>
      </html>
  );
}
