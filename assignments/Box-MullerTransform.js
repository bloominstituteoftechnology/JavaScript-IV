function randn() { // Normal distribution, mean 0, std deviation 1, using the Box-Muller Transform
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); // Converts [0,1) to (0,1)
    while (v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log(u)) * Math.cos( 2.0 * Math.PI * v);
}

Instructor.prototype.alterGrade = function(stu) {
    stu.grade = Math.floor(stu.grade + 2 * randn() + 1);
    stu.grade = Math.max(stu.grade, 0);
    stu.grade = Math.min(stu.grade, 100);
};

Student.prototype.graduate = function() {
    if (this.grade >= 70) {
        console.log(`${this.name} graduates! Congratulations!`);
    } else {
        console.log(`${this.name} has a grade of ${this.grade} and is not ready to graduate--keep trying!`);
    }
}

for (let i = 0; i < 40; i++) {
  sharon.alterGrade(jenny);
}
jenny.graduate();

while (true) {
  mckay.graduate();
  if (mckay.grade >= 70) break;
  jeff.alterGrade(mckay);
}

//Then I wrote a `while(true)` loop to make sure I graduated :wink: But that's how I crashed my browser a couple times. If you run my code and you don't want to crash your browser, definitely don't get rid of the `+1` after the `randn()` invocation! (edited)

// Written by McKay Bonham