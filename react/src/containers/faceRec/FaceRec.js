import React, { useState } from "react";
import TopBar from "../../components/topBar/TopBar";
import "./FaceRec.css";
import { PostData } from "../../services/PostData";
import Spinner from "../../components/spinner/Spinner";

const FaceRec = () => {
  const [image, setImage] = useState(null);
  const [serverImage, setServerImage] = useState("");
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(false);

  const onInputChange = (event) => {
    setImage(event.target.files[0]);
  };

  const faceRecognition = (picURL) => {
    setLoading(true);
    var findParams = new URLSearchParams();
    findParams.append("picURL", picURL);
    PostData("face_recognition", findParams).then((result) => {
      setResults(result.probability);
      setLoading(false);
    });
  };

  const uploadFile = (file) => {
    const fileData = new FormData();
    fileData.append("image", file);
    PostData("faceupload", fileData, true).then((res) => {
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
              alt="Face to scan"
              className="facerec_image"
              src={`http://localhost:4000/faceimages/${serverImage}`}
            />
          ) : null}
        </div>
        {loading ? <Spinner /> : null}
        {results ? <p className="facerec_results">{results}</p> : null}
      </div>
    </>
  );
};

export default FaceRec;
