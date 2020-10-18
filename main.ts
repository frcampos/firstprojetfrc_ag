// Verifica se icones estão a funcionar, Se colocar a zero não testa.
function verificaSom (num: number) {
    for (let index = 0; index < num; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        music.setVolume(255)
        music.playMelody("C D E F G A B C5 ", 120)
        basic.pause(1000)
        music.playMelody("C5 B A G F E D C ", 120)
    }
    return 0
}
function verificaAlarmetemperatura (leituraTemperatura: number) {
    if (leituraTemperatura <= limSuperiorTemperatura && leituraTemperatura >= limInferiortemperatura) {
        basic.showIcon(IconNames.Happy)
    }
    if (leituraTemperatura > limSuperiorTemperatura) {
        basic.showIcon(IconNames.House)
        music.setVolume(255)
        music.playMelody("C D E F G A B C5 ", 120)
        basic.pause(1000)
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
// Trabalho By - Fernando Campos e Aurora Graça
// Definição e parametrização de variáveis tais como as responsáveis pela janela de funcionamento.
// a variável compensacaoTemperatura apenas pode ser utilizado um valor diferente de zero se experimentalmente tal tal venha a ser necessário.
// Nas variáveis via variáveis:  limInferiortemperatura e limSuperiorTemperatura 
// Caso a temperatura seja superior a limSuperiorTemperatura soa uma melodia especifica e com nível pre-programado tambem especifico e com símbolo específico.
// Caso a temperatura seja inferior a limInferiortemperatura soa uma melodia especifica e com nível pre-programado também especifico e com símbolo específico.
// Caso a temperatura se encontre entre 20 e 25, apenas surge um simbolo específico.
// Faz ainda um teste à matriz e ao som do dispositivo Microbit
// 
let temperaturaReal = 0
let limSuperiorTemperatura = 0
let limInferiortemperatura = 0
let temperaturaMinimaregistada = 0
let temperaturaMaximaregistada = 0
basic.clearScreen()
let compensacaoTemperatura = 0
temperaturaMaximaregistada = 21
temperaturaMinimaregistada = 21
limInferiortemperatura = 20
limSuperiorTemperatura = 25
basic.pause(listIcones(1))
basic.pause(verificaSom(1))
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.forever(function () {
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
