class Student{

    constructor(){
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
        this.marks = marks;
    }

}

//"Jane",30,[22,50,60,70]

let student1 = new Student()

student1.setName('jane')
student1.setAge(30)
student1.setMarks([22,50,60,70])
