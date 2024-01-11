const students = [
    {
        name: "michael ajaude",
        subject: "mathmatics",
        city: "lagos",
        age: 22,
        phone:"07037217882"

    },

    {
        name: "chinedu ajaude",
        subject: "computer",
        city: "lagos",
        age: 24,
        phone:"07037217845"

    },

    {
        name: "michael olamide",
        subject: "html",
        city: "enugu",
        age: 20,
        phone:"07037212345"

    },

    {
        name: "tolu tunde",
        subject: "java script",
        city: "ibadan",
        age: 31,
        phone:"07037123456"
    },

    {
        name: "chidima okori",
        subject: "english",
        city: "abia",
        age: 21,
        phone:"07037217882"

    },


    
];
const student =students.find((student) => {
    return student.city === "lagos"
});

console.log(student);

// .forEach() method
students.forEach((student) => {
    console.log(`${student.name} lives in ${student.city} and is ${student.age} years old`);
});

// to return the students that are from lagos

const filteredStudents = students.filter((student) => {
    return student.city == "lagos"
});

console.log(filteredStudents);


// to return the students that are not from lagos
const filteredStudents = students.filter((student) => {
    return student.city !== "lagos"
});
console.log(filteredStudents);