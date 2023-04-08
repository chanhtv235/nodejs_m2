import {Circle} from "./Circle";

export class Cylinder extends Circle{
    private height:number;
    constructor(color:string, radius: number, height:number) {
        super(color, radius);
        this.height=height;
    }

    public setHeight(height):void {
        this.height =height;
    }

    public getHeight(): number{
        return this.height;
    }
    public getVolume(): number{
        return this.getArea()*this.height;
    }
    toString(): string {
        return "A Cylinder with radius="
            + this.getRadius()
            + ", color: "+ super.getColor()
            +", height: "+ this.getHeight();
    }
}