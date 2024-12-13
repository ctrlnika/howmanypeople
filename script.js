// Generate 100 Human Figures
const infographicContainer = document.getElementById('infographic');

for (let i = 0; i < 100; i++) {
    const person = document.createElement('div');
    person.classList.add('person');
    infographicContainer.appendChild(person);
}

// Process User Input
function processQuery() {
    const query = document.getElementById('query').value.toLowerCase();
    const messageElement = document.getElementById('message');

    if (query.includes('anxiety')) {
        highlightFigures(18);  // Example: 18% with anxiety
        messageElement.innerText = "18% of people suffer from anxiety.";
    } else {
        messageElement.innerText = "Sorry, we don't have data on that.";
        highlightFigures(0);  // Reset the infographic
    }
}

// Highlight Figures Function
function highlightFigures(percentage) {
    const totalPeople = 100;
    const highlightCount = Math.floor((percentage / 100) * totalPeople);
    const people = document.querySelectorAll('.person');

    people.forEach((person, index) => {
        if (index < highlightCount) {
            person.classList.add('highlight');
        } else {
            person.classList.remove('highlight');
        }
    });
}
