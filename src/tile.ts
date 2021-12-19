import color from './color.ts'

class Tile {
    name: string
    haveCollision: boolean
    symbol: string
    color: color
    constructor(name: string, symbol: string = '?', color: color = 'orange', haveCollision: boolean = false) {
        this.name = name
        this.haveCollision = haveCollision
        this.symbol = symbol
        this.color = color
    }
}

export default Tile