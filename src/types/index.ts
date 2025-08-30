export interface News {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}
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
