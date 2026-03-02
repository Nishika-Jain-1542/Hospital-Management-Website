function toggleSearchMenu() {
    document.getElementById("searchMenu").classList.toggle("hidden");
}

function showAvailability(button) {
    button.nextElementSibling.classList.toggle("hidden");
}

function openLogin() {
    document.getElementById("loginModal").classList.remove("hidden");
}

function closeLogin() {
    document.getElementById("loginModal").classList.add("hidden");
}

function openPatient() {
    closeLogin();
    document.getElementById("patientModal").classList.remove("hidden");
}

function closePatient() {
    document.getElementById("patientModal").classList.add("hidden");
}

function openEmployee() {
    alert("Employee login will be implemented in future scope.");
}