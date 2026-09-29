const form = document.getElementById("jobForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Your application has been submitted!");

    form.reset();
});