import "./globals.css";

export const metadata = {
  title: "Weather AI",
  description: "Weather summary enhanced with GPT-4",
  icons: {
    icon: "/favicon.ico",
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
