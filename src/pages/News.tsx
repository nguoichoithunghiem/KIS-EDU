import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { mockNews } from "../data/mockData";
import { slugify } from "../utils/formatUrl";
import { getCategoryNameFromSlug } from "../utils/formatUrl";
import { categories } from "../utils/formatUrl";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
const News = () => {
  const { slug } = useParams<{ slug: string }>();
  const categoryName = getCategoryNameFromSlug(slug || "", categories);

  // lọc news theo slug
  const filteredNews = mockNews.filter(
    (news) => slugify(news.category) === slug
  );

  // --- Pagination ---
  const itemsPerPage = 12; // 3 hàng × 4 cột
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedNews = filteredNews.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // cuộn lên đầu khi đổi trang
  };
  return (
    // <div className="bg-white font-sans text-black px-4 py-6">
    //   <h2 className="text-2xl font-bold mb-6 uppercase">{categoryName}</h2>

    //   {filteredNews.length === 0 ? (
    //     <p>Không có tin tức nào trong mục này.</p>
    //   ) : (
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //       {paginatedNews.map((news) => (
    //         <article
    //           key={news.id}
    //           className="border border-gray-200 p-3 rounded shadow-sm hover:shadow-md transition"
    //         >
    //           <img
    //             src={news.image}
    //             alt={news.title}
    //             className="mb-3 w-full h-40 object-cover rounded"
    //           />
    //           <h3 className="font-bold text-sm leading-tight mb-1 uppercase line-clamp-2">
    //             {news.title}
    //           </h3>
    //           <div className="flex items-center text-orange-600 text-xs mb-1">
    //             <Calendar className="w-3 h-3 mr-1" />
    //             <time dateTime={news.date}>
    //               {new Date(news.date).toLocaleDateString("vi-VN")}
    //             </time>
    //           </div>
    //           <p className="text-xs leading-snug text-gray-700 line-clamp-3">
    //             {news.content}
    //           </p>
    //         </article>
    //       ))}
    //     </div>
    //   )}
    // </div>
    <div className="bg-white font-sans text-black px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 uppercase">{categoryName}</h2>

      {filteredNews.length === 0 ? (
        <p>Không có tin tức nào trong mục này.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedNews.map((news) => (
              <article
                key={news.id}
                className="border border-gray-200 p-3 rounded shadow-sm hover:shadow-md transition"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="mb-3 w-full h-40 object-cover rounded"
                />
                <h3 className="font-bold text-sm leading-tight mb-1 uppercase line-clamp-2">
                  <Link to={`/category/${slug}/${news.id}`}>{news.title}</Link>
                </h3>
                <div className="flex items-center text-orange-600 text-xs mb-1">
                  <Calendar className="w-3 h-3 mr-1" />
                  <time dateTime={news.date}>
                    {new Date(news.date).toLocaleDateString("vi-VN")}
                  </time>
                </div>
                <p className="text-xs leading-snug text-gray-700 line-clamp-3">
                  {news.content}
                </p>
              </article>
            ))}
          </div>

          {/* Pagination */}
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
                className={`px-3 py-1 border rounded ${
                  page === currentPage ? "bg-orange-600 text-white" : ""
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
        </>
      )}
    </div>
  );
};

export default News;
