import { LecturePartContent } from "./lecture-part-content.model";

export class LecturePart {
  partId: String;
  partName: String;
  partDescription: String;
  videoUrl: String;
  length: String;
  preview: boolean;
  type: number;
  lecturePartContents: LecturePartContent[];
}
