function formatJson() {
    const jsonInput = document.getElementById('jsonInput').value;
    const outputElement = document.getElementById('formattedJson');
    
    try {
        // Parse JSON and format it
        const jsonData = JSON.parse(jsonInput);
        const formattedJson = JSON.stringify(jsonData, null, 2);
        outputElement.textContent = formattedJson;
    } catch (e) {
        // Handle JSON parse errors
        outputElement.textContent = 'Invalid JSON';
    }
}
