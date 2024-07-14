let Temperature = 0
let Light_level = 0
basic.forever(function () {
    Temperature = input.temperature()
    Light_level = input.lightLevel()
    basic.showNumber(Temperature)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showNumber(Light_level)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
})
