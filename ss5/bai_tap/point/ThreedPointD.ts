import {TwoDPoint} from "./TwoDPoint";

export class ThreedPointD extends TwoDPoint{
    private z: number;
    constructor(x:number,y:number,z:number) {
        super(x, y);
        this.z=z;
    }
    public setZ(z:number):void{
        this.z=z;
    }
    public getZ():number{
        return this.z;
    }
    public setXYZ(x:number,y:number):void{
        super.setXY(x,y);
        this.setZ(this.z);
    }
    public getXYZ():Array<number>{
        return [...this.getXY(),this.z];
    }
    public toString(): string {
        return "A 3D point with x="
            + this.getX()
            + ", y: "+ this.getY()
            + ", z: "+ this.getZ();
    }
}