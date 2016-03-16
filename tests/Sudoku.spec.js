'use strict';

const Test = require('tape');

const Sudoku = require('./../Sudoku');
const SudokuValidator = require('./../SudokuValidator').SudokuValidator;

Test('Sudoku-Validator', suite => {
  Test('3x3 Grid (9)', t => {
    let sudoku = new SudokuValidator(Sudoku.nineTrue());
    t.ok(sudoku.validate(9), 'Should be a valid Sudoku Grid');
    t.end();
  });
  Test('Second 3x3 Grid (9)', t => {
    let sudoku = new SudokuValidator(Sudoku.nineTrue1());
    t.ok(sudoku.validate(9), 'Should also be a valid Sudoku Grid');
    t.end();
  });
  Test('Bad 3x3 Grid (9)', t => {
    let sudoku = new SudokuValidator(Sudoku.nineFalse());
    t.notOk(sudoku.validate(9), 'Should return false for invalid grid');
    t.end();
  });
  Test('Badder 3x3 Grid (9)', t => {
    let sudoku = new SudokuValidator(Sudoku.nineFalse1());
    t.notOk(sudoku.validate(9), 'Should also return false for invalid grid');
    t.end();
  });

  Test('2x2 Grid (4)', t => {
    let sudoku = new SudokuValidator(Sudoku.fourTrue());
    t.ok(sudoku.validate(4), 'Should return true');
    t.end();
  });
  Test('Bad 2x2 Grid (4)', t =>{
    let sudoku = new SudokuValidator(Sudoku.fourFalse());
    t.notOk(sudoku.validate(4), 'Should return false');
    t.end();
  })

  Test('4x4 Grid (16)', t => {
    let sudoku = new SudokuValidator(Sudoku.sixteenTrue());
    t.ok(sudoku.validate(16), 'Should return true');
    t.end();
  })
  Test('Bad 4x4 Grid (16)', t => {
    let sudoku = new SudokuValidator(Sudoku.sixteenFalse());
    t.notOk(sudoku.validate(16), 'Should return false');
    t.end();
  })
  suite.end();
});