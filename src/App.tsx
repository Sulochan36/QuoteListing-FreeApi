import { useEffect, useState } from "react";
import { fetchQuotes } from "./services/quoteService";
import type { Quote } from "./types/quote";
import QuoteCard from "./components/QuoteCard";
import Pagination from "./components/Pagination";

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);
  const [loading, setLoading] = useState(false);

  const getQuotes = async () => {
    try {
      setLoading(true);
      const res = await fetchQuotes(page, query);

      setQuotes(res.data);
      setHasNext(res.nextPage);
      setHasPrev(res.previousPage);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuotes();
  }, [page]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-10">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight text-center mb-8">
          📜 Quotes Explorer
        </h1>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text"
            placeholder="Search quotes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />

          <button
            onClick={() => setPage(1)}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 active:scale-95 transition"
          >
            Search
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500 text-sm mb-6">
            Loading quotes...
          </p>
        )}

        {/* Grid */}
        <div className="flex flex-col flex-wrap gap-5">
          {quotes.map((q) => (
            <QuoteCard key={q.id} quote={q} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10">
          <Pagination
            page={page}
            hasNext={hasNext}
            hasPrev={hasPrev}
            onNext={() => setPage((p) => p + 1)}
            onPrev={() => setPage((p) => p - 1)}
          />
        </div>

      </div>
    </div>
  );
}

export default App;