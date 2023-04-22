export class PhoneNumberRegex {
    public static checkPhoneNumber(phoneNumber:string): boolean{
        let classRegex =/^\d{2}(-0)\d{9}$/;
        return classRegex.test(phoneNumber);
    }
}