function drawSquare () {
    for (let index = 0; index < 4; index++) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
        basic.pause(1000)
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 15)
        basic.pause(1300)
        Kitronik_Move_Motor.stop()
    }
}
function drawPentagon () {
    for (let index = 0; index < 5; index++) {
        Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Tight)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
        basic.pause(1000)
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 15)
        basic.pause(1000)
        Kitronik_Move_Motor.stop()
    }
}
drawSquare()
