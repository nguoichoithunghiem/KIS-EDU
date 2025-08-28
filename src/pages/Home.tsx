import React, { useState, useEffect } from "react";
import slide1 from "../assets/banner1.jpg";
import slide2 from "../assets/banner2.jpg";
import slide3 from "../assets/banner3.png";
import info5 from "../assets/info5.png"
import info1 from "../assets/info1.png"
import info2 from "../assets/info2.png"
import info3 from "../assets/info3.png"
import info4 from "../assets/info4.png"
import avatar01 from "../assets/avatar-01.jpg"
import avatar02 from "../assets/avatar-02.jpg"
import avatar03 from "../assets/avatar-03.jpg"
import avatar04 from "../assets/avatar-04.jpg"
import duhochangquoc from "../assets/duhochangquoc.jpg"
import soongsil from "../assets/soongsil-0-1.jpg"

const images = [slide1, slide2, slide3];

const Home = () => {
    const [current, setCurrent] = useState(0);

    // Tự động chuyển slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000); // 3 giây đổi slide
        return () => clearInterval(interval);
    }, []);

    // Chuyển slide thủ công
    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="w-full">
            {/* Slider */}
            <div className="w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden relative leading-none">
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Slide ${idx}`}
                        className={`w-full h-full object-cover transition-opacity duration-700 absolute top-0 left-0 block ${idx === current ? "opacity-100" : "opacity-0"
                            }`}
                        style={{ margin: 0 }}
                    />
                ))}

                {/* Mũi tên prev */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition"
                >
                    &#10094;
                </button>

                {/* Mũi tên next */}
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition"
                >
                    &#10095;
                </button>

                {/* Dot navigation */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full ${idx === current ? "bg-[#04339f]" : "bg-gray-400"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>

            {/* nút + đường kẻ */}
            <div className="flex items-center mt-6  w-5/6 mx-auto space-x-4">
                {/* Nút */}
                <button className="bg-[#04339f] text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                    GIỚI THIỆU VỀ KIS EDU
                </button>

                {/* Đường kẻ */}
                <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* thông tin giới thiệu */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-5/6 mx-auto">
                {/* Cột 1 */}
                <div>
                    <p className="text-justify leading-relaxed">
                        Trong 7 năm qua, KIS EDU luôn tự hào là một trong những đơn vị đi đầu trong lĩnh vực đào tạo, tư vấn du học, xử lý hồ sơ nhanh chóng, đặc biệt chi phí minh bạch 100%, cam kết không phát sinh. Trung tâm là đơn vị có tỷ lệ đỗ visa cao số 1 Việt Nam, là đối tác uy tín tại Việt Nam của các trường đại học Top 50+ Hàn Quốc. 4000+ học viên đã và đang theo học tại Hàn được SUNNY làm hồ sơ là minh chứng cao nhất cho chất lượng dịch vụ của SUNNY.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-[#04339f] text-white rounded hover:bg-blue-800 transition">Xem thêm</button>
                </div>

                {/* Cột 2 */}
                <div className="grid grid-cols-2 gap-6 justify-items-center">
                    <a href="/doi-ngu-lanh-dao" className="flex flex-col items-center text-center hover:scale-105 transition">
                        <img src={info1} alt="Đội Ngũ Lãnh Đạo" className="w-24 h-24 mb-3 object-cover" />
                        <p className="text-lg font-semibold text-blue-700">Đội Ngũ Lãnh Đạo</p>
                    </a>

                    <a href="/co-so-vat-chat" className="flex flex-col items-center text-center hover:scale-105 transition">
                        <img src={info2} alt="Cơ Sở Vật Chất" className="w-24 h-24 mb-3 object-cover" />
                        <p className="text-lg font-semibold text-blue-700">Cơ Sở Vật Chất</p>
                    </a>

                    <a href="/doi-ngu-thay-co" className="flex flex-col items-center text-center hover:scale-105 transition">
                        <img src={info3} alt="Đội Ngũ Thầy Cô Việt, Hàn" className="w-24 h-24 mb-3 object-cover" />
                        <p className="text-lg font-semibold text-blue-700">Đội Ngũ Thầy Cô Việt, Hàn</p>
                    </a>

                    <a href="/dich-vu" className="flex flex-col items-center text-center hover:scale-105 transition">
                        <img src={info4} alt="Các Dịch Vụ Tại KIS EDU" className="w-24 h-24 mb-3 object-cover" />
                        <p className="text-lg font-semibold text-blue-700">Các Dịch Vụ Tại KIS EDU</p>
                    </a>
                </div>


                {/* Cột 3 */}
                <div className="flex flex-col items-center w-full">
                    <img
                        src={info5}
                        alt="Info 5"
                        className="w-full h-auto object-cover mb-4 rounded"
                    />
                    <button className="px-4 py-2 bg-[#04339f] text-white rounded hover:bg-blue-800 transition">
                        KIS EDU Phủ Khắp cả nước
                    </button>
                </div>
            </div>

            {/* nút + đường kẻ */}
            <div className="flex items-center mt-6  w-5/6 mx-auto space-x-4">
                {/* Nút */}
                <button className="bg-[#04339f] text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                    VÌ SAO NÊN CHỌN KIS EDU
                </button>

                {/* Đường kẻ */}
                <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-4/5 mx-auto mt-8">
                <div className="flex flex-col items-start border border-gray-300 rounded-lg p-6">
                    <h1 className="text-[3.9rem] font-bold">
                        ~95<span className="text-[#ffc30f]">%</span>
                    </h1>
                    <h3 className="text-[1.8rem] font-semibold mt-2">Tỷ lệ đỗ visa</h3>
                    <h5 className="mt-2 text-gray-600">
                        Tỷ lệ đỗ visa cao Top đầu thị trường du học Việt Nam.
                    </h5>
                </div>

                <div className="flex flex-col items-start border border-gray-300 rounded-lg p-6">
                    <h1 className="text-[3.9rem] font-bold">
                        4.000<span className="text-[#ffc30f]">+</span>
                    </h1>
                    <h3 className="text-[1.8rem] font-semibold mt-2">Sunnier tại Hàn Quốc</h3>
                    <h5 className="mt-2 text-gray-600">
                        Trong 7 năm qua, SUNNY đã giúp hơn 4000 học viên sang Hàn Quốc du học tại các trường top đầu.
                    </h5>
                </div>

                <div className="flex flex-col items-start border border-gray-300 rounded-lg p-6">
                    <h1 className="text-[3.9rem] font-bold">
                        0<span className="text-[#ffc30f]">đ</span>
                    </h1>
                    <h3 className="text-[1.8rem] font-semibold mt-2">Chi phí phát sinh</h3>
                    <h5 className="mt-2 text-gray-600">
                        Chi phí hợp lý, minh bạch, cam kết không phát sinh trong quá trình xử lý hồ sơ.
                    </h5>
                </div>
                <div className="flex flex-col items-start border border-gray-300 rounded-lg p-6">
                    <h1 className="text-[3.9rem] font-bold">
                        1-1
                    </h1>
                    <h3 className="text-[1.8rem] font-semibold mt-2">Luyện phỏng vấn</h3>
                    <h5 className="mt-2 text-gray-600">
                        Học sinh sẽ được học phản xạ và luyện phỏng vấn 1-1 với giáo viên người Hàn Quốc.
                    </h5>
                </div>

                <div className="flex flex-col items-start border border-gray-300 rounded-lg p-6">
                    <h1 className="text-[3.9rem] font-bold">
                        100<span className="text-[#ffc30f]">%</span>
                    </h1>
                    <h3 className="text-[1.8rem] font-semibold mt-2">Hoàn Phí</h3>
                    <h5 className="mt-2 text-gray-600">
                        Trong trường hợp học sinh bị Đại sứ quán từ chối visa không lý do.
                    </h5>
                </div>

                <div className="flex flex-col items-start border border-gray-300 rounded-lg p-6">
                    <h1 className="text-[3.9rem] font-bold">
                        50<span className="text-[#ffc30f]">+</span>
                    </h1>
                    <h3 className="text-[1.8rem] font-semibold mt-2">Liên kết trường</h3>
                    <h5 className="mt-2 text-gray-600">
                        Trung tâm Du học Hàn Quốc SUNNY hợp tác với Top 50+ trường Đại học tốt nhất Hàn Quốc. Các trường đều nằm ở nơi giao thông thuận tiện, an toàn, nhiều việc làm thêm.
                    </h5>
                </div>
            </div>
            {/* nút + đường kẻ */}
            <div className="flex items-center mt-6  w-5/6 mx-auto space-x-4">
                {/* Nút */}
                <button className="bg-[#04339f] text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                    CẢM NHẬN VỀ KIS EDU
                </button>

                {/* Đường kẻ */}
                <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-4/5 mx-auto mt-8">
                {/* Testimonial 1 */}
                <div className="flex items-start space-x-5 rounded-2xl p-4 bg-[#ebf4fe] border border-gray-300">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <img
                            src={avatar01}
                            alt="Avatar 1"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-base text-gray-700">
                            Sau khi tìm hiểu rất nhiều trung tâm du học trên thị trường, tôi đã lựa chọn SUNNY vì ở đây các chi phí đều rất minh bạch, làm việc trực tiếp không qua trung gian nên tiết kiệm được khoảng 100 triệu đồng. Trước khi chốt, chúng tôi còn ghé qua ký túc xem kỹ hơn. Thấy nơi ở của các cháu sạch sẽ, an toàn, có đủ đồ phòng cháy chữa cháy,.. nên mới yên tâm đặt bút ký.
                        </p>
                        <h3 className="mt-2 font-semibold text-lg">Phụ huynh bạn Thu Hằng</h3>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="flex items-start space-x-5 rounded-2xl p-4 bg-[#ebf4fe] border border-gray-300">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <img
                            src={avatar02}
                            alt="Avatar 2"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-base text-gray-700">
                            Con gái tôi sau khi tốt nghiệp cấp 3 thì muốn đi du học Hàn. Tôi đã được bạn bè có con đi trước giới thiệu vào SUNNY. Sau khi so sánh và tham khảo kỹ lưỡng hai vợ chồng tôi đã quyết định gửi gắm con vào đây. Đến bây giờ sau khi cháu đã đi du học gia đình vẫn giữ liên lạc với tư vấn viên của trung tâm và nhờ mọi người giúp đỡ con bên Hàn.
                        </p>
                        <h3 className="mt-2 font-semibold text-lg">Phụ huynh bạn Nga Nguyễn</h3>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="flex items-start space-x-5 rounded-2xl p-4 bg-[#ebf4fe] border border-gray-300">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <img
                            src={avatar03}
                            alt="Avatar 3"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-base text-gray-700">
                            Em từng trượt ở 1 trung tâm khác và đã quyết định gửi lại hồ sơ vào SUNNY. Cảm ơn trung tâm đã giúp đỡ em rất nhiều. Bởi với em khoảng thời gian đó thực sự khó khăn, em mất niềm tin vào bản thân và từng nghĩ mình là kẻ thất bại. Cảm ơn cô giáo, cảm ơn chị Nhung và chị sale đã luôn động viên em ạ!
                        </p>
                        <h3 className="mt-2 font-semibold text-lg">Bạn Nguyễn Huyền</h3>
                        <h3 className="text-gray-500 mt-1 text-base">Sinh viên Đại học Hankuk</h3>
                    </div>
                </div>

                {/* Testimonial 4 */}
                <div className="flex items-start space-x-5 rounded-2xl p-4 bg-[#ebf4fe] border border-gray-300">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <img
                            src={avatar04}
                            alt="Avatar 4"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-base text-gray-700">
                            Em từng học đại học ở Việt Nam nhưng rồi lại quyết định chuyển tiếp sang Hàn để theo đuổi giấc mơ của mình. Cảm ơn SUNNY từ những ngày đầu đã rất nhiệt tình tư vấn, xử lý hồ sơ chuyển tiếp cho em. Sang Hàn học mới thấy, hỏi 10 bạn thì có tới 8 bạn cũng đi từ SUNNY luôn ạ: từ Hà Nội, Đà Nẵng, Sài Gòn,... đều rất đông. Mỗi khi tìm thấy 1 bạn Sunnier em cảm thấy như tìm được người nhà ở nơi đất khách quê người ấy.
                        </p>
                        <h3 className="mt-2 font-semibold text-lg">Bạn Nguyễn Châu</h3>
                        <h3 className="text-gray-500 mt-1 text-base">Sinh viên Đại học Kwangwoon</h3>
                    </div>
                </div>

                {/* Link xem thêm */}
                <div className="col-span-1 md:col-span-2 mt-4">
                    <a href="#" className="text-[#04339f] underline text-xl">
                        Xem thêm về cảm nhận
                    </a>
                </div>
            </div>
            {/* nút + đường kẻ */}
            <div className="flex items-center mt-6  w-5/6 mx-auto space-x-4">
                {/* Nút */}
                <button className="bg-[#04339f] text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                    HOẠT ĐỘNG CỦA KIS EDU
                </button>

                {/* Đường kẻ */}
                <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-4/5 mx-auto mt-6">
                {/* Item 1 */}
                <div className="flex flex-col">
                    <img src={duhochangquoc} alt="" className="w-full h-56 object-cover rounded-lg" />
                    <h2 className="mt-1 font-bold text-xl text-left">Điều kiện du học Hàn Quốc 2025 & chi phí, học bổng, visa, chọn trường đại học</h2>
                    <p className="mt-1 text-gray-700 text-base text-left">
                        Du học Hàn Quốc đến thời điểm hiện tại vẫn luôn là lựa chọn hàng đầu của các bạn học sinh và sinh viên tại Việt Nam, bởi việc du học tại xứ sở Kim Chi sẽ mở ra rất nhiều cơ ...
                    </p>
                    <a href="#" className="mt-1 text-[#04339f] underline text-left">
                        Xem thêm
                    </a>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col">
                    <img src={duhochangquoc} alt="" className="w-full h-56 object-cover rounded-lg" />
                    <h2 className="mt-1 font-bold text-xl text-left">4 loại học bổng du học Hàn Quốc và 6 lưu ý để chuẩn bị một bộ hồ sơ chỉn chu nhất</h2>
                    <p className="mt-1 text-gray-700 text-base text-left">
                        Học bổng du học Hàn Quốc là niềm mơ ước của biết bao bạn trẻ đã trót “phải lòng” đất nước xinh đẹp và lãng mạn này. Thế nhưng không gia đình bạn nào cũng có đủ khả năng ...
                    </p>
                    <a href="#" className="mt-1 text-[#04339f] underline text-left">
                        Xem thêm
                    </a>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col">
                    <img src={duhochangquoc} alt="" className="w-full h-56 object-cover rounded-lg" />
                    <h2 className="mt-1 font-bold text-xl text-left">Tổng chi phí du học Hàn Quốc 2025 cần bao nhiêu tiền</h2>
                    <p className="mt-1 text-gray-700 text-base text-left">
                        Du học Hàn Quốc cần bao nhiêu tiền là vấn đề đầu tiên mà hầu hết các bậc phụ huynh và các bạn học sinh quan tâm, thắc mắc khi có ý định đi du học ở xứ sở kim chi. Thấp ...
                    </p>
                    <a href="#" className="mt-1 text-[#04339f] underline text-left">
                        Xem thêm
                    </a>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col">
                    <img src={duhochangquoc} alt="" className="w-full h-56 object-cover rounded-lg" />
                    <h2 className="mt-1 font-bold text-xl text-left">Top 100 Trường Đại Học Hàn Quốc tốt hàng đầu hiện nay</h2>
                    <p className="mt-1 text-gray-700 text-base text-left">
                        Chọn trường đại học Hàn Quốc luôn là nỗi băn khoăn lớn nhất của các bạn du học sinh khi có mong muốn du học tại Hàn Quốc. Vậy làm thế nào để chọn được ngôi trường tron ...
                    </p>
                    <a href="#" className="mt-1 text-[#04339f] underline text-left">
                        Xem thêm
                    </a>
                </div>
            </div>
            {/* nút + đường kẻ */}
            <div className="flex items-center mt-6  w-5/6 mx-auto space-x-4">
                {/* Nút */}
                <button className="bg-[#04339f] text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                    ĐỐI TÁC TIÊU BIỂU CỦA KIS EDU
                </button>

                {/* Đường kẻ */}
                <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div className="flex flex-nowrap gap-4 w-5/6 mx-auto mt-6 overflow-x-auto">
                <img src={soongsil} alt="" className="w-32 h-32 object-cover rounded-lg flex-shrink-0" />
                <img src={soongsil} alt="" className="w-32 h-32 object-cover rounded-lg flex-shrink-0" />
                <img src={soongsil} alt="" className="w-32 h-32 object-cover rounded-lg flex-shrink-0" />
                <img src={soongsil} alt="" className="w-32 h-32 object-cover rounded-lg flex-shrink-0" />
                <img src={soongsil} alt="" className="w-32 h-32 object-cover rounded-lg flex-shrink-0" />
                <img src={soongsil} alt="" className="w-32 h-32 object-cover rounded-lg flex-shrink-0" />
                <img src={soongsil} alt="" className="w-32 h-32 object-cover rounded-lg flex-shrink-0" />
                <img src={soongsil} alt="" className="w-32 h-32 object-cover rounded-lg flex-shrink-0" />
                <img src={soongsil} alt="" className="w-32 h-32 object-cover rounded-lg flex-shrink-0" />
                <img src={soongsil} alt="" className="w-32 h-32 object-cover rounded-lg flex-shrink-0" />
                <img src={soongsil} alt="" className="w-32 h-32 object-cover rounded-lg flex-shrink-0" />
                <img src={soongsil} alt="" className="w-32 h-32 object-cover rounded-lg flex-shrink-0" />
            </div>
        </div>
    );
};

export default Home;
