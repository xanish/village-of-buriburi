$(() => {
    $('#landing-form').on('submit', (e) => {
        var name = $('#username').val();
        var user = { name };
        localStorage.setItem('user', JSON.stringify(user));
    });
});