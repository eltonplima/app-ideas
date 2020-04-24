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

function update_respective_border_radius(target) {
    switch (target.id) {
        case 'top-left':
            console.log('update top-left')
            break
        case 'top-right':
            console.log('update top-right')
            break
        case 'bottom-left':
            console.log('update bottom-left')
            break
        case 'bottom-right':
            console.log('update bottom-right')
            break
        default:
            console.error(`The element ${target.id} cannot be used to update border-radius properties!`)
    }
    console.log(target.id)
}

function update_border_radius(event) {
    const target = event.target
    update_target_value(target)
    update_respective_border_radius(target)
}
