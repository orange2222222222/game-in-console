import Tile from "./tile.ts"
import color from "./color.ts"
import direction from "./direction.ts"

class Game {
    pos: {
        x: number
        y: number
    } = { x: 0, y: 0 }
    arr: Tile[][]
    dim: number
    player: {
        symbol: string
        color: color
    }
    constructor(arr: Tile[][], dim: number = 3, player: { symbol: string; color: color } = { symbol: '●', color: 'red' },
        startingPos: number[] = [0, 0]) {
        this.arr = arr
        this.dim = dim
        this.player = player
        this.pos = { x: startingPos[0], y: startingPos[1] }
    }
    private color(color: string[][]) {
        let res  = ''
        const css: string[] = []
        color.forEach(e => {
            res += `%c${e[0]}`
            css.push(`color: ${e[1]}`)
        })
        return [res, ...css]
    }
    structure() {
        const res: string[][] = []
        this.arr.forEach((e1, i1) => {
            e1.forEach((e2, i2) => {
                if (this.pos.x == i2 && this.pos.y == i1) return res.push([this.player.symbol, this.player.color])
                res.push([e2.symbol, e2.color])
            })
            res.push(['\n', 'white'])
        })
        console.log(...this.color(res))
    }
    get block(): Tile {
        return this.arr[this.pos.y][this.pos.x]
    }

    private checkMovability(nextTile: Tile | undefined): boolean {
        if (nextTile === undefined) return false
        if (nextTile.haveCollision) return false
        return true
    }

    teleport(x: number, y: number): void {
        this.pos.x = x
        this.pos.y = y
    }

    move(next: direction): void {
        const { x, y } = this.pos

        switch (next) {
            case 'left':
                if (this.checkMovability(this.arr[y]?.[x - 1])) this.pos.x--
                break
            case 'right':
                if (this.checkMovability(this.arr[y]?.[x + 1])) this.pos.x++
                break
            case 'top':
                if (this.checkMovability(this.arr[y - 1]?.[x])) this.pos.y--
                break
            case 'bottom':
                if (this.checkMovability(this.arr[y + 1]?.[x])) this.pos.y++
                break
            default:
                console.log('invalid')
        }
    }
    data() {
        const { symbol, name, color } = this.block
        console.log(`now your coords are ${this.pos.x}, ${this.pos.y}. You are standing on ${symbol} (${name}) color: ${color}`)
    }
}

export default Game