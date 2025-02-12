import React, { useState } from "react";

export default function SetPage({ page, setPage, totalPagess, reSetPage }) {
  return (
    <section className="otherPages">
      <button
        onClick={() => {
          setPage(1);
          reSetPage();
        }}
        className="naviBtn"
      >
        first
      </button>
      <button
        onClick={() => {
          if (page !== 1) {
            setPage(page - 1);
          }
        }}
        className="naviBtn"
      >
        {"<<"} previous
      </button>
      {totalPagess}
      <button onClick={() => setPage(page + 1)} className="naviBtn">
        next {">>"}
      </button>
    </section>
  );
}
