import Script from "next/script";
import ClientProvider from "./ClientProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import "../styles/components/yearDropdown.css";
import "../styles/components/withTable.css";

// Force all pages to be dynamically rendered (no static prerendering)
// This prevents SSR issues with document/window references in CRA-migrated code
export const dynamic = "force-dynamic";

export const metadata = {
  title: {
    default: "Technology Students' Gymkhana - IIT Kharagpur | TSG",
    template: "%s | TSG",
  },
  description:
    "Technology Students' Gymkhana is the hub of the numerous extra-curricular and co-curricular activities in IIT Kharagpur ranging from sports to socio-cultural. The Gymkhana is managed by the students, for the students, under the guidance and active participation of the faculty and staff members.",
  icons: {
    icon: "/data/media/images/general/gymkhanaLogo.png",
    apple: "/logo192.png",
  },
  openGraph: {
    type: "website",
    url: "https://gymkhana.iitkgp.ac.in",
    title: "Technology Students' Gymkhana - IIT Kharagpur",
    description:
      "The hub of extra-curricular and co-curricular activities in IIT Kharagpur. Managed by students, for students.",
    images: [
      {
        url: "/data/media/images/general/gymkhanaLogo-og.png",
        width: 200,
        height: 218,
        alt: "Technology Students' Gymkhana Logo",
      },
    ],
    siteName: "Technology Students' Gymkhana - IIT Kharagpur",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <Script
          src="https://kit.fontawesome.com/361a60d601.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FVQPEQMVHD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FVQPEQMVHD');
          `}
        </Script>
      </head>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
