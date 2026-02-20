export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid place-items-center bg-custom-light-bg h-screen">
      {children}
    </div>
  );
}
