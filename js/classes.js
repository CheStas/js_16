function Human(name, age, gender, height, weight){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
}

Worker.prototype = Object.create(Human.prototype);
Student.prototype = Object.create(Human.prototype);

function Worker(name, age, gender, height, weight, job, placeOfWork, salary){
    Human.apply(this, arguments);
    this.job = job;
    this.placeOfWork = placeOfWork;
    this.salary = salary;
};

function Student(name, age, gender, height, weight, placeOfStudy, sholarship){
    Human.apply(this, arguments);
    this.placeOfStudy = placeOfStudy;
    this.scholarship = sholarship;
};

Worker.prototype.work = function() {
    console.log("I'm busy");
};

Student.prototype.watchShows = function() {
    console.log("I'm watching TV shows");
};

var worker1 = new Worker('Bob', 18, 'male', 225, 50, 'programmer-ja', 'google', 99900);
var worker2 =  new Worker('Bober', 19, 'male', 385, 88, 'programmer-fe', 'google2', 9990);
var worker3 =  new Worker('Vober', 20, 'female', 485, 55, 'programmer-tes', 'google3', 9991);
var student1 = new Student('Ivan', 50, 'male', 585, 65, 'university', 1);

console.log('worker1= ', worker1);
console.log('worker2= ', worker2);
console.log('worker3= ', worker3);
console.log('student1 = ', student1);
console.log('worker3, what are you doing?', worker3.work());
console.log('student1, what are you doing?', student1.watchShows());
