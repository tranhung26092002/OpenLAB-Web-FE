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
import practiceService from "@assets/image/service-image/Practice_service.png";
import deviceProviderService from "@assets/image/service-image/KIT_provider_service.png";
import courseService from "@assets/image/service-image/Course_service.png";
import aiService from "@assets/image/service-image/Chatbot_service.png";

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

type itemService = {
    title: string;
    description: string;
    image?: string;
};
export const dataServices: itemService[] = [
    {
        title: "Nền tảng thực hành số",
        description: "Cung cấp các dịch vụ thực hành trực truyến AI/IoT",
        image: practiceService,
    },
    {
        title: "Thiết bị thực hành thông minh",
        description: "Cung cấp các bộ KIT thực hành trực tuyến AI/IoT",
        image: deviceProviderService,
    },
    {
        title: "Khóa học thực hành trực tuyến",
        description:
            "Cung cấp các khóa học thực hành trực tuyến AI/IoT chuyên sâu, thực chiến dự án",
        image: courseService,
    },
    {
        title: "Trợ giảng số AI",
        description:
            "Cung cấp các dịch vụ Chatbot AI hỗ trợ thực hành trực tuyến 24/7",
        image: aiService,
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