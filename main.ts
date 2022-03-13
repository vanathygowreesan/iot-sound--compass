let direction = 0
basic.forever(function () {
    direction = input.compassHeading()
    if (direction == 0) {
        basic.showString("N")
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (direction == 45) {
        basic.showString("NW")
        music.playMelody("C D E F G A B C5 ", 120)
    } else if (direction == 90) {
        basic.showString("W")
        music.playMelody("E B C5 A B G A F ", 120)
    } else if (direction == 135) {
        basic.showString("SW")
        music.playMelody("A F E F D G E F ", 120)
    } else if (direction == 180) {
        basic.showString("S")
        music.playMelody("C5 A B G A F G E ", 175)
    } else if (direction == 225) {
        basic.showString("SE")
        music.playMelody("G B A G C5 B A B ", 175)
    } else if (direction == 270) {
        basic.showString("E")
        music.playMelody("E E G A E F E C5 ", 175)
    } else {
        basic.showString("NE")
        music.playMelody("G F G A - F E D ", 175)
    }
})
