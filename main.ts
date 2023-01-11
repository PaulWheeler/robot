function drawSquare () {
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.beepHorn()
    for (let index = 0; index < 4; index++) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
        basic.pause(2000)
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 15)
        basic.pause(1475)
        Kitronik_Move_Motor.stop()
    }
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.beepHorn()
}
function drawPentagon () {
    Kitronik_Move_Motor.beepHorn()
    for (let index = 0; index < 5; index++) {
        Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Tight)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
        basic.pause(2000)
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 15)
        basic.pause(1180)
        Kitronik_Move_Motor.stop()
    }
    Kitronik_Move_Motor.beepHorn()
}
input.onButtonPressed(Button.A, function () {
    drawSquare()
})
input.onButtonPressed(Button.AB, function () {
    drawStar()
})
input.onButtonPressed(Button.B, function () {
    drawPentagon()
})
function drawStar () {
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.beepHorn()
    for (let index = 0; index < 5; index++) {
        Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Tight)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
        basic.pause(3000)
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 15)
        basic.pause(2360)
        Kitronik_Move_Motor.stop()
    }
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.beepHorn()
}
