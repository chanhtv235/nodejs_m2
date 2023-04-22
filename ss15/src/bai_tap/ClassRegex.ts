export class ClassRegex {
    public static checkClass(clazz:string): boolean{
        let classRegex =/^[CAP][0-9]{4}[GHIKLM]$/;
        return classRegex.test(clazz);
    }
}