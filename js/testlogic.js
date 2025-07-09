var xhttp = new XMLHttpRequest();
xhttp.open("get", "../apis/api.json");
xhttp.send();
xhttp.onReadyStateChange = function () {
  console.log(xhttp.readyState);
};
