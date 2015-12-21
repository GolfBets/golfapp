module.exports = function(){
  var array = [];
  function Random(){
    return (Math.floor(Math.random() * 4) + 1);
  }
  for (var i = 0; i<4; i++ ){
    var random = Random();
    while (random === array[i-1] || random === array[i-2] || random === array[i-3]){
      random = Random();
    }
    array.push(random);
  }
  array.push(array[0]); random = Random();
  while (random === array[0] || random === array[1]){
    random  = Random();
  }
  array.push(random);
  random = Random();
  while (random === array[4]|| random === array[5]){
    random = Random();
  }
  array.push(random);
  array.push(10-array[4]-array[5]-array[6]);
  array.push(array[0]);
  array.push(10-array[0]-array[1]-array[5]);
  array.push(array[1]); array.push(array[5]);
  return array;
};
