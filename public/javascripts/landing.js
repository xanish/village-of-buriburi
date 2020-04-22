$(() => {
    $('#join-game').on('click', () => {
        $('#join-game-modal').css('visibility', 'visible');
    });
    $('.modal-close').on('click', () => {
        $('#join-game-modal').css('visibility', 'hidden');
    });
});