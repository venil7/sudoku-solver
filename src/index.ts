import { solve, Sudoku, valid } from "./sudoku";

const display = (s: Sudoku | null): string => {
  return s
    ? s.reduce((acc, item, idx) => {
        return `${acc} ${item.val || "_"}${(idx + 1) % 9 === 0 ? "\n" : ""}`;
      }, ``)
    : "no solution";
};

// prettier-ignore
const sudoku: Sudoku = [
  5,3,0,0,7,0,0,0,0,
  6,0,0,1,9,5,0,0,0,
  0,9,8,0,0,0,0,6,0,
  8,0,0,0,6,0,0,0,3,
  4,0,0,8,0,3,0,0,1,
  7,0,0,0,2,0,0,0,6,
  0,6,0,0,0,0,2,8,0,
  0,0,0,4,1,9,0,0,5,
  0,0,0,0,8,0,0,7,9,
].map(x => ({ val: x, fixed: !!x }));

// prettier-ignore
const sudoku2: Sudoku = [
  9,0,0,0,0,5,0,4,0,
  0,0,0,0,8,0,2,1,0,
  0,0,0,9,0,0,7,0,3,
  0,0,0,1,0,0,5,0,0,
  3,0,0,2,5,6,0,0,7,
  0,0,7,0,0,9,0,0,0,
  1,0,6,0,0,7,0,0,0,
  0,7,8,0,1,0,0,0,0,
  0,9,0,5,0,0,0,0,8
].map(x => ({ val: x, fixed: !!x }));

((s: Sudoku) => {
  document!.getElementById("app")!.innerHTML = display(s);
  document!.getElementById("run")!.onclick = () => {
    const res = solve(s);
    document!.getElementById("app")!.innerHTML = display(res);
  };
})(sudoku2);
