function arrToString(a){
	if(a.length == 0){
  	console.log("");
    return;
  }
  var data = {
  	'1':"One",
    '2':"Two",
    '3':"Three",
    '4':"Four",
    '5':"Five",
    '6':"Six",
    '7':"Seven",
    '8':"Eight",
    '9':"Nine",
    '0':"Zero"
  };
  var res = "";
  for(let i = 0; i < a.length; i++){
  	var s = String(a[i]);
    for(let j = 0; j < s.length; j++){
    	res += data[s[j]];
    }
    if(i < a.length - 1){
    	res += ",";
    }
  }
  console.log(res);
  return;
}

arrToString([3, 25, 209]);
