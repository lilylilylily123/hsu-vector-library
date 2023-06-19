export default class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    new(x, y) {
        return new Vector(x, y);
    }
    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }
    abs() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
//# sourceMappingURL=index.js.map