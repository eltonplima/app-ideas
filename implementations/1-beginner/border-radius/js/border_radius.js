const inputs = document.querySelectorAll('input');

for (input of inputs) {
    input.addEventListener('input', update_border_radius)
}

function update_border_radius(event) {
    const target = event.target
    target.value = target.value.replace(/[^0-9]/, '')
}
