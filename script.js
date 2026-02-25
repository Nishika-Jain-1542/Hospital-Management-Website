function showMoreFaculty() {
    document.getElementById("moreFaculty").classList.toggle("hidden");
}

function toggleAvailability(button) {
    const availabilityText = button.nextElementSibling;
    availabilityText.classList.toggle("hidden");
}

function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

function openPatientLogin() {
    closeLogin();
    document.getElementById("patientModal").style.display = "flex";
}

function closePatientLogin() {
    document.getElementById("patientModal").style.display = "none";
}
