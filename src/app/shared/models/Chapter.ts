import { SubChapter } from "./SubChapter";

export interface Chapter {
    id: string,
    title: string,
    subchapter: SubChapter[]
}