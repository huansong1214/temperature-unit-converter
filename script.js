document.getElementById("converter-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    // Check if input is a number
    if (isNaN(inputTemp)) {
        document.getElementById("convertedTemp").innerText = "Please enter a valid number";
        return;
    }

    // Conversion logic
    let convertedTemp;
    let formula;

    if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        convertedTemp = (inputTemp - 32) * 5 / 9;
        formula = `(${inputTemp}°F - 32) * 5 / 9 = ${convertedTemp.toFixed(2)}°C`;
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        convertedTemp = (inputTemp * 9 / 5) + 32;
        formula = `(${inputTemp}°C * 9 / 5) + 32 = ${convertedTemp.toFixed(2)}°F`;
    }

    // Display the result
    document.getElementById("convertedTemp").innerText = `Converted Temperature: ${convertedTemp.toFixed(2)} ${toUnit === "celsius" ? "°C" : "°F"}`;
    document.getElementById("formula").innerText = `Formula: ${formula}`; // Display the formula
});

    // Automatically change toUnit based on fromUnit selection
    document.getElementById("fromUnit").addEventListener("change", function() {
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = fromUnit === "fahrenheit" ? "celsius" : "fahrenheit"; // Set opposite unit
    document.getElementById("toUnit").value = toUnit; // Update toUnit dropdown
});

    // Automatically change fromUnit based on toUnit selection
    document.getElementById("toUnit").addEventListener("change", function() {
    const toUnit = document.getElementById("toUnit").value;
    const fromUnit = toUnit === "fahrenheit" ? "celsius" : "fahrenheit"; // Set opposite unit
    document.getElementById("fromUnit").value = fromUnit; // Update fromUnit dropdown
});