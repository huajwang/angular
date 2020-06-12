'use strict';
const BACK_END_ADDR: string = "http://localhost:8080/edu";
// const BACK_END_ADDR: string = "http://121.199.12.135/api";

export const COURSE_URL: string = BACK_END_ADDR + '/courses';
export const STAGE_COURSE_URL: string = BACK_END_ADDR + "/stage/teacher";
export const PAY_CHECK_URL: string = BACK_END_ADDR + "/payCheck";
export const LOOK_UP_TEACHER_URL: string = BACK_END_ADDR + "/teacher/lookup"
