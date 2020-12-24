import React, { useState, useEffect } from "react";
import TopBar from "../../components/topBar/TopBar";
import "./FaceRec.css";
import { PostData } from "../../services/PostData";

const FaceRec = (props) => {
  const [image, setImage] = useState(null);
  const [serverImage, setServerImage] = useState("");
  const [results, setResults] = useState("");

  const onInputChange = (event) => {
    setImage(event.target.files[0]);
  };

  const faceRecognition = (picURL) => {
    var findParams = new URLSearchParams();
    findParams.append("picURL", picURL);
    PostData("face_recognition", findParams).then((result) => {
      console.log(result);
      setResults(result.probability);
    });
  };

  const uploadFile = (file) => {
    const fileData = new FormData();
    fileData.append("image", file);
    PostData("faceupload", fileData, true).then((res) => {
      console.log(res);
      setServerImage(image.name);
      faceRecognition(`http://localhost:4000/faceimages/${image.name}`);
    });
  };
  return (
    <>
      <TopBar />
      <div className="facerec_content">
        <div className="facerec_form">
          <input type="file" onChange={(event) => onInputChange(event)} />
          <button onClick={() => uploadFile(image)}>Hey</button>
          {serverImage ? (
            <img
              className="facerec_image"
              src={`http://localhost:4000/faceimages/${serverImage}`}
            />
          ) : null}
        </div>
        {results ? <p className="facerec_results">{results}</p> : null}
      </div>
    </>
  );
};

export default FaceRec;
