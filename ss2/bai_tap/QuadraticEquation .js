class QuadraticEquation {
    a;
    b;
    c;
    constructor(a,b,c) {
        this._a = a;
        this._b = b;
        this._c = c;
    }

    get a() {
        return this._a;
    }

    set a(value) {
        this._a = value;
    }

    get b() {
        return this._b;
    }

    set b(value) {
        this._b = value;
    }

    get c() {
        return this._c;
    }

    set c(value) {
        this._c = value;
    }
    getDiscriminant(){
        return Math.pow(this._a,2)-4*this._a.a*this._c
    }
    getRoot1(){
        let sqrDelta =Math.sqrt(this.getDiscriminant());
        if (this.getDiscriminant()==0){
            return -this._b/(2*this._a);
        }else if (this.getDiscriminant()>0){
            return (this._b+sqrDelta)/(2*a);
        }else {
            return 0;
        }
    }
    getRoot2(){
        let sqrDelta =Math.sqrt(this.getDiscriminant());
        if (this.getDiscriminant()==0){
            return -this._b/(2*this._a);
        }else if (this.getDiscriminant()>0){
            return (-this._b+sqrDelta)/(2*a);
        }else {
            return 0;
        }
    }
}