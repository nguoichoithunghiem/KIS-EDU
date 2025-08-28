import React from "react";

const ConsultationForm = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto p-6 bg-[#fff0e6]">
        <div className="border border-dashed border-[#f7941d] rounded-md p-6 flex flex-col md:flex-row gap-6">
          <div className="flex flex-col">
            <img
              alt="Young woman with long black hair wearing orange polo shirt with Sunny logo and glasses, smiling and pointing to the right"
              className="rounded-md w-full max-w-[450px] object-cover"
              height="450"
              src="https://storage.googleapis.com/a1aa/image/44b489ac-e858-43a9-a759-d4d8de0bd578.jpg"
              width="450"
            />
            <div className="bg-[#f7941d] text-white font-semibold text-center mt-4 py-3 rounded-md max-w-[450px]">
              <p>Chuyên gia SUNNY</p>
              <p>6 năm kinh nghiệm tư vấn du học Hàn.</p>
            </div>
          </div>
          <form className="flex-1 flex flex-col gap-3 max-w-xl">
            <h3 className="text-[#f7941d] font-extrabold text-lg md:text-xl">
              ĐĂNG KÝ TƯ VẤN MIỄN PHÍ NGAY
            </h3>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f7941d]"
              required
            >
              <option disabled selected value="">
                Chọn chủ đề bạn muốn nhận tư vấn *
              </option>
              <option value="topic1">Chủ đề 1</option>
              <option value="topic2">Chủ đề 2</option>
              <option value="topic3">Chủ đề 3</option>
            </select>
            <input
              className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7941d]"
              placeholder="Họ và Tên *"
              required
              type="text"
            />
            <input
              className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7941d]"
              placeholder="Số điện Thoại *"
              required
              type="tel"
            />
            <input
              className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7941d]"
              placeholder="Tỉnh/Thành phố nơi bạn đang sống *"
              required
              type="text"
            />
            <textarea
              className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#f7941d]"
              placeholder="Câu hỏi của bạn dành cho Sunny *"
              required
              rows={6}
            ></textarea>
            <button
              className="bg-[#f7941d] text-white font-semibold rounded-md px-5 py-2 w-max"
              type="submit"
            >
              Hoàn thành
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
