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
}
