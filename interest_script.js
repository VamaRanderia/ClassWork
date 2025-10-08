// Function to calculate interest automatically
function calculateInterest() {
    let p = document.getElementById("principal").value;
    let r = document.getElementById("rate").value;
    let t = document.getElementById("time").value;

    if (p && r && t) {
        let si = (p * r * t) / 100;
        document.getElementById("result").textContent = si;
    } else {
        document.getElementById("result").textContent = "0";
    }
}

// Run calculation whenever user types
document.getElementById("principal").addEventListener("input", calculateInterest);
document.getElementById("rate").addEventListener("input", calculateInterest);
document.getElementById("time").addEventListener("input", calculateInterest);
