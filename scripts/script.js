function clickMenu(){
  var itens = document.getElementById("itens");
  if(itens.style.display == 'block'){
    itens.style.display = 'none';
  }else{
    itens.style.display = 'block';
  }
}
function mudouTamanho(){
  var itens = document.getElementById("itens");
  if(window.innerWidth >= 768){
    itens.style.display = 'block';
  }else{
    itens.style.display = 'none';
  }
}