import ConsultationForm from "../components/ConsultationForm";

const Contact = () => {
  return (
    <div className="w-5/6 mx-auto space-y-4 text-lg mb-12">
      {/* Đường kẻ */}
      <div className="flex-1 border-t border-gray-300 mt-12"></div>
      <h2 className="font-extrabold text-2xl mb-2">LIÊN HỆ</h2>
      <div>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>Hotline: 024.7777.1990</li>
          <li>Miền Bắc: 0966.994.895 (Ms. Thùy Linh)</li>
          <li>Miền Trung: 076.288.5604 (Ms. Bích Hồng)</li>
          <li>Miền Nam: 039.372.5155 (Ms. Hồ Yến)</li>
        </ul>
        <p className="text-base text-gray-500 mb-4">Hoặc:</p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>Fanpage: Du Học Hàn Quốc SUNNY</li>
          <li>Website: https://duhocsunny.edu.vn/</li>
          <li>Tiktok: https://www.tiktok.com/@duhocsunny</li>
          <li>Email: info@duhocsunny.edu.vn</li>
        </ul>
      </div>
      <div>
        <p className="font-bold mb-2 text-lg">Địa chỉ văn phòng của SUNNY:</p>
        <p className="font-bold text-base mb-0.5">SUNNY HÀ NỘI</p>
        <p className="text-base text-gray-400 mb-3">Số nhà 32 ngách 376/12 đường Bưởi, P. Ngọc Hà, Hà Nội.</p>
        <p className="font-bold text-base mb-0.5">SUNNY ĐÀ NẴNG</p>
        <p className="text-base text-gray-400 mb-3">63 Hà Huy Giáp, phường Hoà Cường, Đà Nẵng.</p>
        <p className="font-bold text-base mb-0.5">SUNNY HỒ CHÍ MINH</p>
        <p className="text-base text-gray-400 mb-3">40 đường số 8 KDC Cityland parkhills, Phường Gò Vấp, TP.Hồ Chí Minh</p>
        <p className="font-bold text-base mb-0.5">SUNNY HÀN QUỐC</p>
        <p className="text-base text-gray-400 mb-3">서울 중구 퇴계로 286 쌍림빌딩 6층, 611호</p>
        <p className="text-base text-gray-400">Room 611, 6F, Ssangnim Building, 286, Toegye-ro, Jung-gu, Seoul, Korea.</p>
      </div>

      {/* Google Map */}
      <div className="mt-8">
        <a
          href="https://www.google.com/maps/place/83+Nh%E1%BA%A5t+Chi+Mai,+Ph%C6%B0%E1%BB%9Dng+13,+T%C3%A2n+B%C3%ACnh,+H%E1%BB%93+Ch%C3%AD+Minh+700000,+Vi%E1%BB%87t+Nam/@10.8066001,106.6366401,17z/data=!3m1!4b1!4m6!3m5!1s0x3175295b190ff919:0x47a7811637132b35!8m2!3d10.8065948!4d106.639215!16s%2Fg%2F11q4j66cfw?hl=vi&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <iframe
            title="SUNNY Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1236543729!2d106.6366401!3d10.8066001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175295b190ff919%3A0x47a7811637132b35!2zODMgTmjhuqV0IENoaSBtYWksIFBoxrDhu51uZyAxMywgVMOibiBCw6xuaCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1svi!2s!4v1693300000000!5m2!1svi!2s"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </a>
      </div>
      <ConsultationForm />
    </div>
  );
};

export default Contact;
