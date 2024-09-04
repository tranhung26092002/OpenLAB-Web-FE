import ArduinoProduct from "@assets/image/product/lt-arduino.jpg";
import ESP8266Product from "@assets/image/product/lt-esp8266.jpg";
import STM32Product from "@assets/image/product/lt-stm32.jpg";
import ESP32CAMProduct from "@assets/image/product/lt-esp32cam.jpg";
import ChatBotAIProduct from "@assets/image/product/lt-chatbotAi.jpg";
import ESP32Product from "@assets/image/product/ltiot-esp32.jpg";
import funixLogo from "@assets/logo/partner/funix.png";
import itplusLogo from "@assets/logo/partner/ItPlus.png";
import vmuLogo from "@assets/logo/partner/vmu.png";
import isvnu from "@assets/logo/partner/is-vnu.png";
import uottLogo from "@assets/logo/partner/university-of-transport technology.png";
import imic from "@assets/logo/partner/imic.png";
import axiosPublic from "@utils/axiosConfig";
import img1BenefitProduct from "@assets/image/detail-product/Tat_ca_tren_1_diem_cham_fdd50fe132.jpeg";
import img2BenefitProduct from "@assets/image/detail-product/Toi_uu_quy_trinh_cu_b8392a59ed.jpeg";
import img3BenefitProduct from "@assets/image/detail-product/online_product_presentation_with_project_team_vector_id1054541696_bec8c46918.jpeg";
import imgactivity2 from "@assets/image/about/activity_insite/1d4fea17ac2e0b70523f.jpg";
import imgactivity1 from "@assets/image/about/activity_insite/295e1773544af314aa5b.jpg";
import imgactivity3 from "@assets/image/about/activity_insite/e79d352f39169e48c707.jpg";
import imgactivity8 from "@assets/image/about/activity_insite/0fb13a10cb296c773538.jpg";
import imgactivity4 from "@assets/image/about/activity_insite/8a22d63e960731596816.jpg";
import imgactivity5 from "@assets/image/about/activity_insite/a2061c9029a98ef7d7b8.jpg";

import imageSolution1 from "@assets/image/solution/solution1.jpg";
import imageSolution2 from "@assets/image/solution/solution2.jpg";
import imageSolution3 from "@assets/image/solution/solution3.jpg";
import imageSolution4 from "@assets/image/solution/solution4.jpg";
import imageSolution6 from "@assets/image/solution/solution5.jpg";
import imageSolution5 from "@assets/image/solution/solution6.jpg";

import imagekitb from "@assets/image/about/activity_insite/a2061c9029a98ef7d7b8.jpg";
import imagesmart from "@assets/image/kit-device/5881145d3b989cc6c589.jpg";
import imageC from "@assets/image/kit-device/97203ac8160db153e81c.jpg";
import smartnetwork from '@assets/image/kit-device/d0d56d0b43cee490bddf.jpg'
import hubcenter from '@assets/image/kit-device/c67c96025dc7fa99a3d6.jpg'
export type productType = {
  image: string;
  nameProduct: string;
  description: string;
};
export const dataProduct: productType[] = [
  {
    image: ArduinoProduct,
    nameProduct: "THỰC HÀNH HỆ THỐNG IoT",
    description:
      "OpenLAB cung cấp khóa học cơ bản về lập trình nhúng IoT với Arduino",
  },
  {
    image: ESP8266Product,
    nameProduct: "THỰC HÀNH MẠNG DI ĐỘNG 5G",
    description: "OpenLAB cung cấp khóa học cơ bản về IoT với ESP8266",
  },
  {
    image: ChatBotAIProduct,
    nameProduct: "THỰC HÀNH CHATBOT AI",
    description: " OpenLAB cung cấp khóa học lập trình phát triển ChatBot AI",
  },
  {
    image: STM32Product,
    nameProduct: "THỰC HÀNH PHÂN TÍCH DỮ LIỆU",
    description:
      "OpenLAB cung cấp khóa học cơ bản lập trình nhúng IoT với STM32",
  },
  {
    image: ESP32CAMProduct,
    nameProduct: "THỰC HÀNH ĐIỆN TOÁN ĐÁM MÂY",
    description:
      "OpenLAB cung cấp khóa học lập trình xe hơi tự hành với ESP32-CAM",
  },

  {
    image: ESP32Product,
    nameProduct: "THỰC HÀNH ROBOTICS",
    description:
      "OpenLAB cung cấp khóa học thực hành lâp trình nhúng IoT với ESP32",
  },
];

