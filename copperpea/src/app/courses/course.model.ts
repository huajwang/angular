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


  constructor(courseId: number, courseName: string, category: string,
              courseDescription: string, author: string, price: number,
              enrolled: number, ratings: number, lastUpdated: string,
              timeLength: number, previewUrl: string) {
    this.courseId = courseId;
    this.courseName = courseName;
    this.category = category;
    this.courseDescription = courseDescription;
    this.author = author;
    this.price = price;
    this.enrolled = enrolled;
    this.ratings = ratings;
    this.lastUpdated = lastUpdated;
    this.timeLength = timeLength;
    this.previewUrl = previewUrl;
  }

}
