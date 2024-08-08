import _, { get } from 'lodash'
import * as R from './modules.js'
import {arrs, getName} from './modules.js'
import myData from './myData.json'
import axios from 'axios'

// console.log(cube(2, 4))
// console.log(myData)
// console.log(R.Rarrs);
// console.log(R.getName());
// const user = {
//     name : 'wool',
//     age : 26,
//     email : ['zizibae0715@naver.com']
// }

// const user2 = {
//     name : 'woole',
//     age : 26,
//     email : ['zizibae0715@naver.com']
// }

// const str = JSON.stringify(user);
// console.log(str);

const API_KEY = ''

getMovies();