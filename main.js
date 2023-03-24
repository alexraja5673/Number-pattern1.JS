var y=parseInt(prompt());
var p=0;
function pattern(y){
	for (i=1;i<=y;i++){
		for (j=1;j<=i;j++){
			p=i;
			document.write(p);
			
		}
		document.write("<br>");
		}
}
pattern(y);