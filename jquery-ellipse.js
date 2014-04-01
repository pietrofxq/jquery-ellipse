/* jQuery Ellipsi Text
   Version 1.0
   Author: github.com/pietrofxq
*/


function elipsiText(selector,length){

	var vetor = $(selector).map(function(){

		return $(this).text();

	}).get();

	var i;
	var teste = [];

	for (i = 0; i < vetor.length; i++){

		teste.push(vetor[i].substr(0,length) + "...");
	}

	$(selector).each(function(i){

		$(this).text(teste[i]);

	})
}