
// When the form is submitted...
document.getElementById('mealForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();
    
    // Reference to the table body and form elements
    const tbody = document.getElementById('mealTable').tBodies[0];
    const day = document.getElementById('day').value;
    const mealType = document.getElementById('mealType').value;
    const meal = document.getElementById('meal').value;
const calories = document.getElementById('calories').value;
    
    // Create a new table row
    const newRow = tbody.insertRow();
    
    // Add cells and populate with form data
    newRow.insertCell(0).textContent = day;
    newRow.insertCell(1).textContent = mealType;
    newRow.insertCell(2).textContent = meal;
	newRow.insertCell(3).textContent = calories;
    
    // Optionally: Clear the form after adding a meal
    document.getElementById('mealForm').reset();
});
