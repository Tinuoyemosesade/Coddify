class school {
    constructor(schoolname){
        this.schoolname = schoolname;
    }
}



class Student extends School {

    constructor(schoolname){
        super(schoolname)
        this.name ;
        this.age ;
        this.marks ;
    }

    // getter
    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }
    getMarks(){
        return this.marks;
    }

    // setter
    setName(name){
        this.name = name;
    }

    setAge(age){
        this.age = age;
    }

    setMarks(marks){
        if (mark >= 0 && mark < 101 ){
            this.mark = mark;
        }else{
            return "invalid Mark!"
        }
       // this.marks = marks;
    }

}

//"Jane",30,[22,50,60,70]

let student1 = new Student('ABC')

student1.setName('jane')
student1.setAge(30)
student1.setMarks([22,50,60,70])


function Shape(color){
    this.color = color;
}



function Circle(size){
this.size = size;

}

let shape1 = new Shape('red');
Circle.prototype=shape1; 

let circle = new Circle(20); 
console.log(circle.color);



