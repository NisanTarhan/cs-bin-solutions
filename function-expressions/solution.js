function getStudentFromId(recordId) {
    return studentRecords.find(student => student.id == recordId)
}

function printRecords(recordIds) {
    const recordStudents = recordIds.map(getStudentFromId)

    const sortByStudentNameAscending = recordStudents.sort((record1, record2) => {
        if (record1.name < record2.name) {
            return -1;
        } else if (record1.name > record2.name) {
            return 1;
        }
        return 0;
    })

    sortByStudentNameAscending.forEach(student => {
        console.log(`${student.name}(${student.id}) : ${student.paid ? "Paid" : "Not Paid"}`)
    })
}

function paidStudentsToEnroll() {
    const toBeEnrolledStudent = studentRecords.filter(student => student.paid && !currentEnrollment.includes(student.id));
    const toBeEnrolledStudentIds = toBeEnrolledStudent.map(student => student.id);
    return [...currentEnrollment, ...toBeEnrolledStudentIds]
}

function remindUnpaid(recordIds) {
    const unpaidStudents = recordIds.filter(studentId => {
        let student = getStudentFromId(studentId)
        return !student.paid;
    })
    printRecords(unpaidStudents)
}


// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
    { id: 313, name: "Frank", paid: true, },
    { id: 410, name: "Suzy", paid: true, },
    { id: 709, name: "Brian", paid: false, },
    { id: 105, name: "Henry", paid: false, },
    { id: 502, name: "Mary", paid: true, },
    { id: 664, name: "Bob", paid: false, },
    { id: 250, name: "Peter", paid: true, },
    { id: 375, name: "Sarah", paid: true, },
    { id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
