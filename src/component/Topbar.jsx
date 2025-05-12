export default function Topbar() {
  return (
    <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </div>
    </header>
  );
}
