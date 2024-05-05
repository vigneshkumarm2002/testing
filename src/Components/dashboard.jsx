export default function Dashboard() {
    const userName=localStorage?.getItem("userName")
    return (
      <>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">Welcome,</p>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl capitalize">{userName}</h1>

          </div>
        </main>
      </>
    )
  }