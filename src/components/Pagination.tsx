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
        <div className="pagination">
            <button onClick={onPrev} disabled={!hasPrev}>
                ⬅ Prev
            </button>

            <span>Page {page}</span>

            <button onClick={onNext} disabled={!hasNext}>
                Next ➡
            </button>
        </div>
    );
};

export default Pagination;