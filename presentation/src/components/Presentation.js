import React from "react";
// const officegen = require("officegen");
// let pptx = officegen("pptx");
// const fs = require("fs");

import Axios from "axios";
import FileDownload from "js-file-download";
const Presentation = () => {
  const powerPointDownload = (e) => {
    e.preventDefault();
    Axios({
      url: "http://localhost:4000",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, "hamlet.pptx");
    });
  };
  return (
    <>
      <div className="">
        Presentation
        <div className="">
          <button onClick={(e) => powerPointDownload(e)}>download</button>
        </div>
        <div className="little__info mt-3">
          <h4 className="text-lg font-bold mb-1">Editor's Choice</h4>
          <p className="text-gray-700 font-normal">2038 templates</p>
        </div>
      </div>
    </>
  );
};

export default Presentation;
