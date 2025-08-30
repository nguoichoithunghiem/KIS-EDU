import type { News } from "../types";
import type { NewsWithSections } from "../types";
export const mockNews: NewsWithSections[] = [
  {
    id: 1,
    category: "Sự kiện KIS",
    title:
      "SUNNY VINH DỰ NHẬN CHỨNG NHẬN ĐỐI TÁC XUẤT SẮC TỪ ĐẠI HỌC HANSUNG – TOP 1",
    date: "2025-08-29",
    image:
      "https://duhocsunny.edu.vn/wp-content/uploads/2025/02/taoanhdep_lam_net_anh_17205-2048x1638.jpeg",
    content:
      "Đại học HANSUNG – TOP 1 trao tặng chứng nhận ️ĐỐI TÁC XUẤT SẮC️ cho SUNNY. Đánh dấu cột mốc quan trọng trên hành trình khẳng định vị thế và sự uy tín của SUNNY trong lĩnh vực du học Hàn Quốc.",
    author: "văn trường",
    sections: [
      {
        id: "SUNNY NHẬN CHỨNG NHẬN XUẤT SẮC",
        title: "1. SUNNY NHẬN CHỨNG NHẬN XUẤT SẮC",
        content: `Ngày 21/2/2025, SUNNY xin được chia sẻ một tin vui vô cùng lớn, một cột mốc đáng tự hào trên hành trình chắp cánh ước mơ du học Hàn Quốc cho các bạn trẻ Việt Nam: Đại học HANSUNG – một trong những “ngôi sao” của nền giáo dục Hàn Quốc đã trao tặng chứng nhận ️ĐỐI TÁC XUẤT SẮC️ cho Trung tâm du học Hàn Quốc SUNNY.
       Đây không chỉ là một chứng nhận, mà còn là minh chứng cho sự nỗ lực không ngừng nghỉ, sự tận tâm và chuyên nghiệp mà SUNNY đã và đang mang đến cho hàng ngàn học sinh, sinh viên trên con đường chinh phục giấc mơ du học hơn suốt hơn 6 năm qua. `,
      },
      {
        id: "HANSUNG – TRƯỜNG TOP 1 THƯ MỜI",
        title: "2. HANSUNG – TRƯỜNG TOP 1 THƯ MỜI",
        content: `HANSUNG, điểm đến lý tưởng cho các bạn Sunnier.  Không chỉ nổi tiếng về chất lượng đào tạo đạt tiêu chuẩn cao, môi trường học tập, phát triển lý tưởng mà trường còn nổi tiếng về:

Nhiều chính sách ưu đãi HỌC BỔNG dành cho sinh viên quốc tế (đặc biệt là học viên của SUNNY),… 
Nằm trong danh sách 100 trường đại học chất lượng cao tại Hàn.
Thế mạnh về: Giáo dục văn hóa và ngôn ngữ Hàn, chuyên ngành Kinh tế, Giải trí truyền thông, chuyên ngành Làm đẹp, Phần mềm,…
Với chứng nhận đối tác xuất sắc từ Đại học HANSUNG, SUNNY cam kết sẽ tiếp tục nỗ lực hết mình để mang đến những dịch vụ tư vấn du học chất lượng, giúp các bạn trẻ Việt Nam hiện thực hóa ước mơ du học Hàn Quốc.`,
      },
    ],
  },
  {
    id: 2,
    category: "Văn Hóa Hàn Quốc",
    title:
      "[2025] Hướng dẫn đăng ký bảo hiểm y tế cho người nước ngoài ở Hàn Quốc",
    date: "2025-08-29",
    image:
      "https://duhocsunny.edu.vn/wp-content/uploads/2021/07/bao-hiem-cho-nguoi-nuoc-ngoai-o-han-quoc-1.png",
    content:
      "Bảo hiểm y tế quốc dân ở Hàn Quốc là loại bảo hiểm do tổng công ty bảo hiểm y tế ban hành. Bạn vẫn còn nhiều băn khoăn và thắc mắc về bảo hiểm y tế quốc dân này. Hôm nay Sunny sẽ giải đáp thắc mắc về hướng dẫn đăng ký bảo hiểm y tế cho người nước ngoài ở Hàn Quốc qua bài viết dưới đây nhé",
    author: "văn trường",
    sections: [
      {
        id: "Quy định chung về bảo hiểm y tế Hàn Quốc",
        title: "Quy định chung về bảo hiểm y tế Hàn Quốc",
        content: `Trước đây theo luật bảo hiểm y tế của Hàn Quốc cũ thì chỉ có lao động nước ngoài, hay những người đi làm tại công ty Hàn Quốc mới phải đóng bảo hiểm y tế hàng tháng. Những người nước ngoài cư trú theo visa theo diện du học sinh, kinh doanh, hay thăm người thân thì có thể tùy chọn tham gia hoặc không tham gia bảo hiểm địa phương theo khu vực sinh sống.

Từ 16/7/2019 thì người nước ngoài cư trú 6 tháng trở lên BỊ BẮT BUỘC phải tham gia bảo hiểm y tế tại Hàn Quốc

Đối với du học sinh cư trú trên 6 tháng bắt buộc tham gia bảo hiểm y tế quốc dân vào ngày 01/03/2021. Như vậy du học sinh nước ngoài ( D-2, D-4, người nước ngoài học tập có thể mua bảo hiểm y tế theo khu vực)

Hiện tại theo thống kế tại Hàn Quốc thì có khoảng 400.000 người nước ngoài sẽ tham gia bảo hiểm tại địa phương

Với mức chi phí bảo hiểm hàng tháng tại địa phương từ 110.000 KRW`,
      },
      {
        id: "Lợi ích của bảo hiểm y tế quốc dân",
        title: "Lợi ích của bảo hiểm y tế quốc dân",
        content: `Sau đây là một số quyền lợi bảo hiểm y tế cho người nước ngoài ở Hàn Quốc.

Một người trong gia đình tham gia bảo hiểm y tế quốc dân thì cả nhà – những người phụ thuộc được hưởng theo và không mất thêm chi phí
Khi khám sức khỏe định kỳ thì được chi trả 100% chi phí khám chữa bệnh, ngoài một số bệnh như ung thư thì bảo hiểm chi trả 90%
Hỗ trợ khi mang thai: đơn thai là 600 won, đa thai là 900 won
Các chi phí khám chữa bệnh được bảo hiểm chi trả
– Chi trả 80% đối với điều trị nội trú
– Chi trả 60% đối với điều trị ngoại trú theo quy định`,
      },
      {
        id: "Những bất lợi khi không đóng bảo hiểm y tế ở Hàn Quốc",
        title: "Những bất lợi khi không đóng bảo hiểm y tế ở Hàn Quốc",
        content: `Khi không tham gia bảo hiểm y tế quốc dân thì người nước ngoài không đóng bảo hiểm sẽ phải tự thanh toán toàn bộ các chi phí khám chữa bệnh ở Hàn Quốc, nếu có chậm trễ đóng bảo hiểm y tế thì bạn cũng không được hưởng bất kỳ một ưu đãi nào.
Nếu bạn chậm đóng bảo hiểm trên 500.000 KRW hoặc chậm phí phạt giao thông trên 100.000 KRW bạn có thể bị gặp hạn chế khi gia hạn visa. Bộ tư pháp và bộ y tế sẽ dựa vào những tình trạng đóng bảo hiểm để xem xét tư cách lưu trú về điều kiện gia hạn visa.`,
      },
      {
        id: "Cách đăng ký tham gia bảo hiểm y tế cho người nước ngoài ở Hàn Quốc",
        title:
          "Cách đăng ký tham gia bảo hiểm y tế cho người nước ngoài ở Hàn Quốc",
        content: `Bảo hiểm y tế được phân chia ra làm hai đối tượng đăng ký đó là bảo hiểm theo nơi làm việc dành cho người đi làm và những người mua bảo hiểm theo khu vực sinh sống.

Bảo hiểm theo nơi làm việc dành cho người đi làm: Người nước ngoài làm việc hợp pháp tại Hàn Quốc đều phải đăng ký tham gia bảo hiểm y tế quốc dân, vậy thì chỉ cần công ty đăng ký cho là đủ
Bảo hiểm theo khu vực sinh sống: Người nước ngoài cư trú tại Hàn Quốc trên 6 tháng trở nên bắt buộc tham gia bảo hiểm y tế và mang chứng minh thư người nước ngoài đến văn phòng bảo hiểm nơi mình sinh sống để đăng ký tham gia.
Nếu bạn đã đăng ký tham gia bảo hiểm y tế thì có thể thêm tên người thân trong đình mà không phải đóng thêm bất kỳ một khoản nào.`,
      },
    ],
  },
];

