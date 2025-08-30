export const articleCategories = [
  { slug: "hoc-tieng-han", name: "Học tiếng Hàn" },
  { slug: "lich-khai-giang", name: "Lịch khai giảng" },
  { slug: "lich-thi-topik", name: "Lịch thi TOPIK" },
];
export type ArticleCategorySlug = typeof articleCategories[number]["slug"];

export interface News {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}


export interface Article {
  id: number;
  title: string;
  description: string;
  views: number;
  image: string;
  category: ArticleCategorySlug; // 👈 thêm field này
}


=======
// 1. Section trong từng bài
export interface NewsSection {
  id: string; // anchor id
  title: string; // tiêu đề mục lớn
  content: string; // nội dung mục
}

// 2. Bài tin
export interface NewsWithSections {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
  content: string;
  sections: NewsSection[];
  author: string;
}

