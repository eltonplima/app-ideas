const inputs = document.querySelectorAll('input');

for (input of inputs) {
    input.addEventListener('input', update_border_radius)
}

function filter_valid_values(value) {
    return value.replace(/[^0-9]/, '')
}

function update_target_value(target) {
    target.value = filter_valid_values(target.value)
}

function update_border_radius(event) {
    const target = event.target
    update_target_value(target)
}
