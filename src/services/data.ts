import ArduinoProduct from "@assets/image/product/lt-arduino.jpg";
import ESP8266Product from "@assets/image/product/lt-esp8266.jpg";
import STM32Product from "@assets/image/product/lt-stm32.jpg";
import ESP32CAMProduct from "@assets/image/product/lt-esp32cam.jpg";
import ChatBotAIProduct from "@assets/image/product/lt-chatbotAi.jpg";
import ESP32Product from "@assets/image/product/lt-esp32cam.jpg";
import funixLogo from "@assets/logo/partner/funix.png";
import itplusLogo from "@assets/logo/partner/ItPlus.png";
import vmuLogo from "@assets/logo/partner/vmu.png";
import isvnu from "@assets/logo/partner/is-vnu.png";
import uottLogo from "@assets/logo/partner/university-of-transport technology.png";
import imic from "@assets/logo/partner/imic.png";

type productType = {
  image: string;
  nameProduct: string;
  description: string;
};
export const dataProduct: productType[] = [
  {
    image: ESP8266Product,
    nameProduct: "Lập trình nhúng IoT với ESP8266",
    description: "OpenLAB cung cấp khóa học cơ bản về IoT với ESP8266",
  },
  {
    image: ArduinoProduct,
    nameProduct: "Lập trình nhúng IoT với Arduino",
    description:
      "OpenLAB cung cấp khóa học cơ bản về lập trình nhúng IoT với Arduino",
  },
  {
    image: STM32Product,
    nameProduct: "Lập trình nhúng IoT với STM32",
    description:
      "OpenLAB cung cấp khóa học cơ bản lập trình nhúng IoT với STM32",
  },
  {
    image: ESP32CAMProduct,
    nameProduct: "Lập trình xe hơi tự hành với ESP32-CAM",
    description:
      "OpenLAB cung cấp khóa học lập trình xe hơi tự hành với ESP32-CAM",
  },
  {
    image: ChatBotAIProduct,
    nameProduct: "Thực hành lập trình phát triển ChatBot AI",
    description: " OpenLAB cung cấp khóa học lập trình phát triển ChatBot AI",
  },
  {
    image: ESP32Product,
    nameProduct: "Thực hành lập trình nhúng IoT với ESP32",
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
  { solution: "OpenKit-C: Kít thực hành lập trình nhúng C", price: "12.000.000", },
  { solution: "OpenKit-WSN: Kít thực hành mạng cảm biến thông minh", price: "12.000.000", },
];

export const dataCoursePrices: pricesProps[] = [
  { solution: "Khoá học thực hành AI cơ bản", price: "2.400.000" },
  { solution: "Khoá học thực hành IoT cơ bản", price: "1.800.000" },
  { solution: "Khoá học thực hành IoT nâng cao", price: "2.800.000" },
];
