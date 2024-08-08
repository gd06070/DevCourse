let str1 = "I go to a mart. I go to a MART. I go to a mart. I go to a MART"
let pattern = /mart/ig;
let result = str1.replace(pattern, 'office');
document.getElementById('show').innerHTML = result;
