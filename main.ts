radio.setGroup(1)
let velocita = 0
basic.forever(function () {
    if (velocita >= 600 && velocita < 800) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (velocita >= 1 && velocita < 400) {
        basic.showLeds(`
            . . . # .
            . . # # .
            . # . # .
            . . . # .
            . . . # .
            `)
    } else if (velocita >= 400 && velocita < 600) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (velocita >= 1023) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (velocita >= 800 && velocita < 1000) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        velocita += 200
    } else {
        if (input.buttonIsPressed(Button.A)) {
            velocita += 0
        } else {
            velocita += -250
        }
    }
    basic.pause(100)
    velocita = Math.max(0, velocita)
    velocita = Math.min(1023, velocita)
    radio.sendNumber(velocita)
})
