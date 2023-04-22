// happy coding 👻
import {EmailRegex} from "./thuc_hanh/EmailRegex";
import {AccountRegex} from "./thuc_hanh/AccountRegex";
import {ClassRegex} from "./bai_tap/ClassRegex";
import {PhoneNumberRegex} from "./bai_tap/PhoneNumberRegex";

console.log("hello world");
//------------- thực hành 1
let emailRegex = new EmailRegex();
let validEmail: string[] = ["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com"];
let invalidEmail: string[] = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];

for (let email of validEmail) {
    let isvalid: boolean = emailRegex.validate(email);
    console.log("Email is " + email + " is valid: " + isvalid);
}

for (let email of invalidEmail) {
    let isvalid: boolean = emailRegex.validate(email);
    console.log("Email is " + email + " is valid: " + isvalid);
}
// --------------thục hành 2-----------------------
let accountRegex = new AccountRegex();

let validAccount: string[] = ["123abc_", "_abc123", "______", "123456", "abcdefgh"];
let invalidAccount: string[] = [".@", "12345", "1234_", "abcde"];

for (let account of validAccount) {
    let isvalid: boolean = accountRegex.validate(account);
    console.log("Account is " + account + " is valid: " + isvalid);
}
for (let account of invalidAccount) {
    let isvalid: boolean = accountRegex.validate(account);
    console.log("Account is " + account + " is valid: " + isvalid);
}

//-- checke bài tập
let className1 = "C0323G";
let className2 = "C0323G1";
console.log("----------------check class-------------------")
console.log(ClassRegex.checkClass(className1));
console.log(ClassRegex.checkClass(className2));
//-- check bài tập số điện thoại
let phoneNumer1 ="84-0905973147";
let phoneNumer2 ="a4-0905973147";
console.log("-----------------check số điện thoại");
console.log(PhoneNumberRegex.checkPhoneNumber(phoneNumer1));
console.log(PhoneNumberRegex.checkPhoneNumber(phoneNumer2));