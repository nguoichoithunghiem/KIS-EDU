import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import { Search, Menu, X, Phone, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { mockNews } from "../data/mockData";
import { categories } from "../utils/formatUrl";
import { slugify } from "../utils/formatUrl";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#04339f] px-4 py-3 flex justify-center">
      <div className="flex items-center justify-between max-w-7xl w-full">
        {/* Logo */}
        <a className="flex items-center" href="#">
          <img alt="Sunny logo" className="w-10 h-10" src={logo} />
          <span className="text-white font-bold text-sm ml-1">KIS VISA</span>
        </a>

        {/* Desktop menu + search */}
        <div className="hidden lg:flex items-center space-x-8 flex-grow justify-center">
          <ul className="flex space-x-6 text-white font-bold text-sm items-center">
            <li className="relative group cursor-pointer select-none">
              <div className="flex items-center">
                VỀ KIS <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </div>

              {/* Submenu */}
              <ul
                className="absolute left-0 top-full mt-2 bg-white/50 text-black shadow-lg opacity-0 invisible 
                 group-hover:opacity-100 group-hover:visible transition-all duration-200 w-40"
              >
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Giới thiệu
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Tầm nhìn
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Sứ mệnh
                </li>
              </ul>
            </li>
            <li className="relative group cursor-pointer select-none">
              <div className="flex items-center">
                DU HỌC SINH HÀN QUỐC
                <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </div>

              {/* Submenu */}
              <ul
                className="absolute left-0 top-full mt-2 bg-white/50 text-black shadow-lg opacity-0 invisible 
                 group-hover:opacity-100 group-hover:visible transition-all duration-200 w-40"
              >
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Giới thiệu
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Tầm nhìn
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Sứ mệnh
                </li>
              </ul>
            </li>
            <li className="relative group cursor-pointer select-none">
              <div className="flex items-center cursor-pointer select-none bg-white text-[#1f1f1f] px-2 rounded">
                ĐÀO TẠO TIẾNG HÀN
                <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </div>

              {/* Submenu */}
              <ul
                className="absolute left-0 top-full mt-2 bg-white/50 text-black shadow-lg opacity-0 invisible 
                 group-hover:opacity-100 group-hover:visible transition-all duration-200 w-40"
              >
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Giới thiệu
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Tầm nhìn
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Sứ mệnh
                </li>
              </ul>
            </li>
            <li className="relative group cursor-pointer select-none">
              <div className="flex items-center">
                TIN TỨC
                <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </div>

              {/* Submenu */}
              <ul
                className="absolute left-0 top-full mt-2 bg-white/50 text-black shadow-lg opacity-0 invisible 
                 group-hover:opacity-100 group-hover:visible transition-all duration-200 w-40"
              >
                {categories.map((cat, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <Link
                      to={`/category/${slugify(cat)}`}
                      className="block w-full h-full"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="cursor-pointer select-none">
              <Link
                to="/consultationform"
                className="text-inherit no-underline"
              >
                ĐĂNG KÝ TƯ VẤN
              </Link>
            </li>
          </ul>
          <form className="relative flex items-center ml-6">
            <input
              className="rounded px-3 py-1 text-sm placeholder:text-[#bfbfbf] focus:outline-none"
              placeholder="Tìm kiếm"
              type="text"
            />
            <button
              aria-label="Search"
              className="absolute right-1 top-1/2 -translate-y-1/2 text-black text-sm"
              type="submit"
            >
              <Search size={16} strokeWidth={2} />
            </button>
          </form>
        </div>

        {/* Mobile view */}
        <div className="flex lg:hidden items-center w-full relative">
          {/* SĐT căn giữa */}
          <span className="absolute left-1/2 -translate-x-1/2 text-white font-bold text-sm flex items-center gap-2 whitespace-nowrap">
            <Phone size={20} strokeWidth={2} className="text-white" />
            Hotline: 0123.456.789
          </span>

          {/* Nút menu bên phải */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white ml-auto"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div
          className="lg:hidden bg-[#04339f] p-4 absolute top-[55px] left-0 right-0 z-50
               animate-dropdown"
        >
          {/* Ô tìm kiếm */}
          <div className="flex items-center mb-4 bg-white/20 rounded-lg px-3 py-2">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="flex-1 bg-transparent placeholder-white/70 text-white text-sm focus:outline-none"
            />
            <Search size={18} className="text-white ml-2" />
          </div>

          <ul className="flex flex-col space-y-3 text-white font-bold text-sm">
            <hr className="border-t border-white/40" />
            {/* VỀ SUNNY */}
            <li className="w-full">
              <button
                onClick={() => toggleMenu("sunny")}
                className="cursor-pointer flex items-center justify-between py-1 w-full"
              >
                <span
                  className={`${
                    openMenu === "sunny" ? "underline decoration-white" : ""
                  }`}
                >
                  VỀ SUNNY
                </span>
                {openMenu === "sunny" ? (
                  <ChevronUp size={16} strokeWidth={3} className="text-white" />
                ) : (
                  <ChevronDown
                    size={16}
                    strokeWidth={3}
                    className="text-white"
                  />
                )}
              </button>

              {/* Submenu */}
              {openMenu === "sunny" && (
                <ul className="pl-4 mt-1 space-y-1 text-sm font-normal text-white/90">
                  <li className="cursor-pointer">Giới thiệu</li>
                  <li className="cursor-pointer">Tầm nhìn</li>
                  <li className="cursor-pointer">Sứ mệnh</li>
                </ul>
              )}
            </li>
            <hr className="border-t border-white/40" />
            {/* VỀ Du học sinh hàn quốc */}
            <li className="w-full">
              <button
                onClick={() => toggleMenu("duhoc")}
                className="cursor-pointer flex items-center justify-between py-1 w-full"
              >
                <span
                  className={`${
                    openMenu === "duhoc" ? "underline decoration-white" : ""
                  }`}
                >
                  DU HỌC HÀN QUỐC
                </span>
                {openMenu === "duhoc" ? (
                  <ChevronUp size={16} strokeWidth={3} className="text-white" />
                ) : (
                  <ChevronDown
                    size={16}
                    strokeWidth={3}
                    className="text-white"
                  />
                )}
              </button>

              {/* Submenu */}
              {openMenu === "duhoc" && (
                <ul className="pl-4 mt-1 space-y-1 text-sm font-normal text-white/90">
                  <li className="cursor-pointer">Giới thiệu</li>
                  <li className="cursor-pointer">Tầm nhìn</li>
                  <li className="cursor-pointer">Sứ mệnh</li>
                </ul>
              )}
            </li>
            <hr className="border-t border-white/40" />
            {/* VỀ Đào tạo tiếng hàn */}
            <li className="w-full">
              <button
                onClick={() => toggleMenu("daotao")}
                className="cursor-pointer flex items-center justify-between py-1 w-full"
              >
                <span
                  className={`${
                    openMenu === "daotao" ? "underline decoration-white" : ""
                  }`}
                >
                  ĐÀO TẠO TIẾNG HÀN
                </span>
                {openMenu === "daotao" ? (
                  <ChevronUp size={16} strokeWidth={3} className="text-white" />
                ) : (
                  <ChevronDown
                    size={16}
                    strokeWidth={3}
                    className="text-white"
                  />
                )}
              </button>

              {/* Submenu */}
              {openMenu === "daotao" && (
                <ul className="pl-4 mt-1 space-y-1 text-sm font-normal text-white/90">
                  <li className="cursor-pointer">Giới thiệu</li>
                  <li className="cursor-pointer">Tầm nhìn</li>
                  <li className="cursor-pointer">Sứ mệnh</li>
                </ul>
              )}
            </li>
            <hr className="border-t border-white/40" />
            {/* Tin tức */}
            <li className="w-full">
              <button
                onClick={() => toggleMenu("tintuc")}
                className="cursor-pointer flex items-center justify-between py-1 w-full"
              >
                <span
                  className={`${
                    openMenu === "tintuc" ? "underline decoration-white" : ""
                  }`}
                >
                  TIN TỨC
                </span>
                {openMenu === "tintuc" ? (
                  <ChevronUp size={16} strokeWidth={3} className="text-white" />
                ) : (
                  <ChevronDown
                    size={16}
                    strokeWidth={3}
                    className="text-white"
                  />
                )}
              </button>

              {/* Submenu */}
              {openMenu === "tintuc" && (
                <ul className="pl-4 mt-1 space-y-1 text-sm font-normal text-white/90">
                  <li className="cursor-pointer">Giới thiệu</li>
                  <li className="cursor-pointer">Tầm nhìn</li>
                  <li className="cursor-pointer">Sứ mệnh</li>
                </ul>
              )}
            </li>
            <hr className="border-t border-white/40" />
            {/* Đăng ký tư vấn */}
            <li className="w-full">
              <button
                onClick={() => toggleMenu("tuvan")}
                className="cursor-pointer flex items-center justify-between py-1 w-full"
              >
                <span
                  className={`${
                    openMenu === "tuvan" ? "underline decoration-white" : ""
                  }`}
                >
                  ĐĂNG KÝ TƯ VẤN
                </span>
                {openMenu === "tuvan" ? (
                  <ChevronUp size={16} strokeWidth={3} className="text-white" />
                ) : (
                  <ChevronDown
                    size={16}
                    strokeWidth={3}
                    className="text-white"
                  />
                )}
              </button>

              {/* Submenu */}
              {openMenu === "tuvan" && (
                <ul className="pl-4 mt-1 space-y-1 text-sm font-normal text-white/90">
                  <li className="cursor-pointer">Giới thiệu</li>
                  <li className="cursor-pointer">Tầm nhìn</li>
                  <li className="cursor-pointer">Sứ mệnh</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
