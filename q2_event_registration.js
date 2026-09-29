const form = document.getElementById('eventForm');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Your event registration has been submitted successfully!');
    form.reset();
  });
}
