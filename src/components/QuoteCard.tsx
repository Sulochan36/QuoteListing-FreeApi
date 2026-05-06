import type { Quote } from "../types/quote";

const QuoteCard = ({ quote }: { quote: Quote }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-5 flex flex-col justify-between h-full">

            {/* Quote */}
            <p className="text-gray-800 text-base leading-relaxed italic">
                “{quote.content}”
            </p>

            {/* Author */}
            <h4 className="mt-4 text-sm font-medium text-gray-600">
                — {quote.author}
            </h4>

            {/* Tags */}
            {quote.tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {quote.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default QuoteCard;