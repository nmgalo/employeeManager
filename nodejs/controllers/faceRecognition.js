const spawn = require("child_process").spawn;
fs = require("fs");

//test test test
exports.faceRecognition = (req, res, next) => {
  picURL = req.body.picURL;
  console.log(picURL);
  //Mikheil saakashvili pics accepted only !!!!!
  const pythonProcess = spawn("python", [
    "./utility/FaceRec/labtest.py",
    picURL,
  ]);
<<<<<<< HEAD
  pythonProcess.stdout.on("data", function (data) {
    res.send({ probability: data.toString() });
=======
  pythonProcess.stdout.on("data", function (incomingData) {
    data = JSON.parse(incomingData);
    results = [{}];
    data.Name.forEach(function (value, i) {
      results.push({ name: data.Name[i], probability: data.Probability[i] });
    });

    res.send(results);
>>>>>>> 1b327a36cb7f80b4dc0a57bc96cfc406921c8692
  });
};

exports.imageUpload = (req, res, next) => {
  try {
    if (!req.files) {
      res.send("SUM TIN WONG !");
    } else {
      let image = req.files.image;

      image.mv("./uploads/" + image.name);
      res.send({
        message: "Alles gut fantastisch",
        data: {
          status: 200,
          extension: image.mimetype,
          name: image.name,
          size: image.size,
        },
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.imageServe = (req, res, next) => {
  fileName = req.params.fileName;
  console.log(fileName);

  var image = fs.readFileSync(`./uploads/${fileName}`);
  res.writeHead(200, { "Content-Type": "image/gif" });
  res.end(image, "binary");
};
