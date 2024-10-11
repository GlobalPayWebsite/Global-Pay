/* eslint-disable @next/next/no-sync-scripts */
import '../styles/globals.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Global Pay</title>
        <link rel="shortcut icon" href="/assets/logo.png" type="image/x-icon" />
      </head>
      <body className={`antialiased`}>
        {children}
        <script defer src="/bootstrap/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
