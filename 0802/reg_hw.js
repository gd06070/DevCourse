let str1 = '89139012349'
let str3 = 'AA BB 12 345'
let pattern = /[^1-8]/g;
let pattern2 = /e\B/g
let pattern3 = /A{2,}/g;
let pattern4 = /[0-9]+/g;
let result = str1.match(pattern);
let result2 = str1.replace(pattern2, "_")

let text = "";
text += result + '<br>';
text += result2 + '<br>';
document.getElementById('show').innerHTML = text;
