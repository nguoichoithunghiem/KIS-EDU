import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full px-6 py-10 sm:px-10 md:px-16 lg:px-20 bg-[#04339f] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:space-x-20">
        <div className="flex-1 space-y-6 text-[13px] leading-tight">
          <div>
            <h3 className="font-bold text-[14px] mb-3">
              TRUNG TÂM DU HỌC SUNNY
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[13px]">
              <li>
                Chủ sở hữu: Công ty TNHH Hợp Tác Phát Triển Sunny International
              </li>
              <li>Người đại diện pháp lý: Trần Thị Hồng Nhung</li>
              <li>
                Giấy phép kinh doanh số: 0108189720 ( Cấp tại sở kế hoạch đầu tư
                thành phố Hà Nội)
              </li>
              <li>
                Giấy phép tư vấn du học: 2779/GCN - SGDĐT (Cấp bởi Sở Giáo Dục
                Và Đào Tạo Hà Nội)
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-[13px]">
            <div>
              <h4 className="font-bold text-[14px] mb-1">SUNNY HÀ NỘI</h4>
              <p>
                <span className="font-semibold">Chi nhánh Hà Nội:</span>
                <span className="ml-2">
                  Số nhà 32 ngách 376/12 đường Bưởi, P. Ngọc Hà, Hà Nội
                </span>
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[14px] mb-1">SUNNY ĐÀ NẴNG</h4>
              <p>
                <span className="font-semibold">Chi nhánh Đà Nẵng:</span>
                <span className="ml-2">
                  63 Hà Huy Giáp, phường Hoà Cường, Đà Nẵng
                </span>
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[14px] mb-1">SUNNY HỒ CHÍ MINH</h4>
              <p>
                <span className="font-semibold">Chi nhánh HCM:</span>
                <span className="ml-2">
                  40 đường số 8 KDC Cityland parkhills, Phường Gò Vấp, TP.Hồ Chí
                  Minh
                </span>
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[14px] mb-1">SUNNY CN HÀN QUỐC</h4>
              <p className="font-semibold">Chi nhánh HÀN QUỐC:</p>
              <p className="ml-4 mt-1 leading-snug text-[12px]">
                서울 중구 퇴계로 286 쌍림빌딩 6층, 611호
                <br />
                Room 611, 6F, Ssangnim Building, 286, Toegye-ro, Jung-gu, Seoul,
                Korea
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0 space-y-8 text-[13px]">
          <div>
            <h3 className="font-bold text-[14px] mb-3">
              CHÍNH SÁCH VÀ QUY ĐỊNH CHUNG
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Chính sách bảo mật thông tin</li>
              <li>Chính sách và quy định chung</li>
              <li>Quy định và hình thức thanh toán</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[14px] mb-3">HỖ TRỢ KHÁCH HÀNG</h3>
            <ul className="space-y-2 text-[13px]">
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone-alt text-[#f9d56e]"></i>
                <span>
                  <span className="font-semibold">Hotline:</span>
                  024.7777.1990
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone-alt text-[#f9d56e]"></i>
                <span>
                  <span className="font-semibold">Hà Nội:</span>
                  0966.994.895
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone-alt text-[#f9d56e]"></i>
                <span>
                  <span className="font-semibold">Đà Nẵng:</span>
                  076.288.5604
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone-alt text-[#f9d56e]"></i>
                <span>
                  <span className="font-semibold">HCM:</span>
                  039.372.5155
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <img
                  alt="Envelope icon representing email"
                  className="w-4 h-4"
                  height="16"
                  src="https://storage.googleapis.com/a1aa/image/68026e59-1083-477f-b38c-9fb74e74ce81.jpg"
                  width="16"
                />
                <span>Email: info@duhocsunny.edu.vn</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[14px] mb-3">
              KẾT NỐI VỚI CHÚNG TÔI
            </h3>
            <div className="flex items-center space-x-3">
              <a
                aria-label="Facebook"
                className="text-white hover:text-[#3b5998] text-lg"
                href="#"
              >
                <FaFacebookF />
              </a>
              <a
                aria-label="YouTube"
                className="text-white hover:text-[#ff0000] text-lg"
                href="#"
              >
                <FaYoutube />
              </a>
              <a
                aria-label="Instagram"
                className="text-white hover:text-[#e4405f] text-lg"
                href="#"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
