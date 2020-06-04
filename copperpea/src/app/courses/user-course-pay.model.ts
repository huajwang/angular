export class UserCoursePay {
  id: number;
  courseId: number;
  amount: string;
  payDate: string;

  constructor(id: number, courseId: number, amount: string, payDate: string) {
    this.id = id;
    this.courseId = courseId;
    this.amount = amount;
    this.payDate = payDate;
  }
}
