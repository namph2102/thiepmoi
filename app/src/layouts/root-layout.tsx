import { Links, Meta, Scripts, ScrollRestoration } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer";

export function RootLayout({
  children,
  meta,
}: {
  children: React.ReactNode;
  meta?: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        {meta}
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
