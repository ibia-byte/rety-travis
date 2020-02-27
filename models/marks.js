class Marks {
    constructor(subject, student, marks) {
        this.subject = subject
        this.student = student
        this.marks = marks
    }

    computeScore() {
        let score = null
        if (this.marks >= 80) {
            // console.log(`${this.student}You have an A`)
            score = 'A'
        }
        else if (this.marks > 70 && marks < 80) {
            console.log("You have a B")
        }
        else if (this.marks > 60 && marks < 70) {
            console.log("You have a C")
        }
        else if (this.marks > 50 && marks < 60) {
            console.log(`${this.student}You have a D`)
        }
        else if (this.marks > 40 && marks < 50) {
            console.log("You have a E")
        }
        else if (this.marks > 0 && marks < 40) {
            console.log("You have a F")
        }
        return score
    }

    isValidate() {
        let valid = true
        if (this.student === null) {
            valid = false;
            console.log("student doesnt exist");
        }
        if (typeof (this.marks !== 'number')) {
            valid = true;
        }
        if (this.marks < 0) {
            console.log('marks should be greater than 0');

        }
        if (this.marks > 100) {
            valid = false;
            console.log("Marks should be greater than 0")
        }
        return valid
    }
}

module.exports = Marks;