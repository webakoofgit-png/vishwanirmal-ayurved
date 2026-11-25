document.addEventListener('submit', function (event) {
    if (!(event.target instanceof HTMLFormElement)) return;
    event.preventDefault();
    const form = event.target;
    let message = form.querySelector('.static-form-status');
    if (!message) {
        message = document.createElement('p');
        message.className = 'static-form-status';
        message.setAttribute('role', 'status');
        form.append(message);
    }
    message.textContent = 'This website preview does not send forms. Please use the phone or email details on the Contact page.';
}, true);
