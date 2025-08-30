import React from "react";
import { useParams, Link } from "react-router-dom";
import { mockNewsWithSections } from "../data/mockData";
import { slugify } from "../utils/formatUrl";
import { Calendar, User } from "lucide-react";

const NewsSectionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Tìm tin theo id
  const newsItem = mockNewsWithSections.find(
    (news) => news.id.toString() === id
  );

  if (!newsItem) {
    return <div className="p-4">Tin tức không tồn tại.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 flex gap-6">
      {/* Mục lục bên trái */}
      <nav className="w-1/4 sticky top-20 h-fit border border-[#04339f] rounded-xl bg-blue-50/30 shadow-sm p-4">
        <h3 className="font-bold mb-3 text-[#04339f] text-lg border-b border-[#04339f] pb-2">
          📑 Mục lục
        </h3>
        <ul className="space-y-2">
          {newsItem.sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className="block px-3 py-2 rounded-md text-sm font-medium text-[#04339f] hover:bg-[#04339f] hover:text-white transition-colors"
              >
                {sec.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Nội dung bài viết bên phải */}
      <div className="flex-1 space-y-8">
        {/* Tiêu đề, ngày đăng, ảnh */}
        <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
        <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
          {/* Ngày đăng */}
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1 text-orange-600" />
            <time dateTime={newsItem.date}>
              {new Date(newsItem.date).toLocaleDateString("vi-VN")}
            </time>
          </div>

          {/* Người đăng */}
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1 text-blue-600" />
            <span>{newsItem.author}</span>
          </div>
        </div>
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-64 object-cover mb-4 rounded"
        />

        {/* Các section */}
        {newsItem.sections.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-24">
            <h2 className="text-2xl font-bold mb-2">{sec.title}</h2>
            <p className="text-gray-700 leading-relaxed">{sec.content}</p>
          </section>
        ))}

        {/* Link quay lại danh mục */}
        <div className="mt-6">
          <Link
            to={`/duhochanquoc/${slugify(newsItem.category)}`}
            className="text-orange-600 underline"
          >
            ← Quay lại danh mục
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsSectionDetail;
