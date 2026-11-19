
const students = document.querySelectorAll(".student-row");

students.forEach(function(student) {

    const inputs = student.querySelectorAll(".score");
    const totalCell = student.querySelector(".total");
    const gradeCell = student.querySelector(".grade");

    inputs.forEach(function(input) {

        input.addEventListener("input", function() {

            let total = 0;
            let complete = true;
            let valid = true;

            inputs.forEach(function(field) {

                if (field.value === "") {
                    complete = false;
                }

                const score = Number(field.value);
                const maximum = Number(field.max);

                if (field.value !== "" &&
                    (score < 0 || score > maximum)) {
                    valid = false;
                }

                total += score;
            });

            if (!valid) {
                totalCell.textContent = "Invalid";
                gradeCell.textContent = "--";
                return;
            }

            if (!complete) {
                totalCell.textContent = "--";
                gradeCell.textContent = "--";
                return;
            }

            totalCell.textContent = total;

            if (total >= 70) {
                gradeCell.textContent = "A";
            } else if (total >= 60) {
                gradeCell.textContent = "B";
            } else if (total >= 50) {
                gradeCell.textContent = "C";
            } else if (total >= 45) {
                gradeCell.textContent = "D";
            } else if (total >= 40) {
                gradeCell.textContent = "E";
            } else {
                gradeCell.textContent = "F";
            }

        });

    });

});
