// Michael Clautice, Richmond, VA
import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">
        {"Mike's Magic Brain will detect faces in your pictures. Give it a try."}
      </p>
      <div className="center">
        <div className="form center pa4 ba bw2 br3 shadow-5">
          <input className="f4 ba bw2 pa2 w-70 center" type="text" />
          <button className="w-50 grow f4 link ph3 pv2 dib white bg-orange">
            Detect!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;