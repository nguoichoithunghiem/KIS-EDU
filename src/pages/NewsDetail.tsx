import React from "react";
import { useParams, Link } from "react-router-dom";
import { mockNews } from "../data/mockData";
import { Calendar } from "lucide-react";
import { slugify } from "../utils/formatUrl";

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // tìm tin theo id
  const newsItem = mockNews.find((news) => news.id.toString() === id);

  if (!newsItem) {
    return <div className="p-4">Tin tức không tồn tại.</div>;
  }

  return (
    <div className="bg-white px-4 py-6 max-w-4xl mx-auto">
      {/* Tiêu đề */}
      <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>

      {/* Ngày đăng */}
      <div className="flex items-center text-orange-600 text-sm mb-4">
        <Calendar className="w-4 h-4 mr-1" />
        <time dateTime={newsItem.date}>
          {new Date(newsItem.date).toLocaleDateString("vi-VN")}
        </time>
      </div>

      {/* Ảnh chính */}
      <img
        src={newsItem.image}
        alt={newsItem.title}
        className="w-full h-64 object-cover mb-4 rounded"
      />

      {/* Nội dung */}
      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {newsItem.content}
      </div>

      {/* Link quay lại danh mục */}
      <div className="mt-6">
        <Link
          to={`/category/${slugify(newsItem.category)}`}
          className="text-orange-600 underline"
        >
          ← Quay lại danh mục
        </Link>
      </div>
    </div>
  );
};

export default NewsDetail;
