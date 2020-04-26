export default class BorderRadius {
    constructor() {
        this.bordersInputs = document.querySelectorAll('div[class*=border-] input')
        this.bordersRadiusNames = [
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-left-radius',
            'border-bottom-right-radius'
        ]
    }

    run() {
        window.addEventListener('load', () => {
            this.bind_events()
            const border_radius_element = document.querySelector('#border-radius-properties')
            this.load_initial_radius_from_element(border_radius_element)
        })
    }

    load_initial_radius_from_element(element) {
        const computedStyle = getComputedStyle(element)
        for (let radiusName of this.bordersRadiusNames) {
            document.querySelector(`.${radiusName}`)
                .querySelector('input')
                .value = computedStyle.getPropertyValue(radiusName)
        }
    }

    bind_events() {
        for (let input of this.bordersInputs) {
            input.addEventListener('input', this.update_border_radius)
        }
    }

    filter_valid_values(value) {
        return value.replace(/[^0-9]/, '')
    }

    update_target_value(target) {
        target.value = this.filter_valid_values(target.value)
    }

    update_respective_border_radius(target) {
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

    update_border_radius(event) {
        const target = event.target
        this.update_target_value(target)
        this.update_respective_border_radius(target)
    }
}
