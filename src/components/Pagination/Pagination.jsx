
const Pagination = () => {
    const totalPages = 40;
    const currentPage = 1;

    const renderPagination = () => {
        const buttonsToShow = 4;
        const pages = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

        const visiblePages = pages.slice(0, buttonsToShow);

        return (
            <div className="pagination">
                <button className="pagination_btn">{'<'}</button>
                <div className="pagination_pages">
                    {visiblePages.map((page, index) => (
                        <button
                            className={`pagination_btn ${currentPage === page ? 'active' : ''}`}
                            key={index}
                        >
                            {page}
                        </button>
                    ))}
                    {totalPages > buttonsToShow && (
                        <span className="pagination_btn not-show">{'...'}</span>
                    )}
                    <button className="pagination_btn">{totalPages}</button>
                </div>
                <button className="pagination_btn">{'>'}</button>
            </div>
        );
    };

    return (
        <div>
            {renderPagination()}
        </div>
    );
};

export default Pagination;