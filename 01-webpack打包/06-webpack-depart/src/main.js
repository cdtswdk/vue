const {add, mul} = require('./js/MathUtils');

console.log(add(1, 2));
console.log(mul(2, 4));


import {age, name} from "./js/info";

console.log(age);
console.log(name);

//引入css
require('./css/normal.css');

//引入less
require('./css/special.less');

document.writeln('<div>hello world！</div>');

import Vue from 'vue'
import App from './vue/App.vue'

/*const app = new Vue({
    el: '#app',
    template: `
        <div id="app">
            {{message}} {{name}}
        </div>
    `,
    data: {
        message: '张三',
        name: '李四'
    }
});*/
new Vue({
    el: '#app',
    template: `<App/>`,
    components: {
        App
    }
});
