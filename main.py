# Trabalho realizado por Fernando Campos e Aurora Graça
# Verifica a temperatura entre 20 e 25 ºC no MicroBit
# Regista Numa Lista através de Buffer as leituras periódica de temperatura para posterior DownLoad.Pode ser usado para verificação das variações motivada pelo transporte.
# É ntroduzido um valor de compensação dado que a temperatura é do CPU e não do ambiente.
# O valor por defeito é 2ºC mas poderá ser maior ou menor
def on_button_pressed_a():
    for index in range(60 * numhorasRegisto):
        basic.pause(60000 * intervaloRegisto)
input.on_button_pressed(Button.A, on_button_pressed_a)

def verificaAlarmetemperatura(leituraTemperatura: number):
    if leituraTemperatura > limSuperiorTemperatura:
        basic.show_icon(IconNames.HOUSE)
        basic.pause(1000)
        music.set_volume(202)
        music.play_melody("C D E F G A B C5 ", 120)
    else:
        if leituraTemperatura < limInferiortemperatura:
            basic.show_icon(IconNames.HEART)
            basic.pause(1000)
            music.set_volume(97)
            music.play_melody("C5 B A G F E D C ", 120)

def on_button_pressed_b():
    music.stop_melody(MelodyStopOptions.ALL)
input.on_button_pressed(Button.B, on_button_pressed_b)

# Verifica se icones estão a funcionar, Se colocar a zero não testa.
def listIcones(num: number):
    for index2 in range(num):
        basic.show_icon(IconNames.HAPPY)
        basic.pause(1500)
        basic.show_icon(IconNames.HOUSE)
        basic.pause(1500)
        basic.show_icon(IconNames.HEART)
        basic.pause(200)
    return 0
temperaturaReal = 0
intervaloRegisto = 0
numhorasRegisto = 0
limSuperiorTemperatura = 0
limInferiortemperatura = 0

basic.clear_screen()
temperaturaMaximaregistada = 21
temperaturaMinimaregistada = 21
limInferiortemperatura = 20
limSuperiorTemperatura = 25
numhorasRegisto = 24
intervaloRegisto = 30
compensacaoTemperatura = 0
basic.pause(listIcones(0))
basic.show_icon(IconNames.YES)

def on_forever():
    global temperaturaReal, temperaturaMaximaregistada, temperaturaMinimaregistada
    temperaturaReal = input.temperature() - compensacaoTemperatura
    basic.show_number(temperaturaReal)
    basic.pause(1000)
    temperaturaMaximaregistada = max(temperaturaMaximaregistada, temperaturaReal)
    temperaturaMinimaregistada = min(temperaturaMinimaregistada, temperaturaReal)
    basic.show_number(temperaturaMaximaregistada)
    basic.pause(100)
    basic.show_number(temperaturaMinimaregistada)
    basic.pause(100)
    verificaAlarmetemperatura(temperaturaReal)
basic.forever(on_forever)
