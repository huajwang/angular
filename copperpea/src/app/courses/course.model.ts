import { CourseContent } from "./course-content.model";
import { Teacher } from "../teacher/teacher.model";

export class Course {

  public courseId: number;
  public courseName: string;
  public category: string;
  public displayName: string;
  public courseDescription: string;
  public author: string;
  public price: number;
  public enrolled: number;
  public ratings: number;
  public lastUpdated: string;
  public timeLength: number;
  public previewUrl: string;
  public teacher: Teacher = new Teacher();
  courseContents: CourseContent[];

}
