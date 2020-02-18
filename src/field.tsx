import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { Sudoku, copy, solve, empty, crystalize } from "./sudoku";

export type CellProps = {
  value: number;
  onChange: (n: number) => void;
  readonly: boolean;
};
export const Cell = (props: CellProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      ref.current.select();
      ref.current.onblur = () => setEdit(false);
    }
  });
  return (
    <div className={`cell ${props.readonly ? "set" : ""}`}>
      {edit && !props.readonly ? (
        <input
          value={props.value}
          onChange={e => props.onChange(Number(e.target.value) || 0)}
          type="text"
          ref={ref}
          maxLength={1}
        />
      ) : (
        <span onClick={() => setEdit(true)}>{props.value || <>&nbsp;</>}</span>
      )}
    </div>
  );
};

export type FieldProps = {
  sudoku: Sudoku;
};
export const Field = (props: FieldProps) => {
  const [sudoku, setSudoku] = useState(props.sudoku);
  const updateCell = (v: number, i: number) => {
    const s = copy(sudoku);
    s[i].val = v;
    setSudoku(s);
  };

  const onSolve = () => {
    const s = solve(crystalize(sudoku));
    if (s) setSudoku(s);
  };

  const onClear = () => setSudoku(empty());

  return (
    <>
      <div className="field">
        {sudoku.map((c, i) => (
          <Cell
            value={c.val}
            onChange={v => updateCell(v, i)}
            readonly={c.fixed}
          />
        ))}
      </div>
      <button onClick={onSolve}>solve</button>
      <button onClick={onClear}>clear</button>
    </>
  );
};
