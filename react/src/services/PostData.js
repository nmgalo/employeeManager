export function PostData(url, params, isFile) {
  var myHeaders0 = new Headers();

  if (isFile !== true) {
    myHeaders0.append("Content-Type", "application/x-www-form-urlencoded");
  }

  var requestOptions0 = {
    method: "POST",
    headers: myHeaders0,
    body: params,
    redirect: "follow",
  };

  return fetch(
    "http://localhost:4000/" + url,
    requestOptions0
  ).then((response) => response.json());
}
