input.onGesture(Gesture.LogoDown, function () {
    radio.sendValue("name", 2)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendValue("name", 1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("name", 5)
    basic.showNumber(7700)
})
radio.setGroup(114514)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        radio.sendValue("name", 3)
        while (input.buttonIsPressed(Button.A) == false) {
            radio.sendValue("name", 5)
            while (input.buttonIsPressed(Button.B)) {
                radio.sendValue("name", 4)
                while (input.buttonIsPressed(Button.B) == false) {
                    radio.sendValue("name", 5)
                    break;
                }
            }
        }
    }
})
