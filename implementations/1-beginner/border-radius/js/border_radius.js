const inputs = document.querySelectorAll('input');

for (input of inputs) {
    input.addEventListener('keyup', update_border_radius)
}

function update_border_radius(event) {
    console.log(event.target.value)
}
