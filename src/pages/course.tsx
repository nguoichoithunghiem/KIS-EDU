import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Để lấy slug từ URL
import { Search } from "lucide-react";
import { mockArticles } from "../data/mockData"; // Dữ liệu bài viết mẫu

const Course = () => {
    const { slug } = useParams(); // Lấy slug từ URL
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredArticles, setFilteredArticles] = useState(mockArticles);

    // --- Filter các bài viết theo category (slug) ---
    useEffect(() => {
        const filtered = mockArticles.filter(
            (article) => article.category.toLowerCase() === slug?.toLowerCase()
        );
        setFilteredArticles(filtered);
    }, [slug]);

    // --- Tìm kiếm ---
    const searchArticles = filteredArticles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // --- Pagination ---
    const itemsPerPage = 9;
    const totalPages = Math.ceil(searchArticles.length / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedArticles = searchArticles.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="w-5/6">
                {/* Thanh tìm kiếm */}
                <div className="bg-gray-700 text-white px-4 py-3 flex justify-between items-center rounded">
                    <div className="font-semibold text-sm md:text-base">Tiếng Hàn</div>
                    <form
                        aria-label="Search articles"
                        className="flex items-center"
                        role="search"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <label className="sr-only">Tìm bài viết</label>
                        <input
                            className="text-black text-xs md:text-sm rounded px-2 py-1 w-36 md:w-48 focus:outline-none"
                            id="search-input"
                            placeholder="Tìm bài viết"
                            type="search"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1); // reset về trang 1 khi search
                            }}
                        />
                        <button
                            aria-label="Search"
                            className="ml-2 text-gray-700 bg-white rounded px-2 py-1.5 text-xl md:text-sm flex items-center"
                            type="submit"
                        >
                            <Search className="w-4 h-4" />
                        </button>
                    </form>
                </div>

                {/* Nội dung chính */}
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {paginatedArticles.length > 0 ? (
                        paginatedArticles.map((article) => (
                            <article
                                key={article.id}
                                className="border border-gray-200 rounded overflow-hidden flex flex-col"
                            >
                                <img
                                    alt={article.title}
                                    className="w-full object-cover"
                                    height="400"
                                    loading="lazy"
                                    src={article.image}
                                    width="600"
                                />
                                <div className="p-3 flex flex-col flex-grow">
                                    <h2 className="font-bold text-sm md:text-base mb-1 leading-tight">
                                        {article.title}
                                    </h2>
                                    <p className="text-xs md:text-sm text-gray-600 flex-grow">
                                        {article.description}
                                    </p>
                                    <div className="pt-2 text-xs text-gray-500 flex items-center space-x-1">
                                        <i className="far fa-eye"></i>
                                        <span>{article.views}</span>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">
                            Không tìm thấy bài viết nào.
                        </p>
                    )}
                </div>

                {/* Pagination */}
                {paginatedArticles.length > itemsPerPage && (
                    <div className="flex justify-center mt-6 space-x-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-3 py-1 border rounded disabled:opacity-50"
                        >
                            Prev
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-3 py-1 border rounded ${page === currentPage ? "bg-orange-600 text-white" : ""
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 border rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Course;
