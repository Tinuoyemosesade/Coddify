

//es5
function person(name, age, address = "not exist"){
    this.name =name;
    this.age = age;

    //create methods
  this.getInfo = function(){
    return `name: ${this.name} age: ${this.age} address: ${this.address}`
  
  }
  
  let person1 = new person("jane", 30);
  console.log(person1)

  //ES6

  class Users {
      constructor (id, name, joinAt){
          this.id=id;
          this.name = name;
          this.joinAt =new Date();

      }
      displayInfo(){
        return `${this.name}'s id is : ${this.id}`
  }

  let user1 = new Users (1001, 'Zara');

  console.log(user1)
  console.log(user1.displayInfo())


  const A = class {
      constructor(company){
          this.companyName = company;
      }
  }
  let a1 = new A('CODIFYCOLLEGE');
  console.log(a1);



function main(callback) {
        console.log('start main function');

        callback()
}

main(show)


let btn = document.getElementById('btn')

btn.onclick = showAlert;

function showAlert() {
    alert(4+5)
}

function main(callback) {
        console.log('start main function');

        return  callback()
}

console.log( main(function() { console.log('hello' ); }));
