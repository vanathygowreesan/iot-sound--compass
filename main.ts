let direction = 0
basic.forever(function () {
    direction = input.compassHeading()
    if (direction <= 22.5 || direction > 337.5) {
        basic.showString("N")
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (direction > 22.5 && direction <= 67.5) {
        basic.showString("NW")
        music.playMelody("C D E F G A B C5 ", 120)
    } else if (direction > 67.5 && direction <= 112.5) {
        basic.showString("W")
        music.playMelody("E B C5 A B G A F ", 120)
    } else if (direction > 112.5 && direction <= 157.5) {
        basic.showString("SW")
        music.playMelody("A F E F D G E F ", 120)
    } else if (direction > 157.5 && direction <= 202.5) {
        basic.showString("S")
        music.playMelody("C5 A B G A F G E ", 175)
    } else if (direction > 202.5 && direction <= 247.5) {
        basic.showString("SE")
        music.playMelody("G B A G C5 B A B ", 175)
    } else if (direction > 247.5 && direction <= 292.5) {
        basic.showString("E")
        music.playMelody("E E G A E F E C5 ", 175)
    } else if (direction > 292.5 && direction <= 337.5) {
        basic.showString("NE")
        music.playMelody("G F G A - F E D ", 175)
    }
})
