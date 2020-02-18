type Cell = { val: number; fixed: boolean };
export type Sudoku = Cell[];
type Row = [...number[]] & { length: 9 };

const copy = (sudoku: Sudoku): Sudoku =>
  sudoku.map(({ val, fixed }) => ({ val, fixed }));

const get = (sudoku: Sudoku) => (row: number, col: number): Cell => {
  const { val, fixed } = sudoku[row * 9 + col];
  return { val, fixed };
};

const set = (sudoku: Sudoku, indx: number, val: number): Sudoku => {
  const cpy = copy(sudoku);
  cpy[indx].val = val;
  return cpy;
};

const row = (sudoku: Sudoku) => (c: number): Row => {
  const start = c * 9;
  const finish = start + 9;
  const res = sudoku.slice(start, finish).map(({ val }) => val) as Row;
  return res;
};

const column = (sudoku: Sudoku) => (r: number): Row => {
  const res = Array.from(Array(9)).map((_, row) => {
    const idx = row * 9 + r;
    return sudoku[idx].val;
  }) as Row;

  return res;
};

const quad = (sudoku: Sudoku) => (row: number, col: number): Row => {
  const getCell = get(sudoku);
  const r = Math.floor(row / 3) * 3;
  const c = Math.floor(col / 3) * 3;
  let res = [
    getCell(r, c).val,
    getCell(r + 1, c).val,
    getCell(r + 2, c).val,
    getCell(r, c + 1).val,
    getCell(r + 1, c + 1).val,
    getCell(r + 2, c + 1).val,
    getCell(r, c + 2).val,
    getCell(r + 1, c + 2).val,
    getCell(r + 2, c + 2).val
  ] as Row;

  return res;
};

const check = (row: Row): boolean => {
  const noEmpties = row.filter(x => x > 0);
  const unique: number[] = Array.from(new Set<number>(noEmpties).values());
  let res = noEmpties.length === unique.length;
  return res;
};

export const valid = (sudoku: Sudoku): boolean => {
  const getRow = row(sudoku);
  const getCol = column(sudoku);
  const getQuad = quad(sudoku);
  return (
    Array.from(Array(9))
      .map((_, i) => getRow(i))
      .map(check)
      .every(x => x) &&
    Array.from(Array(9))
      .map((_, i) => getCol(i))
      .map(check)
      .every(x => x) &&
    Array.from(Array(9))
      .map((_, i) => getQuad(Math.floor(i / 3) * 3, Math.floor(i % 3) * 3))
      .map(check)
      .every(x => x)
  );
};

export const solve = (
  sudoku: Sudoku,
  indexes: number[] | null = null
): Sudoku | null => {
  indexes =
    indexes ||
    sudoku.reduce(
      (acc, cell, i) => (cell.fixed ? acc : [...acc, i]),
      <number[]>[]
    );
  if (!valid(sudoku)) return null;

  const [index = -1, ...rest] = indexes;
  if (index === -1) return sudoku;
  for (let i = 1; i <= 9; i++) {
    const s = solve(set(sudoku, index, i), rest);
    if (s) return s;
  }
  return null;
};
