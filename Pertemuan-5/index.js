//Array banyak menyimpan data
//cara deklarasi array
let students = ["john", "bob", "peter", "jack"];
let numbers = [1, 2, 3, 4, 5]; //array itu bisa 1 tipe data
let john = ["john", "doe", 33, true];

console.log(students);
console.log(numbers);
console.log(john);

console.log(students[2]);
students[2] ="bob";
console.log(students);

console.log(students.length);
console.log(students[students.length - 1]);

for(let i = 0; i <students.length; i++){
    console.log(students[i]);
}

//Array method (A- huruf besar)
//string()

console.log(john.toString ); //kenapa toString krna mengubah Array jdi method
//join()
console.log(john.join(" "));
console.log(john.join(" # "));
console.log(john.join("..."));

//pop ()
john.pop();
console.log(john);
john.push("Good Morning");
john.shift();
