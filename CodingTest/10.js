const s = '[](){}'
const stack = []

for (let i = 0; i < s.length; i ++) {
    stack.push(s[i])    
    console.log(stack)
}