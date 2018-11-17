function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementByID('nested').querySelectorAll('target');
}

function increaseRankBy(n){
  const temp = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i=0; i < temp.length; i++){
    temp[i].innerHTML = parseInt(temp[i].innerHTML) + n;
  }
}

function deepestChild(){
  const grand-node = document.getElementbyId('grand-node');
  const deeper-node =grand-node.children[0];
  while (deeper-node){
    grand-node = deeper-node;
    deeper-node = grand-node.children[0];
  }
}
