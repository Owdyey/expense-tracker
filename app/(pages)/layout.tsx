export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" h-screen flex">
      <div className="w-70 border">asd</div>
      <main className="bg-custom-light-bg flex-1 p-5">{children}</main>
    </div>
  );
}
