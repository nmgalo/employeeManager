import React, { useState, useEffect } from "react";
import "./Detailed.css";
import TopBar from "../../components/topBar/TopBar";
import { PostData } from "../../services/PostData";
import { PostSecretData } from "../../services/PostSecretData";

const Detailed = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {}, [results]);
  const getDetailed = (pid, year, index) => {
    PostSecretData(pid, year)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // results[index].image = "wow";
        // console.log();
        results[index].image = data.photos.base64Binary[0];
        setResults([...results]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendRequest = (fname, lname) => {
    setLoading(true);
    var findParams = new URLSearchParams();
    findParams.append("fname", fname);
    findParams.append("lname", lname);
    PostData("find_from_all", findParams).then((result) => {
      result.forEach(function (person) {
        person.image = "false";
      });
      setResults(result);
      setLoading(false);
    });
  };

  return (
    <>
      <TopBar
        searching={true}
        notFiltering={true}
        nameValue={fname}
        LnameValue={lname}
        OnNameChange={(event) => {
          setFname(event.target.value);
        }}
        OnLnameChange={(event) => {
          setLname(event.target.value);
        }}
        OnSearchClick={() => {
          setResults([]);
          setLoading(true);
          sendRequest(fname, lname);
        }}
      />
      <div className="detailed_container">
        {results.map((result, index) => (
          <div className="detailed_card" key={index}>
            <h2>
              {result.first_name} {result.last_name}
            </h2>

            <img
              onClick={() => {
                getDetailed(result.pid, result.date_of_birth, index);
              }}
              src={
                results[index].image === "false"
                  ? "https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif"
                  : results[index].image.charAt(0) === "/"
                  ? `data:image/png;base64,${results[index].image}`
                  : `data:image/png;base64,${atob(results[index].image)}`
              }
              alt="Person"
            />
            <p>
              PID: <u>{result.pid}</u>
            </p>
            <p>
              DOB: <u>{result.date_of_birth}</u>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Detailed;
