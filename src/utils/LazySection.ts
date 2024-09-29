import dynamic from "next/dynamic";

export const LazySectionAbout = dynamic(
  () => import("~/components/home/SectionAbout")
);
export const LazySectionContact = dynamic(
  () => import("~/components/home/SectionContact")
);
export const LazySectionPartners = dynamic(
  () => import("~/components/home/SectionPartners")
);
export const LazySectionProduct = dynamic(
  () => import("~/components/home/SectionProduct")
);

export const LazySectionSolution = dynamic(
  () => import("~/components/home/SectionSolution")
);
export const LazySectionBanner = dynamic(
  () => import("~/components/home/SectionBanner")
);
export const LazySectionServices = dynamic(
  () => import("~/components/home/SectionServices")
);
export const LazySectionFeedback = dynamic(
  () => import("~/components/about/SectionFeedback")
);
export const LazyBannerPage = dynamic(() => import("~/components/custom/BannerPage"));
export const LazySectionIntrol = dynamic(
  () => import("~/components/about/SectionIntrol")
);

export const LazySectionActivityInsite = dynamic(
  () => import("~/components/about/SectionActivityInsite")
);

export const LazySchemaKitb = dynamic(() => import('~/components/openkit/kitb/schema/SchemaKitb'), { ssr: false })

export const LazyMqttConnect = dynamic(
  () => import("~/components/openkit/kitb/MqttConnect")
);

export const LazyDashboard = dynamic(() => import('~/components/openkit/kitb/Dashboard'), { ssr: false })

