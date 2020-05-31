export class CourseLecture {
  lectureId: String;
  courseId: String;
  lectureName: String;

  constructor(lectureId: String, courseId: String, lectureName: String) {
    this.lectureId = lectureId;
    this.courseId = courseId;
    this.lectureName = lectureName;
  }
}
