console.log("Hello, JavaScript");

let students = {
    student1 : {
        name: "John Doe",
        age: 20,
        courses: [{
            courseName: "Math",
            grade: 90
        },{
            courseName: "English",
            grade: 85
        },{
            courseName: "Science",
            grade: 88
        }]
    },
    student2 : {
        name: "Jane Smith",
        age: 22,
        courses: [{
            courseName: "Math",
            grade: 95
        },{
            courseName: "English",
            grade: 92
        },{
            courseName: "Science",
            grade: 90
        }]
    },
    student3 : {

        name: "Michael Johnson",
        age: 21,
        courses: [{
            courseName: "Math",
            grade: 88
        },{
            courseName: "English",
            grade: 87
        },{
            courseName: "Science",
            grade: 92
        }]
    }
}

function addCourse( courseName , grade) {
    let course = students.student1.courses;
    course.push({
        courseName: courseName,
        grade: grade
    });
}
function removeCourse(courseName) {
    let course = students.student1.courses;
    for (let i = 0; i < course.length; i++) {
        if (course[i].courseName === courseName) {
            course.splice(i, 1);
            break;
        }

    }

}

function calculateAverageGrade(student) {
    let totalGrade = 0;
    for (let i = 0; i < student.courses.length; i++) {
        totalGrade += student.courses[i].grade;
    }
    return totalGrade / student.courses.length;
}