type dataPartner = {
  image: string;
};
export const dataPartners: dataPartner[] = [
  {
    image: funixLogo,
  },
  {
    image: itplusLogo,
  },
  {
    image: vmuLogo,
  },
  {
    image: isvnu,
  },
  {
    image: uottLogo,
  },
  {
    image: imic,
  },
];

type feedback = {
  name: string;
  location: string;
  feedback: string;
};

export const dataFeedback: feedback[] = [
  {
    name: "Nguyễn Quang Thành",
    location: "PTIT",
    feedback:
      "Các khóa học về IoT khá chất lượng, nhờ nó mà mình có 1 nền tảng vững chắc về IoT...",
  },
  {
    name: "Phạm Văn Huấn",
    location: "HỌC VIỆN AN NINH",
    feedback:
      "OpenLAB là một đối tác tin cậy, tận tâm, luôn luôn trau dồi để mang đến chất lượng sản phẩm tốt nhất tới người dùng.",
  },
  {
    name: "Đăng Khôi",
    location: "THÁI BÌNH",
    feedback:
      "Với những công nghệ hiện đại, nắm bắt xu hướng thị trường, sản phẩm OpenLAB mang lại luôn giải quyết được những bài toán cấp bách trong lĩnh vực Đại học.",
  },
];

type blogProps = {
  role: string;
  date: string;
  title: string;
  content: string;
};

export const dataBlog: blogProps[] = [
  {
    role: "Admin",
    date: "4 Thg 10, 2022",
    title: "Digital Retail: Ngành Bán lẻ trong cơn bão Chuyển đổi số",
    content:
      "Trong các ngành khác nhau, có lẽ Ngành bán lẻ là ngành mà sự hiện diện vật chất (physical) còn nhiều nhất và vì vậy còn nhiều hoài nghi về tác động của cơn lốc...",
  },
  {
    role: "Admin",
    date: "4 Thg 10, 2022",
    title:
      "Hackathon cho các sáng kiến đổi mới xã hội từ công nghệ - Social Innovation Hackathon",
    content:
      "Hackathon được biết đến là cuộc đua sáng tạo, nơi mà những người dành tình yêu cho công nghệ có thể tự tin tỏa sáng, thể hiện năng lực bản thân bằng những ý",
  },
  {
    role: "Admin",
    date: "4 Thg 10, 2022",
    title:
      "[Trends Forecast] Gartner tiết lộ 10 xu hướng công nghệ chiến lược hàng đầu năm",
    content:
      "Gartner đã tiết lộ 10 xu hướng công nghệ chiến lược hàng đầu cho năm 2023, tập trung vào ba chủ đề: tối ưu hóa, mở rộng quy mô và tái định hình doanh nghiệp.",
  },
  {
    role: "Admin",
    date: "6 Thg 10, 2022",
    title: "Blockchain Marketing là gì? Những điều cần biết về Blockchain",
    content:
      "Khi chúng ta tiến xa hơn vào thời đại kỹ thuật số, các công nghệ và quy trình mới tiếp tục xuất hiện. Một trong những công nghệ mới nhất và phổ biến hiện nay là...",
  },
];

type pricesProps = {
  solution: string;
  price: string;
};

export const dataSolutionPrices: pricesProps[] = [
  { solution: "LabLink: Trục liên thông dữ liệu", price: "80.000.000" },
  { solution: "E-Exam: Giải Pháp thi trực tuyến ", price: "40.000.000" },
  { solution: "E-Lab: Giải pháp thực hành từ xa", price: "80.000.000" },
  { solution: "E-Chip: Giải pháp quản lý thiết bị số", price: "48.000.000" },
  { solution: "OpenChat: Giải pháp trợ giảng số AI", price: "40.000.000" },
  { solution: "OpenLab: Giải pháp phòng Lab thông minh", price: "48.000.000" },
];

