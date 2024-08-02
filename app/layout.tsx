import Layout from "../components/layout";
// import ScrollToTop from '../helper/ScrollToTop';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

export default function RootLayout({ children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en" dir="rtl">
      <body className="font-estedad">
        <Layout>
          {/* <ScrollToTop /> */}
          {children}
        </Layout>
        {/* <ToastContainer /> */}
      </body>
    </html>
  );
}
