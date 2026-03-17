export default function Home() {
return ( <main className="min-h-screen">

```
  {/* NAVBAR */}
  <nav className="flex justify-between items-center px-8 py-5 border-b">
    <h1 className="text-2xl font-bold text-blue-600">
      FinNexus Lab 🚀
    </h1>

    <div className="space-x-6 text-gray-600">
      <a href="#">Research</a>
      <a href="#">Insights</a>
      <a href="#">Tools</a>
    </div>
  </nav>

  {/* HERO */}
  <section className="text-center py-20">
    <h2 className="text-5xl font-bold">
      Financial Intelligence Platform
    </h2>

    <p className="mt-4 text-gray-500">
      Data-driven insights on markets, strategy & capital.
    </p>

    <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
      Explore Now
    </button>
  </section>

  {/* FEATURES */}
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 py-16">

    <div className="p-6 border rounded-lg">
      <h3 className="font-bold text-lg">📊 Research</h3>
      <p className="text-sm text-gray-500 mt-2">
        Deep industry reports and analysis
      </p>
    </div>

    <div className="p-6 border rounded-lg">
      <h3 className="font-bold text-lg">📈 Insights</h3>
      <p className="text-sm text-gray-500 mt-2">
        Strategic market insights
      </p>
    </div>

    <div className="p-6 border rounded-lg">
      <h3 className="font-bold text-lg">🔧 Tools</h3>
      <p className="text-sm text-gray-500 mt-2">
        Financial models & calculators
      </p>
    </div>

  </section>

</main>
```

);
}