export const dataDevicesPrices: pricesProps[] = [
  { solution: "OpenKit-B: Kít thực hành IoT cơ bản", price: "1.450.000" },
  { solution: "OpenKit-O: Kít thực hành IoT mở rộng", price: "8.000.000" },
  { solution: "OpenKit-A: Kít thực hành thông minh IoT", price: "18.000.000" },
  {
    solution: "OpenKit-C: Kít thực hành lập trình nhúng C",
    price: "12.000.000",
  },
  {
    solution: "OpenKit-WSN: Kít thực hành mạng cảm biến thông minh",
    price: "12.000.000",
  },
  {
    solution: "Lab Hub: Thiết bị điều khiển trung tâm phòng lab",
    price: "15.000.000",
  },
];

export const dataCoursePrices: pricesProps[] = [
  { solution: "Khoá học thực hành AI cơ bản", price: "2.400.000" },
  { solution: "Khoá học thực hành IoT cơ bản", price: "1.800.000" },
  { solution: "Khoá học thực hành IoT nâng cao", price: "2.800.000" },
  { solution: "Khoá học thực hành mạng di động 5G", price: "2.800.000" },
  { solution: "Khoá học thực hành ChatBot AI", price: "2.800.000" },
  { solution: "Khoá học thực hành phân tích dữ liệu", price: "2.800.000" },
  { solution: "Khoá học thực hành điện toán đám mây", price: "2.800.000" },
  { solution: "Khoá học thực hành Robotic", price: "2.800.000" },
];

export const handleLogin = async (email: string, password: string) => {
  return await axiosPublic.post("/api/auth/login", { email, password });
};

export type dataBenefitProduct = {
  image: string;
  label: string;
  detail: string;
};

export const dataBenefitProducts: dataBenefitProduct[] = [
  {
    image: img1BenefitProduct,
    label: "Tất cả trên 1 điểm chạm",
    detail:
      "Dịch vụ một cửa, Cây tiến trình học tập, Học liệu, Tin tức, Thời khóa biểu, ... tất cả được tập trung trên 1 ứng dụng duy nhất",
  },
  {
    image: img2BenefitProduct,
    label: "Tối ưu những quy trình cũ",
    detail:
      "Truyền tải tin tức, thông báo, điểm số, sử dụng dịch vụ hành chính, ... tất cả đều được thực hiện qua smartphone mọi lúc mọi nơi",
  },
  {
    image: img3BenefitProduct,
    label: "Liên thông toàn bộ dữ liệu",
    detail:
      "Cập nhật toàn bộ thông tin từ nhà trường đến với sinh viên, cán bộ/giảng viên một cách nhanh và chính xác nhất",
  },
];

type activityInsiteImage = {
  image: string;
};

export const dataActivityInsite: activityInsiteImage[] = [
  { image: imgactivity1 },
  { image: imgactivity2 },
  { image: imgactivity3 },
  { image: imgactivity8 },
  { image: imgactivity4 },
  { image: imgactivity5 },
];
export const dataKit: productType[] = [
  {
    image: imagekitb,
    nameProduct: "OpenKit-B: Kít thực hành IoT cơ bản",
    description:
      "Đơn vị cung cấp nền tảng thực hành số, thiết bị thực hành thông minh, khóa học thực hành chuyên sâu, dịch vụ trợ giảng số AI hỗ trợ thực hành 24/7 và phát triển các giải pháp phần mềm phục vụ chuyển đổi số giáo dục theo yêu cầu.",
  },
  {
    image: imagesmart,
    nameProduct: "OpenKit-O: Kít thực hành IoT mở rộng",
    description:
      "Đơn vị cung cấp nền tảng thực hành số, thiết bị thực hành thông minh, khóa học thực hành chuyên sâu, dịch vụ trợ giảng số AI hỗ trợ thực hành 24/7 và phát triển các giải pháp phần mềm phục vụ chuyển đổi số giáo dục theo yêu cầu.",
  },
  {
    image: imagesmart,
    nameProduct: "OpenKit-A: Kít thực hành thông minh IoT",
    description:
      "Đơn vị cung cấp nền tảng thực hành số, thiết bị thực hành thông minh, khóa học thực hành chuyên sâu, dịch vụ trợ giảng số AI hỗ trợ thực hành 24/7 và phát triển các giải pháp phần mềm phục vụ chuyển đổi số giáo dục theo yêu cầu.",
  },
  {
    image: imageC,
    nameProduct: "OpenKit-C: Kít thực hành lập trình nhúng C",
    description:
      "Đơn vị cung cấp nền tảng thực hành số, thiết bị thực hành thông minh, khóa học thực hành chuyên sâu, dịch vụ trợ giảng số AI hỗ trợ thực hành 24/7 và phát triển các giải pháp phần mềm phục vụ chuyển đổi số giáo dục theo yêu cầu.",
  },
  {
    image: smartnetwork,
    nameProduct: "OpenKit-WSN: Kít thực hành mạng cảm biến thông minh",
    description:
      "Đơn vị cung cấp nền tảng thực hành số, thiết bị thực hành thông minh, khóa học thực hành chuyên sâu, dịch vụ trợ giảng số AI hỗ trợ thực hành 24/7 và phát triển các giải pháp phần mềm phục vụ chuyển đổi số giáo dục theo yêu cầu.",
  },
  {
    image: hubcenter,
    nameProduct: "Lab Hub: Thiết bị điều khiển trung tâm phòng lab",
    description:
      "Đơn vị cung cấp nền tảng thực hành số, thiết bị thực hành thông minh, khóa học thực hành chuyên sâu, dịch vụ trợ giảng số AI hỗ trợ thực hành 24/7 và phát triển các giải pháp phần mềm phục vụ chuyển đổi số giáo dục theo yêu cầu.",
  },
];

