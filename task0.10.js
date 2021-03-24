var str1 ="happy";
var str2 = "heavenly"; 
function commonChar(){
var dict ={};
for(var i=0; i < str1.length; i++) {
dict[str1.charAt(i)] =1;
}
var comChar=[];
for (var i=0; i < str2.length; i++){
    if(dict[str2.charAt(i)] ==1){
        comChar.push(str2.charAt(i));
        console.log(dict);

    }
}
}
    commonChar();
    
