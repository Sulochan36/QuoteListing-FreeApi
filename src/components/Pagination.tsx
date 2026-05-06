interface Props {
    page: number;
    hasNext: boolean;
    hasPrev: boolean;
    onNext: () => void;
    onPrev: () => void;
}

const Pagination = ({
    page,
    hasNext,
    hasPrev,
    onNext,
    onPrev,
}: Props) => {
    return (
        <div className="flex items-center justify-center gap-4">

            <button
                onClick={onPrev}
                disabled={!hasPrev}
                className="px-4 py-2 rounded-lg border text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-40"
            >
                ⬅ Prev
            </button>

            <span className="text-sm text-gray-700 font-medium">
                Page {page}
            </span>

            <button
                onClick={onNext}
                disabled={!hasNext}
                className="px-4 py-2 rounded-lg border text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-40"
            >
                Next ➡
            </button>

        </div>
    );
};

export default Pagination;