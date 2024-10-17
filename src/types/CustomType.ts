export type dataPlusProps = {
    title: string;
    description: string;
};
export type indexItemProps = {
    nameItem: string;
};

export type dataTab = {
    title: string
    image: string
    description: string
}

export type dataSlide = {
    image: string
    description: string
}

export class ContentLesson {
    dataSlides?: dataSlide[];
    contentText?: Array<string>;
    dataPlus?: dataPlusProps[];
    title?: Array<string>;
    dataVideo?: string;
    dataImage?: string;
    dataTab?: dataTab[]
}