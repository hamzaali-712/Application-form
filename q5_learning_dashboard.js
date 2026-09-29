const form = document.querySelector('.assignment-panel form');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Your assignment has been submitted successfully!');
    form.reset();
  });
}
