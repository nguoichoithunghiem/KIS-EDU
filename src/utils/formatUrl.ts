import { mockNews } from "../data/mockData";
import { mockNewsWithSections } from "../data/mockData";
export const slugify = (str: string) =>
  str
    .toLowerCase()
    .normalize("NFD") // tách dấu khỏi chữ
    .replace(/[\u0300-\u036f]/g, "") // xóa dấu
    .replace(/\s+/g, "-") // thay khoảng trắng = -
    .replace(/[^a-z0-9-]/g, ""); // xóa ký tự đặc biệt

export const categories = Array.from(new Set(mockNews.map((n) => n.category)));
export const categoriesNewsSection = Array.from(
  new Set(mockNewsWithSections.map((n) => n.category))
);

// Hàm map ngược từ slug -> category gốc
export const getCategoryNameFromSlug = (slug: string, categories: string[]) => {
  return categories.find((cat) => slugify(cat) === slug) || slug;
};
