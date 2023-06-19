import {VectorInterface} from "./types";


export default class Vector {
    private readonly x: number;
    private readonly y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    public new(x: number, y: number) {
        return new Vector(x, y);
    }
    add(vector: VectorInterface) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }
    abs() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    multiply(scalar: number) {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    subtract(vector: VectorInterface) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }
    direction() {
        return new Vector(this.x / this.abs(), this.y / this.abs());
    }
    dot(vector: VectorInterface) {
        return this.x * vector.x + this.y * vector.y;
    }
    scalarProduct(vector: VectorInterface) {
        return this.x * vector.y - this.y * vector.x;
    }
    length() {
        return this.abs();
    }
}
