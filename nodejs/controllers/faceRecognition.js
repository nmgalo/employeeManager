const spawn = require("child_process").spawn;
//test test test
exports.faceRecognition = (req, res, next) => {
  picURL = req.body.picURL;
  //Mikheil saakashvili pics accepted only !!!!!
  const pythonProcess = spawn("python", [
    "./utility/FaceRec/FaceRecognitionWithProbabilies.py",
    picURL,
  ]);
  let dataToSend;
  pythonProcess.stdout.on("data", function (data) {
    console.log("Started");
    console.log(data.toString());
    res.write("Hello " + data);
    res.end("END!");
  });
};
