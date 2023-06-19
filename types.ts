import Vector from "./index";

export type VectorInterface = {
    x: number;
    y: number;
    new(x: number, y: number): VectorInterface;
    add(vector: VectorInterface): VectorInterface;
    abs(): number;
}