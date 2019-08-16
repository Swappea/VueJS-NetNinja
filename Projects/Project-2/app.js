// var one = new Vue({
//     el: '#vue-app-one',
//     data: {
//         title: 'Vue App One'
//     },
//     methods: {

//     },
//     computed: {
//         greet: function () {
//             return 'This is app one';
//         }
//     },
// });

// var two = new Vue({
//     el: '#vue-app-two',
//     data: {
//         title: 'Vue App Two'
//     },
//     methods: {
//         changeTitle: function () {
//             one.title = 'Vue App One (modified by vue instance 2)';
//         }
//     },
//     computed: {
//         greet: function () {
//             return 'This is app two';
//         }
//     },
// });

// two.title = "Vue App Two(changed from outside)";

// Vue.component('greeting', {
//     template: '<p>Hey there, I am {{name}}.<button @click="changeName">Change name</button></p>',
//     data: function() {
//         return {
//             name: 'John'
//         }
//     },
//     methods: {
//         changeName: function() {
//             this.name = 'jane';
//         }
//     }
// });

// var one = new Vue({
//     el: '#vue-app-one',
// });
// var two = new Vue({
//     el: '#vue-app-two',
// });

new Vue({
    el: '#vue-app',
    data: {
        output: 'Your fav food'
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;
        }
    }
});