// happy coding 👻


import {StudentManager} from "./bai_tap/quan_ly_sinh_vien/StudentManager";
import {Student} from "./bai_tap/quan_ly_sinh_vien/Student";

console.log("hello world");
const studentManagement = new StudentManager();
studentManagement.insertFirst(new Student("Trần Văn Chánh", 10));
studentManagement.insertLast(new Student("Nguyen Thanh Công", 9));
studentManagement.insertLast(new Student("Nguyen Van Quang", 4));

console.log("======== hiện thị danh sách ========");
studentManagement.showList();

console.log("======== các sinh viên bị lỗi ========");
console.log(studentManagement.totalStudentsFail());

console.log("======== các học vien diểm cao nhất ========");
for (let st of studentManagement.getListStudentMaxScore()) {
    console.log(JSON.stringify(st));
}

console.log("======== tìm kiếm theo tên ========");
for (let st of studentManagement.findByName("Nguyen Thanh Công")) {
    console.log(JSON.stringify(st));
}

