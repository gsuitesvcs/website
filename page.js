import './globals.css';

export const metadata = {
  title: 'Gsuite Services Inc. | Real Estate, Tax, Credit & Financial Guidance',
  description: 'Gsuite Services Inc. helps clients achieve financial stability through real estate, credit enhancement, tax services, and business guidance.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
