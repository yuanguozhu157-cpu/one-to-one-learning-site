export default function Layout({children}) {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center">
      <header className="bg-blue-600 w-full py-4 text-center text-white text-xl font-bold">1 Phi Saying</header>
      <main className="p-8">{children}</main>
      <footer className="mt-auto py-4 text-gray-600">© 2025 1 Phi Saying</footer>
    </div>
  )
}
