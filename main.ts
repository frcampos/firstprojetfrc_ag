function verificaAlarmetemperatura (leituraTemperatura: number) {
    if (leituraTemperatura <= limSuperiorTemperatura && leituraTemperatura >= limInferiortemperatura) {
        basic.showIcon(IconNames.Happy)
    }
    if (leituraTemperatura > limSuperiorTemperatura) {
        basic.showIcon(IconNames.House)
        basic.pause(1000)
        music.setVolume(255)
        music.playMelody("C D E F G A B C5 ", 120)
    } else if (leituraTemperatura < limInferiortemperatura) {
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        music.setVolume(1)
        music.playMelody("C5 B A G F E D C ", 120)
    }
}
// Para que se desligue o som e
// Para ser usado em outro transporte.
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    temperaturaMinimaregistada = 21
    temperaturaMaximaregistada = 21
    music.stopMelody(MelodyStopOptions.All)
})
// Verifica se icones estão a funcionar, Se colocar a zero não testa.
function listIcones (num: number) {
    for (let index = 0; index < num; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.showIcon(IconNames.House)
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
    }
    return 0
}
let temperaturaReal = 0
let limSuperiorTemperatura = 0
let limInferiortemperatura = 0
let temperaturaMinimaregistada = 0
let temperaturaMaximaregistada = 0
basic.clearScreen()
temperaturaMaximaregistada = 21
temperaturaMinimaregistada = 21
limInferiortemperatura = 20
limSuperiorTemperatura = 25
let numhorasRegisto = 24
let intervaloRegisto = 30
basic.pause(listIcones(1))
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.forever(function () {
    let compensacaoTemperatura2 = 0
    temperaturaReal = input.temperature() - compensacaoTemperatura2
    basic.showNumber(temperaturaReal)
    basic.pause(500)
    temperaturaMaximaregistada = Math.max(temperaturaMaximaregistada, temperaturaReal)
    temperaturaMinimaregistada = Math.min(temperaturaMinimaregistada, temperaturaReal)
    basic.showNumber(temperaturaMaximaregistada)
    basic.pause(20)
    basic.showNumber(temperaturaMinimaregistada)
    basic.pause(500)
    verificaAlarmetemperatura(temperaturaReal)
})