export const dataSolution: productType[] = [
  {
    image: imageSolution1,
    nameProduct: "Giải pháp Lab thông minh: OpenLab",
    description:
      "Đơn vị cung cấp nền tảng thực hành số, thiết bị thực hành thông minh, khóa học thực hành chuyên sâu, dịch vụ trợ giảng số AI hỗ trợ thực hành 24/7 và phát triển các giải pháp phần mềm phục vụ chuyển đổi số giáo dục theo yêu cầu.",
  },
  {
    image: imageSolution2,
    nameProduct: "Giải pháp Trợ giảng số AI: OpenChat",
    description:
      "Đơn vị cung cấp nền tảng thực hành số, thiết bị thực hành thông minh, khóa học thực hành chuyên sâu, dịch vụ trợ giảng số AI hỗ trợ thực hành 24/7 và phát triển các giải pháp phần mềm phục vụ chuyển đổi số giáo dục theo yêu cầu.",
  },
  {
    image: imageSolution3,
    nameProduct: "Trục liên thông dữ liệu: LabLink",
    description:
      "Đơn vị cung cấp nền tảng thực hành số, thiết bị thực hành thông minh, khóa học thực hành chuyên sâu, dịch vụ trợ giảng số AI hỗ trợ thực hành 24/7 và phát triển các giải pháp phần mềm phục vụ chuyển đổi số giáo dục theo yêu cầu.",
  },
  {
    image: imageSolution4,
    nameProduct: "Giải pháp Thực hành từ xa: E-Lab",
    description:
      "Đơn vị cung cấp nền tảng thực hành số, thiết bị thực hành thông minh, khóa học thực hành chuyên sâu, dịch vụ trợ giảng số AI hỗ trợ thực hành 24/7 và phát triển các giải pháp phần mềm phục vụ chuyển đổi số giáo dục theo yêu cầu.",
  },
  {
    image: imageSolution5,
    nameProduct: "Giải pháp Quản lý thiết bị số: E-Chip",
    description:
      "Đơn vị cung cấp nền tảng thực hành số, thiết bị thực hành thông minh, khóa học thực hành chuyên sâu, dịch vụ trợ giảng số AI hỗ trợ thực hành 24/7 và phát triển các giải pháp phần mềm phục vụ chuyển đổi số giáo dục theo yêu cầu.",
  },
  {
    image: imageSolution6,
    nameProduct: "Giải pháp thi online: E-Exam",
    description:
      "Đơn vị cung cấp nền tảng thực hành số, thiết bị thực hành thông minh, khóa học thực hành chuyên sâu, dịch vụ trợ giảng số AI hỗ trợ thực hành 24/7 và phát triển các giải pháp phần mềm phục vụ chuyển đổi số giáo dục theo yêu cầu.",
  },
];
