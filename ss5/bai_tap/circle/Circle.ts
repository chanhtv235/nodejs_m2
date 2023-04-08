export class Circle{
    private color: string;
    private radius: number;
    constructor(color: string, radius: number) {
        this.color=color;
        this.radius=radius;
    }
    public setColor(color:string):void{
        this.color =color;
    }
    public setRadius(radius: number): void{
        this.radius=radius;
    }
    public getColor():string{
        return this.color;
    }
    public getRadius():number{
        return this.radius;
    }
    public getArea():number{
        return Math.PI*Math.pow(this.radius,2);
    }
    public toString(): string {
        return "A Circle with radius="
            + this.getRadius()
            + ", color: "+ this.color;
    }

}