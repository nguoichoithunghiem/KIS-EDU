import type { Article, News } from "../types";
export const mockNews: News[] = [
  {
    id: 1,
    title: "OpenAI ra mắt GPT-5 với nhiều cải tiến vượt trội",
    content:
      "OpenAI vừa công bố GPT-5, phiên bản AI mạnh mẽ với khả năng xử lý văn bản, hình ảnh và âm thanh. Nhiều chuyên gia đánh giá đây sẽ là bước ngoặt lớn trong lĩnh vực trí tuệ nhân tạo.",
    author: "Nguyễn Văn A",
    date: "2025-08-28T09:00:00Z",
    image:
      "https://i1-sohoa.vnecdn.net/2024/05/14/mira-gpt4o-6566-1715652197.png?w=680&h=0&q=100&dpr=1&fit=crop&s=RtJMQMxES9sleGEFAtBD0w",
    category: "Công nghệ",
  },
  {
    id: 2,
    title: "Đề xuất Hà Nội, TP HCM kiểm định khí thải xe máy từ 1/7/2027",
    content: `Việc kiểm định khí thải xe máy tại Hà Nội, TP HCM có thể thực hiện từ 1/7/2027, lùi 6 tháng so với đề xuất trước đó.
Tại dự thảo quyết định của Thủ tướng về lộ trình áp dụng quy chuẩn kỹ thuật quốc gia về khí thải xe máy của Bộ Nông nghiệp và Môi trường, đang được Bộ Tư pháp thẩm định, việc kiểm định khí thải xe máy tại các tỉnh, thành phố lùi 6 tháng so với bản thảo đưa ra trước đó.
Cụ thể, xe máy tại Hà Nội, TP HCM được kiểm định từ 1/7/2027. Hải Phòng, Huế, Đà Nẵng và Cần Thơ thực hiện kiểm định từ 1/7/2028. Các tỉnh còn lại thực hiện hai năm sau đó.
Dự thảo cũng đề xuất việc áp dụng các tiêu chuẩn khí thải theo niên hạn xe môtô và xe máy, chia theo 4 mức. Với môtô, các xe sản xuất trước năm 2008 phải đáp ứng chuẩn khí thải mức 1. Xe sản xuất trong giai đoạn 2008-2016 cần đạt chuẩn mức 2.`,
    author: "Trần Thị B",
    date: "2025-08-28T11:30:00Z",
    image:
      "https://i1-kinhdoanh.vnecdn.net/2025/08/29/saule-JPG-9905-1756454743.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=s5MEFUdygoceQcf4q6Icbg",
    category: "Kinh doanh",
  },
  {
    id: 3,
    title: "Đội tuyển Việt Nam thắng Thái Lan 3-0",
    content:
      "Đội tuyển Việt Nam đã có màn trình diễn xuất sắc trong trận đấu với Thái Lan, giành chiến thắng thuyết phục 3-0 và tiếp tục giữ ngôi đầu bảng tại vòng loại World Cup.",
    author: "Lê Văn C",
    date: "2025-08-27T19:45:00Z",
    image:
      "https://i1-thethao.vnecdn.net/2025/08/29/messi-PNG-1756408692-5269-1756408788.png?w=680&h=0&q=100&dpr=1&fit=crop&s=AV9QJwVBhtIseYT5g6Q_qQ",
    category: "Thể thao",
  },
  {
    id: 4,
    title: "Nhạc sĩ Phạm Tuyên trao tặng bài 'Như có Bác trong ngày đại thắng'",
    content: `Tại buổi lễ bàn giao, nhạc sĩ được người thân đưa đến. Ở tuổi 95, do sức khỏe yếu, ông ngồi xe lăn, không phát biểu. Con gái ông, nhà báo Hồng Tuyến, thay bố nói về nguyện vọng: 
    "Cha tôi luôn giữ tâm niệm: Âm nhạc chỉ thật sự sống khi nó thuộc về cộng đồng. Quyết định tặng lại bản quyền và quyền sử dụng ca khúc là cách chúng tôi tiếp nối tinh thần ấy, 
    trao lại tác phẩm cho một cơ quan công lập, có sứ mệnh và năng lực giữ gìn và khai thác không vì mục đích thương mại".
Chị Tuyến cho biết gia đình chọn báo là đơn vị tiếp nhận ca khúc, do nhạc sĩ có kỷ niệm gắn bó. Bài Như có Bác trong ngày đại thắng được ông hoàn thành trong đêm 28/4/1975, phát lần đầu trên 
Đài Tiếng nói Việt Nam lúc 17h5' ngày 30/4/1975. Chỉ hai ngày sau chiến thắng, nhạc phẩm được in trên báo Nhân Dân, số ra ngày 2/5/1975. Các trang báo đưa ca khúc đến khắp các tỉnh, dần trở nên quen thuộc.`,
    author: "Phạm Thị D",
    date: "2025-08-26T14:20:00Z",
    image:
      "https://i1-giaitri.vnecdn.net/2025/08/29/nha-c-si-pha-m-tuye-n-17564639-3460-1140-1756464682.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=dvE8YeiIACksBowZuBulOA",
    category: "Giải trí",
  },
  {
    id: 5,
    title: "Hà Nội khai trương tuyến metro mới",
    content:
      "Tuyến metro số 3 chính thức đi vào hoạt động, giúp giảm tải ùn tắc giao thông và mang lại trải nghiệm hiện đại cho người dân thủ đô.",
    author: "Ngô Văn E",
    date: "2025-08-25T08:10:00Z",
    image:
      "https://i1-vnexpress.vnecdn.net/2025/05/23/NHA-O-XA-HOI-CAN-THO-174801276-3886-3035-1748012940.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=NlDb6OlbYNwOBvatclSf4w",
    category: "Xã hội",
  },
  {
    id: 6,
    title:
      "Muôn kiểu chống nắng của người dân khi xếp hàng nhận chỗ hàng chục tiếng trước giờ tổng duyệt A80",
    content:
      "Buổi tổng duyệt diễu binh, diễu hành kỷ niệm 80 năm Cách mạng tháng Tám và Quốc khánh 2/9 (nhiệm vụ A80) diễn ra vào 7h thứ Bảy, ngày 30/8. Tuy nhiên ngay từ sáng ngày 29/8, nhiều người dân đã đổ về các tuyến phố trung tâm túc trực sẵn trước 24h đồng hồ với mong muốn có được vị trí đẹp theo dõi đoàn diễu binh diễu hành di chuyển qua.",
    author: "Ngô Văn E",
    date: "2025-08-25T08:10:00Z",
    image:
      "https://kenh14cdn.com/thumb_w/640/203336854389633024/2025/8/29/photoai-1756455288078590911062.jpg",
    category: "Xã hội",
  },
  {
    id: 7,
    title: "Khoa học công nghệ đồng hành cùng dân tộc",
    content:
      "Khoa học công nghệ đã cùng Việt Nam vượt qua chiến tranh, kiến thiết đất nước và từng bước hội nhập, phát triển, theo Bộ trưởng Khoa học và Công nghệ Nguyễn Mạnh Hùng. Thông điệp được Bộ trưởng nói tại Diễn đàn Tương lai của Khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số, sáng 29/8. Sự kiện được tổ chức trong khuôn khổ Triển lãm thành tựu đất nước 80 năm, tại Đông Anh, Hà Nội. Sự kiện có sự tham gia của các lãnh đạo, nhà khoa học trong và ngoài nước",
    author: "Ngô Văn E",
    date: "2025-08-25T08:10:00Z",
    image:
      "https://i1-vnexpress.vnecdn.net/2025/08/29/f239cc353552be0ce743-175645829-2592-4457-1756458386.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=y40wocenlCvTJFVv4uuk-A",
    category: "Công nghệ",
  },
  {
    id: 8,
    title: "Khán giả xếp hàng nhận vé 'concert quốc gia'",
    content:
      "Một trong những người đầu tiên được vào nhận vé. Anh cho biết đến xếp hàng từ 17h ngày 28/8. Ban tổ chức không thông báo số lượng vé sẽ phát. Chương trình mang tên 80 năm hành trình Độc lập - Tự do - Hạnh phúc, diễn ra tối 1/9 ở Sân vận động Mỹ Đình, dự kiến có 30.000 khán giả. Show quy tụ các nghệ sĩ như Thanh Lam, Mỹ Tâm, Tùng Dương, Đăng Dương. Chương trình được quảng bá là 'concert quốc gia đặc biệt', được mong chờ do là sự kiện âm nhạc lớn cuối cùng trước ngày 2/9.",
    author: "Ngô Văn E",
    date: "2025-08-25T08:10:00Z",
    image:
      "https://i1-giaitri.vnecdn.net/2025/08/29/442bc17a0220897ed031-1756435957-1756437123-1756437654.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=n2vCdaKCxjS8oDyZofUUCQ",
    category: "Giải trí",
  },
  {
    id: 9,
    title: "Ông Nguyễn Văn Đạt dự kiến bán hơn 9% vốn Phát Đạt",
    content:
      "Khối cổ phiếu sắp chuyển nhượng trị giá khoảng 2.160 tỷ đồng tính theo giá đóng cửa phiên gần nhất là 24.550 đồng. Sau giao dịch, ông còn hơn 271 triệu cổ phiếu, tương ứng 27,7% vốn của Phát Đạt. Nếu tính thêm sở hữu của Công ty TNHH Phát Đạt Holdings do ông làm Chủ tịch, tỷ lệ nắm giữ là 36,45%.",
    author: "Ngô Văn E",
    date: "2025-08-25T08:10:00Z",
    image:
      "https://i1-kinhdoanh.vnecdn.net/2025/08/29/PDR-1756459500-8234-1756459740.png?w=680&h=0&q=100&dpr=1&fit=crop&s=qv1YZvxDpqPnrud-saPscQ",
    category: "Kinh doanh",
  },
  {
    id: 10,
    title:
      "[2025] Hướng dẫn đăng ký bảo hiểm y tế cho người nước ngoài ở Hàn Quốc",
    content: `Trước đây theo luật bảo hiểm y tế của Hàn Quốc cũ thì chỉ có lao động nước ngoài, 
    hay những người đi làm tại công ty Hàn Quốc mới phải đóng bảo hiểm y tế hàng tháng. 
    Những người nước ngoài cư trú theo visa theo diện du học sinh, kinh doanh, 
    hay thăm người thân thì có thể tùy chọn tham gia hoặc không tham gia bảo hiểm địa phương theo khu vực sinh sống.`,
    author: "Ngô Văn E",
    date: "2025-08-25T08:10:00Z",
    image:
      "https://duhocsunny.edu.vn/wp-content/uploads/2021/07/bao-hiem-y-te-quoc-dan-2.jpg",
    category: "Văn Hóa Hàn Quốc",
  },
  {
    id: 11,
    title: "Những điều cần biết về Ngày Nhà giáo Hàn Quốc 15/5",
    content: `Nguồn gốc ngày Nhà giáo Hàn Quốc 15/5 Tương tự như Ngày Nhà giáo Việt Nam 20/11,
              Ngày Nhà giáo của Hàn Quốc (trong tiếng Hàn là 스승의 날) được tổ chức vào ngày 15/5 hàng năm.
              Đây là một trong những ngày lễ quan trọng thể hiện truyền thống tôn sư trọng đạo của đất nước này.
              Nhân ngày Hội chữ thập đỏ thế giới mùng 8 tháng 5 năm 1958, một nhóm thanh niên Hàn Quốc đã tổ chức sự kiện tặng quà tri ân
              và giúp đỡ các giáo viên gặp khó khăn, đã về hưu hoặc đang bị bệnh. Thông qua sự kiện ý nghĩa đó,
              nhóm đã đề xuất ý tưởng thành lập một ngày dành riêng cho những nhà giáo.`,
    author: "Ngô Văn E",
    date: "2025-08-25T08:10:00Z",
    image:
      "https://duhocsunny.edu.vn/wp-content/uploads/2021/05/ngay-nha-giao-han-quoc-1.jpg",
    category: "Văn Hóa Hàn Quốc",
  },

  // tin công nghệ
  {
    id: 12,
    title: "OpenAI ra mắt GPT-5 với nhiều cải tiến vượt trội",
    content:
      "OpenAI vừa công bố GPT-5, phiên bản AI mạnh mẽ với khả năng xử lý văn bản, hình ảnh và âm thanh. Nhiều chuyên gia đánh giá đây sẽ là bước ngoặt lớn trong lĩnh vực trí tuệ nhân tạo.",
    author: "Nguyễn Văn A",
    date: "2025-08-28T09:00:00Z",
    image:
      "https://i1-sohoa.vnecdn.net/2024/05/14/mira-gpt4o-6566-1715652197.png?w=680&h=0&q=100&dpr=1&fit=crop&s=RtJMQMxES9sleGEFAtBD0w",
    category: "Công nghệ",
  },
  {
    id: 13,
    title: "OpenAI ra mắt GPT-5 với nhiều cải tiến vượt trội",
    content:
      "OpenAI vừa công bố GPT-5, phiên bản AI mạnh mẽ với khả năng xử lý văn bản, hình ảnh và âm thanh. Nhiều chuyên gia đánh giá đây sẽ là bước ngoặt lớn trong lĩnh vực trí tuệ nhân tạo.",
    author: "Nguyễn Văn A",
    date: "2025-08-28T09:00:00Z",
    image:
      "https://i1-sohoa.vnecdn.net/2024/05/14/mira-gpt4o-6566-1715652197.png?w=680&h=0&q=100&dpr=1&fit=crop&s=RtJMQMxES9sleGEFAtBD0w",
    category: "Công nghệ",
  },
  {
    id: 14,
    title: "OpenAI ra mắt GPT-5 với nhiều cải tiến vượt trội",
    content:
      "OpenAI vừa công bố GPT-5, phiên bản AI mạnh mẽ với khả năng xử lý văn bản, hình ảnh và âm thanh. Nhiều chuyên gia đánh giá đây sẽ là bước ngoặt lớn trong lĩnh vực trí tuệ nhân tạo.",
    author: "Nguyễn Văn A",
    date: "2025-08-28T09:00:00Z",
    image:
      "https://i1-sohoa.vnecdn.net/2024/05/14/mira-gpt4o-6566-1715652197.png?w=680&h=0&q=100&dpr=1&fit=crop&s=RtJMQMxES9sleGEFAtBD0w",
    category: "Công nghệ",
  },
  {
    id: 15,
    title: "OpenAI ra mắt GPT-5 với nhiều cải tiến vượt trội",
    content:
      "OpenAI vừa công bố GPT-5, phiên bản AI mạnh mẽ với khả năng xử lý văn bản, hình ảnh và âm thanh. Nhiều chuyên gia đánh giá đây sẽ là bước ngoặt lớn trong lĩnh vực trí tuệ nhân tạo.",
    author: "Nguyễn Văn A",
    date: "2025-08-28T09:00:00Z",
    image:
      "https://i1-sohoa.vnecdn.net/2024/05/14/mira-gpt4o-6566-1715652197.png?w=680&h=0&q=100&dpr=1&fit=crop&s=RtJMQMxES9sleGEFAtBD0w",
    category: "Công nghệ",
  },
  {
    id: 16,
    title: "OpenAI ra mắt GPT-5 với nhiều cải tiến vượt trội",
    content:
      "OpenAI vừa công bố GPT-5, phiên bản AI mạnh mẽ với khả năng xử lý văn bản, hình ảnh và âm thanh. Nhiều chuyên gia đánh giá đây sẽ là bước ngoặt lớn trong lĩnh vực trí tuệ nhân tạo.",
    author: "Nguyễn Văn A",
    date: "2025-08-28T09:00:00Z",
    image:
      "https://i1-sohoa.vnecdn.net/2024/05/14/mira-gpt4o-6566-1715652197.png?w=680&h=0&q=100&dpr=1&fit=crop&s=RtJMQMxES9sleGEFAtBD0w",
    category: "Công nghệ",
  },
  {
    id: 17,
    title: "OpenAI ra mắt GPT-5 với nhiều cải tiến vượt trội",
    content:
      "OpenAI vừa công bố GPT-5, phiên bản AI mạnh mẽ với khả năng xử lý văn bản, hình ảnh và âm thanh. Nhiều chuyên gia đánh giá đây sẽ là bước ngoặt lớn trong lĩnh vực trí tuệ nhân tạo.",
    author: "Nguyễn Văn A",
    date: "2025-08-28T09:00:00Z",
    image:
      "https://i1-sohoa.vnecdn.net/2024/05/14/mira-gpt4o-6566-1715652197.png?w=680&h=0&q=100&dpr=1&fit=crop&s=RtJMQMxES9sleGEFAtBD0w",
    category: "Công nghệ",
  },
  {
    id: 18,
    title: "OpenAI ra mắt GPT-5 với nhiều cải tiến vượt trội",
    content:
      "OpenAI vừa công bố GPT-5, phiên bản AI mạnh mẽ với khả năng xử lý văn bản, hình ảnh và âm thanh. Nhiều chuyên gia đánh giá đây sẽ là bước ngoặt lớn trong lĩnh vực trí tuệ nhân tạo.",
    author: "Nguyễn Văn A",
    date: "2025-08-28T09:00:00Z",
    image:
      "https://i1-sohoa.vnecdn.net/2024/05/14/mira-gpt4o-6566-1715652197.png?w=680&h=0&q=100&dpr=1&fit=crop&s=RtJMQMxES9sleGEFAtBD0w",
    category: "Công nghệ",
  },
  {
    id: 19,
    title: "OpenAI ra mắt GPT-5 với nhiều cải tiến vượt trội",
    content:
      "OpenAI vừa công bố GPT-5, phiên bản AI mạnh mẽ với khả năng xử lý văn bản, hình ảnh và âm thanh. Nhiều chuyên gia đánh giá đây sẽ là bước ngoặt lớn trong lĩnh vực trí tuệ nhân tạo.",
    author: "Nguyễn Văn A",
    date: "2025-08-28T09:00:00Z",
    image:
      "https://i1-sohoa.vnecdn.net/2024/05/14/mira-gpt4o-6566-1715652197.png?w=680&h=0&q=100&dpr=1&fit=crop&s=RtJMQMxES9sleGEFAtBD0w",
    category: "Công nghệ",
  },
  {
    id: 20,
    title: "OpenAI ra mắt GPT-5 với nhiều cải tiến vượt trội",
    content:
      "OpenAI vừa công bố GPT-5, phiên bản AI mạnh mẽ với khả năng xử lý văn bản, hình ảnh và âm thanh. Nhiều chuyên gia đánh giá đây sẽ là bước ngoặt lớn trong lĩnh vực trí tuệ nhân tạo.",
    author: "Nguyễn Văn A",
    date: "2025-08-28T09:00:00Z",
    image:
      "https://i1-sohoa.vnecdn.net/2024/05/14/mira-gpt4o-6566-1715652197.png?w=680&h=0&q=100&dpr=1&fit=crop&s=RtJMQMxES9sleGEFAtBD0w",
    category: "Công nghệ",
  },
  {
    id: 21,
    title: "OpenAI ra mắt GPT-5 với nhiều cải tiến vượt trội",
    content:
      "OpenAI vừa công bố GPT-5, phiên bản AI mạnh mẽ với khả năng xử lý văn bản, hình ảnh và âm thanh. Nhiều chuyên gia đánh giá đây sẽ là bước ngoặt lớn trong lĩnh vực trí tuệ nhân tạo.",
    author: "Nguyễn Văn A",
    date: "2025-08-28T09:00:00Z",
    image:
      "https://i1-sohoa.vnecdn.net/2024/05/14/mira-gpt4o-6566-1715652197.png?w=680&h=0&q=100&dpr=1&fit=crop&s=RtJMQMxES9sleGEFAtBD0w",
    category: "Công nghệ",
  },
  {
    id: 22,
    title: "OpenAI ra mắt GPT-5 với nhiều cải tiến vượt trội",
    content:
      "OpenAI vừa công bố GPT-5, phiên bản AI mạnh mẽ với khả năng xử lý văn bản, hình ảnh và âm thanh. Nhiều chuyên gia đánh giá đây sẽ là bước ngoặt lớn trong lĩnh vực trí tuệ nhân tạo.",
    author: "Nguyễn Văn A",
    date: "2025-08-28T09:00:00Z",
    image:
      "https://i1-sohoa.vnecdn.net/2024/05/14/mira-gpt4o-6566-1715652197.png?w=680&h=0&q=100&dpr=1&fit=crop&s=RtJMQMxES9sleGEFAtBD0w",
    category: "Công nghệ",
  },
];



