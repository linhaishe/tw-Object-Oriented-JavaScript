class Class {
    constructor(number) {
        this.number = 2;
    }
    getDisplayName() {
        return "Class " + this.number + "";
    }

    assignLeader(student) {
        if (student.klass === this) {
            this.leader = student;
        } else {
            this.leader = null;
        }
    }
}

module.exports = Class
