export class ProductManager {
    private products = [];

    constructor() {
    }

    getAll() {
        return this.products;
    }

    add(product) {
        this.products.push(product);
    }
}