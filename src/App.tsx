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
    <div className="app">
      <h1>📜 Quotes Explorer</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search quotes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={() => setPage(1)}>
        Search
      </button>

      {loading && <p>Loading...</p>}

      <div className="grid">
        {quotes.map((q) => (
          <QuoteCard key={q.id} quote={q} />
        ))}
      </div>

      <Pagination
        page={page}
        hasNext={hasNext}
        hasPrev={hasPrev}
        onNext={() => setPage((p) => p + 1)}
        onPrev={() => setPage((p) => p - 1)}
      />
    </div>
  );
}

export default App;