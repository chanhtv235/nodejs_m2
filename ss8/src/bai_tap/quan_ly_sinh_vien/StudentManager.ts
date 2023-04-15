import {ArrayList} from "../../thuc_hanh/ArrayList";
import {Student} from "./Student";
import {LinkedList} from "../../thuc_hanh/LinkedList";

export class StudentManager {
    private studentList:LinkedList<Student>= new LinkedList<Student>();
    constructor() {
        this.studentList = new LinkedList<Student>();
    }

    insertFirst(student: Student): void {
        this.studentList.insertFirstNode(student);
    }

    insertLast(student: Student): void {
        this.studentList.insertLastNode(student);
    }

    showList() {
        for (let st of this.studentList.getAll()) {
            console.log(JSON.stringify(st));
        }
    }

    totalStudentsFail() {
        return this.studentList.search((d: Student) => d.getScore() <= 5).length;
    }

    getListStudentMaxScore() {
        return this.studentList.search((d: Student) => d.getScore() === 10);
    }

    findByName(name: string) {
        return this.studentList.search((d: Student) => d.getName() === name);
    }
}