export const mockNewsWithSections: NewsWithSections[] = [
  {
    id: 1,
    category: "Chi phí du học Hàn",
    title: "Tổng chi phí du học Hàn Quốc 2025 cần bao nhiêu tiền",
    date: "2025-08-29",
    image:
      "https://duhocsunny.edu.vn/wp-content/uploads/2024/11/chi-phi-du-hoc-han-quoc-7.jpg",
    content: "Tóm tắt nội dung chính...",
    author: "văn trường",
    sections: [
      {
        id: "intro",
        title: "Tổng chi phí du học Hàn Quốc cần bao nhiêu tiền?",
        content: `Theo kinh nghiệm của SUNNY thì mức chi phí du học Hàn Quốc chỉ khoảng 180.000.000 – 300.000.000 VND. Chỉ các trường có mức học phí đắt đỏ hoặc 
        sinh viên đi theo hệ du học nghề thì mới lên đến 300.000.000.
Chi phí du học Hàn Quốc bậc đại học / thạc sĩ có thể sẽ rẻ hơn mức trung bình 180.000.000 – 220.000.000 VND. 
Bởi vì lần đầu đóng học phí, bạn sẽ chỉ phải đóng học phí nửa kỳ rồi sang Hàn đóng tiếp và còn có các chương trình học bổng của các trường đại học rất hấp dẫn, 
giúp bạn tiết kiệm chi phí.`,
      },
      {
        id: "chitiet",
        title: "Chi tiết chi phí du học Hàn Quốc cần chuẩn bị",
        content: `Thật khó để có thể đưa ra một con số chính xác bởi vì chi phí du học Hàn Quốc phụ thuộc vào rất nhiều yếu tố như:

Năng lực tiếng Hàn của mỗi người.
Lựa chọn ngôi trường đăng ký theo học.
Tiền làm giấy tờ hồ sơ, tiền vé máy bay, kế hoạch chi tiêu sinh hoạt,…
Tuy nhiên, dưới đây là những thông tin cơ bản nhất về chi phí du học Hàn Quốc mà bạn cần chuẩn bị.`,
      },
      {
        id: "applications",
        title: "Học tiếng Hàn và thi chứng chỉ tiếng Hàn",
        content: `Đây là khoản phí du học Hàn Quốc bạn phải trả khi còn ở Việt Nam.
Chi phí học tiếng Hàn và thi chứng chỉ tiếng Hàn tại Việt Nam thường dao động trong khoảng từ 8 – hơn 20 triệu VND.
Với các bạn đi du học tiếng thì không yêu cần phải có chứng chỉ TOPIK nhưng vốn tiếng Hàn của bạn phải đảm bảo đủ để giao tiếp khi phỏng vấn với trường và đại sứ quán cũng như trong cuộc sống sinh hoạt thường ngày. Do đó, bạn cần tham gia một khóa học tiếng Hàn cơ bản.

Những bạn đi du học đại học/ thạc sỹ thì yêu cầu tối thiểu là cần phải có TOPIK 3 hoặc 4 trở lên.

Nếu chưa có chứng chỉ Topik bạn vẫn có thể đi du học đại học, thạc sỹ nhưng bạn bắt buộc phải hoàn thành khóa học tiếng tại trường ở Hàn Quốc có chất lượng đào tạo tương đương với trường bạn đăng kí.
Đến khi bạn có chứng chỉ Topik theo yêu cầu chuyên ngành mà bạn đăng ký thì có thể nộp hồ sơ lên học Cao đẳng, Đại, Thạc sỹ kỳ tháng 3 hoặc tháng 9.
Học và thi chứng chỉ tiếng Hàn Topik 2 hoặc Klat 2 là khoản tiền không thể thiếu trong chi phí du học nghề tại Hàn Quốc.
Chứng chỉ tiếng Hàn là điều kiện bắt buộc để bạn được phép sang Hàn du học. Chưa biết tiếng thì bạn phải chi trả cả tiền học và tiền thi, nếu đã có vốn tiếng Hàn đủ để thi thì bạn chỉ mất lệ phí thi chứng chỉ thôi.
`,
      },
      {
        id: "future",
        title: "Làm hồ sơ du học Hàn Quốc (xin visa)",
        content: `Chi phí làm hồ sơ du học Hàn hồ sơ du học Hàn của mỗi trung tâm sẽ có sự chênh lệch khác nhau, nhìn chung là dao động trong khoảng 39.000.000 – hơn 45.000.000 VND. Chi phí xử lý hồ sơ tại SUNNY là 39.000.000 VND.
        Khi đăng ký làm hồ sơ qua các trung tâm có một vấn đề bạn cần lưu ý là làm visa. Ở một số trung tâm thì bạn phải trả riêng tiền làm visa (không nằm trong chi phí làm hồ sơ) nhưng có những trung tâm như SUNNY thì phí xử lý hồ sơ đã bao gồm cả tiền làm visa du học Hàn Quốc.`,
      },
    ],
  },
  {
    id: 2,
    category: "Học bổng du học Hàn",
    title:
      "4 loại học bổng du học Hàn Quốc và 6 lưu ý để chuẩn bị một bộ hồ sơ chỉn chu nhất",
    date: "2025-08-20",
    image:
      "https://i1-vnexpress.vnecdn.net/2025/08/29/20250722-003720-6974-1756439501.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=rjJz6JxDZhRzfcRUEWgy3Q",
    content: `Học bổng du học Hàn Quốc là niềm mơ ước của biết bao bạn trẻ đã trót “phải lòng” đất nước xinh đẹp và lãng mạn này. Thế nhưng không gia đình bạn nào cũng có đủ khả năng để đi được du học. Vậy làm thế nào để biến giấc mơ đó thành hiện thực?

Tất tần tật những thông tin về học bổng du học Hàn dưới đây sẽ giúp bạn không nhỏ trên hành trình tìm kiếm và săn học bổng thành công. Hãy cùng tham khảo nhé!`,
    author: "văn trường",
    sections: [
      {
        id: "what-is-blockchain",
        title: "Xin học bổng du học Hàn Quốc có khó không?",
        content: `Với những bạn muốn đi du học nhưng không có tiền thì phương án khả thi nhất chính là săn học bổng phải không nào?

Cũng giống như tất cả các bạn du học sinh khác, các bạn đi du học Hàn Quốc luôn băn khoăn, lo lắng, không biết xin học bổng có khó không.

Thật ra, câu trả lời tùy thuộc vào cảm quan của mỗi người, có thể dễ đối với bạn này, nhưng lại là khó với những bạn khác.
Có rất nhiều các chương trình học bổng từ nhà trường, các tổ chức thậm chí cả học bổng từ chính phủ với mức hỗ từ 30% – 100%
Nền giáo dục đa dạng, chất lượng đào tạo tốt nhưng chi phí lại rất phải chăng.
Cơ sở vật chất tân tiến phù hợp với chương trình đào tạo của sinh viên
Hàn Quốc đang là đất nước có nền kinh tế phát triển mạnh mẽ nên cơ hội làm việc rất lớn (Sau 6 tháng nhập học thì sinh viên có thể bắt đầu đi làm thêm…
Theo Trung tâm Du học SUNNY, điều quan trọng nhất là bạn phải tìm hiểu kĩ càng về các chương trình học bổng du học Hàn Quốc.

Chẳng hạn, bạn muốn săn học bổng du học Hàn Quốc ngành kinh tế, điều đầu tiên là bạn phải tìm hiểu thông tin về các chương trình học bổng ngành kinh tế(tổ chức nào, trường nào có học bổng).

Sau đó, so sánh điều kiện nhận học bổng giữa các chương trình và tìm ra loại học bổng phù hợp nhất với bản thân. Chỉ khi nắm chắc thông tin, bạn mới nắm chắc được phần thắng trong tay.

>> Click xem chi tiết về điều kiện, chi phí du học Hàn Quốc mới nhất`,
      },
      {
        id: "how-it-works",
        title: "Các loại học bổng du học Hàn Quốc cho du học sinh Việt Nam",
        content: `Các bạn du học sinh Việt Nam có thể săn các loại học bổng du học Hàn Quốc sau:

Học bổng của các trường đại học Hàn Quốc
Học bổng Chính phủ nước Hàn Quốc
Học bổng của các tổ chức, doanh nghiệp
Học bổng Giáo sư
Trong đó, đối với học bổng của các trường đại học thì SUNNY có thể hỗ trợ bạn xin học bổng; các chương trình học bổng còn lại thì bạn có thể tự apply nhưng sẽ không dễ dàng săn được đâu nhé vì số lượng học bổng rất ít và sức cạnh tranh vô cùng cao.

Nếu bạn muốn biết với điểm GPA cũng như trình độ ngoại ngữ của mình có thể xin được loại học bổng nào thì hãy liên lạc với SUNNY để biết thêm thông tin ngay nhé!`,
      },
      {
        id: "Học bổng",
        title: "Học bổng của các trường đại học Hàn Quốc",
        content: `So với các chương trình học bổng khác thì học bổng của các trường đại học Hàn Quốc bao giờ cũng dễ săn hơn. Đặc biệt, các bạn học viên của SUNNY còn được chúng mình hỗ trợ xin học bổng, giúp các bạn tiết kiệm một phần học phí.

SUNNY đã xin học bổng thành công cho các bạn:

Bạn Hứa Hoài (Trường đại học Ajou) trị giá 1.400.000 Won (khoảng 28 triệu VND)
Bạn Lưu Ly (Đại học Soong-Sil) học bổng giảm 70% học phí = 2.589.000 Won (khoảng 52 triệu VND)
Bạn Phương Thảo (Đại học Kwangwoon) học bổng giảm 80% học phí,…
Ngoài ra, mỗi năm SUNNY đều tổ chức cuộc thi thường niên “Kế hoạch du học hoàn hảo” và trao học bổng học tiếng Hàn tại các trường Đại học Hàn Quốc cho các bạn thí sinh đạt giải. Đây là cơ hội giúp các bạn tiết kiệm được một khoản học phí không nhỏ đâu đó.

Không ít trường đại học ở Hàn Quốc (kể cả trường công lập và trường tư thục) có các chương trình học bổng đa dạng từ 30% – 100% học phí dành cho du học sinh. Học bổng được xét thường dựa vào một hoặc nhiều yếu tố sau:

Thành tích học tập xuất sắc
Năng lực ngoại ngữ tốt
Được khoa đề cử, giáo sư ở các trường đại học nước ngoài, viện nghiên cứu quốc gia và khoa công nhận,…
Bạn có thể tham khảo thông tin cụ thể về các chương trình học bổng bằng cách truy cập vào website của trường mà bạn muốn săn học bổng du học Hàn Quốc.

Các trường đại học có học bổng được du học sinh săn đón nhiều nhất phải kế đến:

Học bổng của trường đại học Chung Ang
Học bổng đại học Sejong
Học bổng của trường đại học Kyung Hee,…
Lưu ý: Chương trình đào tạo ngành y bậc đại học kéo dài trên 4 năm nên không nằm trong diện Học bổng Chính phủ. Vì vậy, các bạn muốn nhận học bổng du học Hàn Quốc ngành y có thể tìm hiểu loại học bổng này nhé!

Riêng đối với các bạn học viên của SUNNY, trung tâm luôn luôn hỗ trợ và đồng hành cùng các bạn xin học bổng. Nghĩa là, nếu bạn đủ điều kiện nhận học bổng của trường đại học mà bạn đăng ký du học, SUNNY sẽ giúp bạn làm hồ sơ xin học bổng luôn.

Chính vì vậy nếu bạn còn đang thắc mắc học bổng của từng trường cũng như điều kiện để nhận được những học bổng ấy thì hãy liên lạc ngay với SUNNY các bạn nhé!`,
      },
      {
        id: "Học bổng Chính phủ nước Hàn Quốc",
        title: "Học bổng Chính phủ nước Hàn Quốc",
        content: `Nếu bạn mong muốn được nhận học bổng du học Hàn Quốc toàn phần thì không thể không tìm hiểu học bổng chính phủ nước Hàn Quốc.

Nhằm mang đến cho các bạn sinh viên đại học, sau đại học, nghiên cứu sinh cơ hội học tập tại Hàn cũng như thúc đẩy giao lưu giáo dục và quan hệ hữu nghị giữa hai nước.

Chỉ tiêu mỗi năm sẽ thay đổi tuỳ theo ngân sách, thông thường là 120 suất học bổng toàn phần du học Hàn Quốc cho các bạn sinh viên Đại học theo chương trình 4 năm và 580 suất sau đại học (gồm học bổng du học thạc sĩ Hàn Quốc + du học tiến sĩ + du học nghiên cứu) cho học sinh của các nước. Các hạng mục học bổng chi trả:

Vé máy bay khứ hồi
Sinh hoạt phí: 800.000 – 1.500.000 won/ tháng
Hỗ trợ định cư và tìm nhà: 200.000 won (nhận 1 lần duy nhất)
Bảo hiểm y tế: 20.000 won/ tháng
Chi phí học tiếng: 800.000 won/ quý
Học phí: tối đa 5.000.000 won/ kỳ
Giải thưởng năng lực tiếng Hàn xuất sắc: 100.000 won/ tháng
Hỗ trợ nghiên cứu: 210.000 – 240.000 won/ học kỳ
Chi phí in luận án: 500.000 – 800.000 won
Hỗ trợ khi kết thúc khóa học: 100.000 won (nhận 1 lần duy nhất)
Với những bạn nhận được học bổng được Chính phủ đưa ra sẽ được miễn chứng minh tài chính du học Hàn Quốc.

Học bổng Chính phủ của Hàn Quốc có lẽ là học bổng khó săn nhất, sức cạnh tranh cực cao với các điều kiện tương đối khắt khe và khó nhằn:`,
      },
    ],
  },
];
