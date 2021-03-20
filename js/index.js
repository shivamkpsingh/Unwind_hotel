let tour = document.getElementById('tourBtn');
tour.addEventListener('click', () => {
    window.alert('Please go down slowly');
})



let bookRoom = document.getElementById('bookRoom');
bookRoom.addEventListener('click', (e) => {
    let confirm = window;
    confirm = window.confirm('Are you sure want to book room')

    // console.log(confirm);
    if (confirm == true) {
        window.alert('Your room is book now')
    } else {
        window.alert('Sorry, we are unable to book your room')
    }
    e.preventDefault()

})