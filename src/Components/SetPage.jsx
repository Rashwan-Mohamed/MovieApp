import React, { useState } from "react";
import useWidth from "../UseWidth";

export default function SetPage({ page, setPage, totalPagess, reSetPage }) {
  const width = useWidth();
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
        {"<<"}
        {width > 500 && "previous"}
      </button>
      {totalPagess}
      <button onClick={() => setPage(page + 1)} className="naviBtn">
        {width > 500 && "next"}
        {">>"}
      </button>
    </section>
  );
}
