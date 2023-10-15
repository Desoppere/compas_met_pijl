let tel = 0
basic.showLeds(`
    . # # # .
    # . # . #
    # . # . #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    tel = input.compassHeading()
    basic.pause(500)
    basic.clearScreen()
    if (tel > 45 && tel < 134) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
    } else if (tel > 135 && tel < 225) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # . # .
            . . # . .
            `)
    } else if (tel > 226 && tel < 317) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    basic.pause(100)
})
