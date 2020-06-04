import { CourseContent } from "./course-content.model";

export class Course {

  public courseId: number;
  public courseName: string;
  public category: string;
  public courseDescription: string;
  public author: string;
  public price: number;
  public enrolled: number;
  public ratings: number;
  public lastUpdated: string;
  public timeLength: number;
  public previewUrl: string;
  courseContents: CourseContent[];
  
}
