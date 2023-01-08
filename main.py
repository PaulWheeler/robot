def drawSquare():
    for index in range(4):
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, 20)
        basic.pause(1000)
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.RIGHT, 15)
        basic.pause(1300)
        Kitronik_Move_Motor.stop()
def drawPentagon():
    for index2 in range(5):
        Kitronik_Move_Motor.turn_radius(Kitronik_Move_Motor.TurnRadii.TIGHT)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, 20)
        basic.pause(1000)
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.RIGHT, 15)
        basic.pause(1000)
        Kitronik_Move_Motor.stop()
drawSquare()