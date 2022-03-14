let direction = 0
basic.forever(function () {
    direction = input.compassHeading()
    if (direction <= 22.5 || direction > 337.5) {
        basic.showString("N")
        music.playTone(165, music.beat(BeatFraction.Whole))
    } else if (direction > 22.5 && direction <= 67.5) {
        basic.showString("NW")
        music.playTone(220, music.beat(BeatFraction.Whole))
    } else if (direction > 67.5 && direction <= 112.5) {
        basic.showString("W")
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (direction > 112.5 && direction <= 157.5) {
        basic.showString("SW")
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (direction > 157.5 && direction <= 202.5) {
        basic.showString("S")
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else if (direction > 202.5 && direction <= 247.5) {
        basic.showString("SE")
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (direction > 247.5 && direction <= 292.5) {
        basic.showString("E")
        music.playTone(587, music.beat(BeatFraction.Whole))
    } else if (direction > 292.5 && direction <= 337.5) {
        basic.showString("NE")
        music.playTone(784, music.beat(BeatFraction.Whole))
    }
})
