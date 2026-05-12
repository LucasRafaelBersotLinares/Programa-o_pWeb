export class Detalhes {
    altitude_max: number
    sensores: String[]

    constructor(altitude_max: number, sensores: String[]){
        this.altitude_max = altitude_max
        this.sensores = sensores
    }
}