export const mockArticles: Article[] = [
  {
    id: 1,
    title: "Bảng số đếm tiếng Hàn [thuần Hàn, Hán Hàn] cách đọc chi tiết",
    description:
      "Khi bắt đầu học tiếng Hàn, bảng chữ cái và bảng chữ số tiếng Hàn là hai “viên gạch” đầu tiên...",
    views: 81554,
    image: "https://storage.googleapis.com/a1aa/image/3e9cc041-800c-4962-2ba2-5d5a1fefeedd.jpg",
    category: "hoc-tieng-han",
  },
  {
    id: 2,
    title: "Học tiếng Hàn ở trung tâm có được cấp bằng không?",
    description:
      "Bảng cấp tiếng Hàn là một trong những yếu tố quan trọng có thể giúp bạn tăng cơ hội việc làm...",
    views: 1071,
    image: "https://storage.googleapis.com/a1aa/image/f43b354f-de52-465e-3458-0004260a7faf.jpg",
    category: "hoc-tieng-han",
  },
  {
    id: 3,
    title: "Định ngữ trong tiếng Hàn, ví dụ và cách sử dụng từ A – Z",
    description:
      "Định ngữ trong tiếng Hàn là kiến thức ngữ pháp quan trọng mà bất kì ai cũng cần nắm được...",
    views: 52080,
    image: "https://storage.googleapis.com/a1aa/image/33019fb5-289d-4ead-d296-7816fdcfb822.jpg",
    category: "hoc-tieng-han",
  },
  {
    id: 4,
    title: "Không thích tiếng Hàn là gì, cách dùng từ A tới Z",
    description:
      "Một trong những phổ biến được dùng nhiều trong giao tiếp là “không thích”...",
    views: 5915,
    image: "https://storage.googleapis.com/a1aa/image/076fc953-fbb5-40d5-4aa4-46da5ea27261.jpg",
    category: "hoc-tieng-han",
  },
  {
    id: 5,
    title: "Những câu chúc ngủ ngon tiếng Hàn hay nhất",
    description:
      "Trong giao tiếp tiếng Hàn cơ bản, chúc ngủ ngon là một câu giao tiếp quan trọng...",
    views: 2899,
    image: "https://storage.googleapis.com/a1aa/image/439f0608-b47f-4e49-9dc3-007db9a62973.jpg",
    category: "hoc-tieng-han",
  },
  {
    id: 6,
    title: "Hướng dẫn cách nói giờ trong tiếng Hàn chuẩn nhất",
    description:
      "Việc nói giờ và điện đắt thời gian là một chủ đề giao tiếp hàng ngày đơn giản...",
    views: 24545,
    image: "https://storage.googleapis.com/a1aa/image/33585444-7784-4348-c12a-7e680dfcbfb1.jpg",
    category: "lich-khai-giang",
  },
  {
    id: 7,
    title: "Cách nói ngày tháng trong tiếng Hàn dễ nhớ nhất",
    description:
      "Ngày tháng là kiến thức cơ bản cần thiết để giao tiếp trong cuộc sống hàng ngày...",
    views: 17300,
    image: "https://storage.googleapis.com/a1aa/image/3e9cc041-800c-4962-2ba2-5d5a1fefeedd.jpg",
    category: "lich-khai-giang",
  },
  {
    id: 8,
    title: "Các mẫu câu tiếng Hàn giao tiếp thông dụng",
    description:
      "Bắt đầu học giao tiếp bằng những mẫu câu đơn giản sẽ giúp bạn tự tin hơn...",
    views: 32400,
    image: "https://storage.googleapis.com/a1aa/image/f43b354f-de52-465e-3458-0004260a7faf.jpg",
    category: "lich-khai-giang",
  },
  {
    id: 9,
    title: "Ngữ pháp ‘이다’ trong tiếng Hàn – cách dùng và ví dụ",
    description:
      "‘이다’ là một trong những ngữ pháp cơ bản mà người học tiếng Hàn phải nắm chắc...",
    views: 14250,
    image: "https://storage.googleapis.com/a1aa/image/33019fb5-289d-4ead-d296-7816fdcfb822.jpg",
    category: "lich-khai-giang",
  },
  {
    id: 10,
    title: "Số điện thoại trong tiếng Hàn đọc thế nào?",
    description:
      "Cách đọc số điện thoại bằng tiếng Hàn thường gây nhầm lẫn cho người mới học...",
    views: 8900,
    image: "https://storage.googleapis.com/a1aa/image/076fc953-fbb5-40d5-4aa4-46da5ea27261.jpg",
    category: "lich-khai-giang",
  },
  {
    id: 11,
    title: "Các câu chào hỏi cơ bản trong tiếng Hàn",
    description:
      "Chào hỏi là kỹ năng cơ bản trong giao tiếp hàng ngày, đặc biệt khi mới làm quen...",
    views: 19850,
    image: "https://storage.googleapis.com/a1aa/image/439f0608-b47f-4e49-9dc3-007db9a62973.jpg",
    category: "lich-thi-topik",
  },
  {
    id: 12,
    title: "Cách nói thời tiết bằng tiếng Hàn",
    description:
      "Một số câu miêu tả thời tiết đơn giản sẽ giúp bạn trò chuyện tự nhiên hơn...",
    views: 13400,
    image: "https://storage.googleapis.com/a1aa/image/33585444-7784-4348-c12a-7e680dfcbfb1.jpg",
    category: "lich-thi-topik",
  },
  {
    id: 13,
    title: "Học phát âm chuẩn tiếng Hàn từ cơ bản đến nâng cao",
    description:
      "Phát âm chuẩn là nền tảng để nghe và nói tiếng Hàn hiệu quả...",
    views: 27890,
    image: "https://storage.googleapis.com/a1aa/image/3e9cc041-800c-4962-2ba2-5d5a1fefeedd.jpg",
    category: "lich-thi-topik",
  },
  {
    id: 14,
    title: "Cách dùng thì hiện tại tiếp diễn trong tiếng Hàn",
    description:
      "Thì hiện tại tiếp diễn được dùng để mô tả hành động đang xảy ra tại thời điểm nói...",
    views: 7400,
    image: "https://storage.googleapis.com/a1aa/image/f43b354f-de52-465e-3458-0004260a7faf.jpg",
    category: "lich-thi-topik",
  },
  {
    id: 15,
    title: "Học tiếng Hàn qua phim ảnh – phương pháp hiệu quả",
    description:
      "Xem phim Hàn không chỉ để giải trí mà còn giúp bạn học ngôn ngữ một cách tự nhiên...",
    views: 35900,
    image: "https://storage.googleapis.com/a1aa/image/33019fb5-289d-4ead-d296-7816fdcfb822.jpg",
    category: "lich-thi-topik",
  },
];




