def verificaAlarmetemperatura(leituraTemperatura: number):
    if leituraTemperatura <= limSuperiorTemperatura and leituraTemperatura >= limInferiortemperatura:
        basic.show_icon(IconNames.HAPPY)
    if leituraTemperatura > limSuperiorTemperatura:
        basic.show_icon(IconNames.HOUSE)
        basic.pause(1000)
        music.set_volume(255)
        music.play_melody("C D E F G A B C5 ", 120)
    elif leituraTemperatura < limInferiortemperatura:
        basic.show_icon(IconNames.HEART)
        basic.pause(1000)
        music.set_volume(1)
        music.play_melody("C5 B A G F E D C ", 120)
# Para que se desligue o som e
# Para ser usado em outro transporte.

def on_button_pressed_ab():
    global temperaturaMinimaregistada, temperaturaMaximaregistada
    basic.clear_screen()
    temperaturaMinimaregistada = 21
    temperaturaMaximaregistada = 21
    music.stop_melody(MelodyStopOptions.ALL)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

# Verifica se icones estão a funcionar, Se colocar a zero não testa.
def listIcones(num: number):
    for index in range(num):
        basic.show_icon(IconNames.HAPPY)
        basic.pause(500)
        basic.show_icon(IconNames.HOUSE)
        basic.pause(500)
        basic.show_icon(IconNames.HEART)
        basic.pause(200)
    return 0
temperaturaReal = 0
limSuperiorTemperatura = 0
limInferiortemperatura = 0
temperaturaMinimaregistada = 0
temperaturaMaximaregistada = 0
basic.clear_screen()
temperaturaMaximaregistada = 21
temperaturaMinimaregistada = 21
limInferiortemperatura = 20
limSuperiorTemperatura = 25
numhorasRegisto = 24
intervaloRegisto = 30
basic.pause(listIcones(1))
basic.show_icon(IconNames.YES)
basic.clear_screen()

def on_forever():
    global temperaturaReal, temperaturaMaximaregistada, temperaturaMinimaregistada
    compensacaoTemperatura2 = 0
    temperaturaReal = input.temperature() - compensacaoTemperatura2
    basic.show_number(temperaturaReal)
    basic.pause(500)
    temperaturaMaximaregistada = max(temperaturaMaximaregistada, temperaturaReal)
    temperaturaMinimaregistada = min(temperaturaMinimaregistada, temperaturaReal)
    basic.show_number(temperaturaMaximaregistada)
    basic.pause(20)
    basic.show_number(temperaturaMinimaregistada)
    basic.pause(500)
    verificaAlarmetemperatura(temperaturaReal)
basic.forever(on_forever)
