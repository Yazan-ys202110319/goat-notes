import "@/app/styles/globals.css";

export const metadata = {
  title: "GOAT Notes",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body>
            {children}
        </body>
      </html>
  );
}
