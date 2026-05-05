import type { Quote } from "../types/quote";

const QuoteCard = ({ quote }: { quote: Quote }) => {
    return (
        <div className="card">
            <p className="quote">"{quote.content}"</p>
            <h4>- {quote.author}</h4>

            {quote.tags?.length > 0 && (
                <div className="tags">
                    {quote.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default QuoteCard;