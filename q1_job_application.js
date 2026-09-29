const form = document.getElementById('jobForm');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Your application has been submitted successfully!');
    form.reset();
  });
}
