export const metadata = {
  title: 'Forecast Alpha',
  description: 'Rullerende prognose og avviksanalyse (alfa)',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
        {children}
      </body>
    </html>
  );
}
