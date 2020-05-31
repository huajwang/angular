export class CourseContent {
  contentId: String;
  courseId: String;
  contentDescription: String;

  constructor(contentId: String, courseId: String, contentDescription: String) {
    this.contentId = contentId;
    this.courseId = courseId;
    this.contentDescription = contentDescription;
  }
}
