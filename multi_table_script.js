function printTable() {
    let number = document.getElementById("num").value;
    let resultDiv = document.getElementById("result");

    // Clear previous result
    resultDiv.innerHTML = "";

    // Generate table
    for (let i = 1; i <= 10; i++) {
        let line = number + " × " + i + " = " + (number * i);
        let p = document.createElement("p");
        p.textContent = line;
        resultDiv.appendChild(p);
    }

    // prevent page reload on form submit
    return false;
}

