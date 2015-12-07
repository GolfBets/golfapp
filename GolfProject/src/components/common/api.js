var rootUrl = "http://localhost:3000/";


module.exports = function(serverRoute){
  var url  = `${rootUrl}${serverRoute}`;
  console.log(url)
  return fetch(url)
    .then(function(response){
      return response.json();
    })
    .catch((error) => {
      console.warn(error);
    })
}
