import {Shape} from "../../../thuc_hanh/Shape";

export class Triangle extends Shape {
    private side1: number;
    private side2: number;
    private side3: number;

    constructor(color: string,filter: boolean, side1: number, side2: number, side3: number) {
        super(color,filter)
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getSide1(): number {
        return this.side1;
    }

    setSide1(value: number) {
        this.side1 = value;
    }

    getSide2(): number {
        return this.side2;
    }

    setSide2(value: number) {
        this.side2 = value;
    }

    getSide3(): number {
        return this.side3;
    }

    setSide3(value: number) {
        this.side3 = value;
    }
    public getArea():number{
        let p = this.getPrime();
        return Math.sqrt(p*(p-this.side1)*(p-this.side2)*(p-this.side3));
    }

    public getPrime():number{
        return this.side3+this.side2+this.side1;
    }
}