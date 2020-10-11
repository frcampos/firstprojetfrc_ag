basic.show_icon(IconNames.YES)

def on_forever():
    pass
basic.forever(on_forever)
def on_gesture_shake():
    pass
input.on_gesture(Gesture.Shake, on_gesture_shake)