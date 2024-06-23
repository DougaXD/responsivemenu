function mudouTamanho(){
  if(window.innerWidth >= 768px){
    itens.style.display = 'none';
  }else{
    itens.style.display = 'none';
  }
}

function clickMenu(){
  var itens = document.getElementById("itens");
  if(itens.style.display == 'block'){
    itens.style.display = 'none';
  }else{
    itens.style.display = 'block';
  }
}