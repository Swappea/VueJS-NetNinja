new Vue({
    el: '#vue-app',
    data: {
        name: 'Swapnesh',
        age: 23,
        website: 'http://www.google.com',
        websiteTag: '<a href="http://www.google.com">Google(v-html)</a>',
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        error: false,
        sucess: false,
        names: ['John', 'Jane', 'Johnny', 'Mary'],
        employees: [
            {
                id: 1,
                name: 'John',
                isAvailable: true
            },
            {
                id: 2,
                name: 'Jane',
                isAvailable: false
            },
            {
                id: 3,
                name: 'Johnny',
                isAvailable: true
            }
        ]
    },
    methods: {
        greet: function (time) {
            return `Good ${time}`;
        },
        add: function (inc) {
            this.age += inc;
        },
        subtract: function (dec) {
            this.age -= dec;
        },
        updateXY: function (evt) {
            this.x = evt.offsetX;
            this.y = evt.offsetY;
        },
        click: function () {
            alert('clicked');
        },
        logName: function() {
            console.log('you entered your name');
        },
        logAge: function() {
            console.log('you entered your age');
        }
    },
    computed: {
        addToA: function() {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function() {
            console.log('addToB');
            return this.b + this.age;
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby,
            };
        }
    },
});