input.onButtonPressed(Button.A, function () {
    int1 = randint(0, 10)
    int2 = randint(0, 10)
    basic.showNumber(int1)
    basic.pause(1000)
    basic.showString("x")
    basic.pause(1000)
    basic.showNumber(int2)
    basic.pause(1000)
    basic.showString("= ?")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(int1 * int2)
})
input.onGesture(Gesture.Shake, function () {
    _symbol = randint(1, 3)
    if (_symbol == 1) {
        basic.showNumber(int1)
        basic.pause(1000)
        basic.showString("+")
        basic.pause(1000)
        basic.showNumber(int2)
        basic.pause(1000)
        basic.showString("= ?")
        basic.showNumber(int1 + int2)
    } else if (_symbol == 2) {
        basic.showNumber(int1)
        basic.pause(1000)
        basic.showString("-")
        basic.pause(1000)
        basic.showNumber(int2)
        basic.pause(1000)
        basic.showString("= ?")
        basic.showNumber(int1 - int2)
    } else {
        basic.showNumber(int1)
        basic.pause(1000)
        basic.showString("/")
        basic.pause(1000)
        basic.showNumber(int2)
        basic.pause(1000)
        basic.showString("= ?")
        basic.showNumber(int1 / int2)
    }
})
let _symbol = 0
let int2 = 0
let int1 = 0
basic.showString("Q<- A->")
