export function PostData(url, params) {
  var myHeaders0 = new Headers();
  myHeaders0.append("Content-Type", "application/x-www-form-urlencoded");

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
