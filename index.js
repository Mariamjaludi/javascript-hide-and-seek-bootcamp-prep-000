function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector(".target");
}

function increaseRankBy(n){
  const temp = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i=0; i < temp.length; i++){
    temp[i].innerHTML = parseInt(temp[i].innerHTML) + n;
  }
}

function deepestChild(){
  var grandNode = document.getElementById('grand-node');
  var deeperNode =grandNode.children[0];
  while (deeperNode){
    grandNode = deeperNode;
    if (grandNode.children[0] === undefined){
      return deeperNode;}
    else
      { deeperNode = grandNode.children[0]; }
  }
}
