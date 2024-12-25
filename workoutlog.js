document.getElementById('addExerciseBtn').addEventListener('click', function() {
    // Reference to the table body
    const tbody = document.getElementById('workoutTable').tBodies[0];

    // Create a new table row
    const newRow = tbody.insertRow();

    // Create and set up the checkbox cell
    const checkboxCell = newRow.insertCell(0);
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkboxCell.appendChild(checkbox);

    // Loop to create cells for Exercise, Sets, and Reps
    for(let i=1; i<=3; i++) {
        const cell = newRow.insertCell(i);
        const input = document.createElement('input');
        input.type = 'text';
        cell.appendChild(input);
    }
});