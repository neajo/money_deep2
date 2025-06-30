document.addEventListener(&#39;DOMContentLoaded&#39;, function(){
const aumentaFonteBotao = document.getElementById(&#39;aumentar-fonte&#39;);
const diminuiFonteBotao = document.getElementById(&#39;diminuir-fonte&#39;);

let tamanhoAtualFonte = 1;
aumentaFonteBotao.addEventListener(&#39;click&#39;, function(){
tamanhoAtualFonte += 0.1;
document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

});

diminuiFonteBotao.addEventListener(&#39;click&#39;, function(){
tamanhoAtualFonte -= 0.1;
document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

});

});
