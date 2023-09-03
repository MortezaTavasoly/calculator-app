import React from "react";

export default function Numbers({ handleValue, handleDel }) {
  return (
    <>
      <div className="numbers">
        <div
          className="num"
          onClick={() => {
            handleValue(7);
          }}
        >
          7
        </div>
        <div
          className="num"
          onClick={() => {
            handleValue(8);
          }}
        >
          8
        </div>
        <div
          className="num"
          onClick={() => {
            handleValue(9);
          }}
        >
          9
        </div>
        <div className="num reset-del" onClick={handleDel}>
          DEL
        </div>
        <div
          className="num"
          onClick={() => {
            handleValue(4);
          }}
        >
          4
        </div>
        <div
          className="num"
          onClick={() => {
            handleValue(5);
          }}
        >
          5
        </div>
        <div
          className="num"
          onClick={() => {
            handleValue(6);
          }}
        >
          6
        </div>
        <div
          className="num"
          onClick={() => {
            handleValue("+");
          }}
        >
          +
        </div>
        <div
          className="num"
          onClick={() => {
            handleValue(1);
          }}
        >
          1
        </div>
        <div
          className="num"
          onClick={() => {
            handleValue(2);
          }}
        >
          2
        </div>
        <div
          className="num"
          onClick={() => {
            handleValue(3);
          }}
        >
          3
        </div>
        <div
          className="num"
          onClick={() => {
            handleValue("-");
          }}
        >
          -
        </div>
        <div
          className="num"
          onClick={() => {
            handleValue(".");
          }}
        >
          .
        </div>
        <div
          className="num"
          onClick={() => {
            handleValue(0);
          }}
        >
          0
        </div>
        <div
          className="num"
          onClick={() => {
            handleValue("/");
          }}
        >
          /
        </div>
        <div
          className="num"
          onClick={() => {
            handleValue("*");
          }}
        >
          x
        </div>
      </div>
    </>
  );
}
