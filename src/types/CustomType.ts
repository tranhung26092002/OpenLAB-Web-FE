import { StaticImageData } from "next/image";

type dataContentSide = {
  image: string | StaticImageData;
  description?: string;
}
type dataSlide = {
  title?: string
  data: dataContentSide[]
};

type dataContentPlus = {
  title: string;
  description?: Array<string>;
};
type dataPlus = {
  header?: string;
  data: dataContentPlus[]
}

type dataTabContent = {
  title: string;
  image?: string | StaticImageData;
  description?: Array<string>;
}

type dataTab = {
  header?: string
  data: dataTabContent[]
};

export type indexItemProps = {
  nameItem: string;
};
type dataListProps = {
  header?: string;
  data?: Array<string>;
};


type dataContentMerge = {
  label: string;
  description: dataContentPlus[];
};

type dataVideo = {
  url: string,
  title?: string
}
type dataImage = {
  url: string | StaticImageData,
  title?: string
}
type dataMergeProps = {
  header?: string;
  data?: dataContentMerge[];
  image?: string | StaticImageData;
};

export class ContentLesson {
  dataSlides?: dataSlide;
  contentText?: Array<string>;
  dataPlus?: dataPlus;
  dataMerge?: dataMergeProps;
  dataVideo?: dataVideo;
  dataImage?: dataImage;
  dataTab?: dataTab;
  dataList?: dataListProps;
  dataList2?: dataListProps;
  codeSample?: string
}
