// Trabalho realizado por Fernando Campos e Aurora Graça
// Verifica a temperatura entre 20 e 25 ºC no MicroBit
// Regista Numa Lista através de Buffer as leituras periódica de temperatura para posterior DownLoad.Pode ser usado para verificação das variações motivada pelo transporte.
// É ntroduzido um valor de compensação dado que a temperatura é do CPU e não do ambiente.
// O valor por defeito é 2ºC mas poderá ser maior ou menor
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 60 * numhorasRegisto; index++) {
        basic.pause(60000 * intervaloRegisto)
    }
})
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
let intervaloRegisto = 0
let numhorasRegisto = 0
let limSuperiorTemperatura = 0
let limInferiortemperatura = 0
let temperaturaMinimaregistada = 0
let temperaturaMaximaregistada = 0
basic.clearScreen()
temperaturaMaximaregistada = 21
temperaturaMinimaregistada = 21
limInferiortemperatura = 20
limSuperiorTemperatura = 25
numhorasRegisto = 24
intervaloRegisto = 30
basic.pause(listIcones(1))
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    let compensacaoTemperatura = 0
    temperaturaReal = input.temperature() - compensacaoTemperatura
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
