import { LecturePart } from "./lecture-part.model";


export class CourseLecture {
  lectureId: String;
  lectureName: String;
  courseId: String;

  lectureParts: LecturePart[];


  constructor(lectureId: String, lectureName: String, courseId: String, lectureParts: LecturePart[]) {
    this.lectureId = lectureId;
    this.lectureName = lectureName;
    this.courseId = courseId;
    this.lectureParts = lectureParts;
  }
}
