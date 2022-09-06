let Tom = 0
let tie_count = 0
let Jerry = 0
input.onButtonPressed(Button.A, function () {
    Tom += 1
    basic.showString("TOM")
    basic.showNumber(Tom)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    tie_count += 1
    basic.showString("TIE")
    basic.showNumber(tie_count)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Jerry += 1
    basic.showString("J")
    basic.showNumber(Jerry)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("TOM")
    basic.showNumber(Tom)
    basic.pause(500)
    basic.showString("J")
    basic.showNumber(Jerry)
    basic.pause(500)
    basic.showString("TIE")
    basic.showNumber(tie_count)
    basic.pause(500)
})
