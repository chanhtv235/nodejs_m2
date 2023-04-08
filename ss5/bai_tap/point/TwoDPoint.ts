export class TwoDPoint {
    private x:number;
    private y:number;
    constructor(x:number,y:number) {
        this.x=x;
        this.y=y;
    }
    public setX(x:number):void{
        this.x=x;
    }
    public setY(y:number):void{
        this.y=y;
    }
    public setXY(x:number,y:number):void{
        this.x=x;
        this.y=y;
    }
    public getX():number{
        return this.x;
    }
    public getY():number{
        return this.y;
    }
    public getXY():Array<number>{
        return [this.x,this.y];
    }
    public toString(): string {
        return "2D point with x="
            + this.getX()
            + ", y: "+ this.getY();
    }
}