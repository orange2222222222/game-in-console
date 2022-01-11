import { Game, Tile, blocks, players } from '../src/core.ts'
const [{ opaqueBlock }, { pizza }] = [blocks, players]

const s = new Tile('thing', opaqueBlock, 'white')

const world = new Game(
    [
        [s, s, s, s, s],
        [s, s, s, s, s],
        [s, s, s, s, s],
        [s, s, s, s, s],
        [s, s, s, s, s],
    ],
    5, { symbol: pizza, color: 'white'}
)

import { readLines } from 'https://deno.land/std@0.82.0/io/bufio.ts'

console.log(world.arr)

const draw = async () => {
    world.structure()
    for await(const line of readLines(Deno.stdin)) {
        if(line == 'w') world.move('top')
        else if(line == 'a') world.move('left')
        else if(line == 's') world.move('bottom')
        else if(line == 'd') world.move('right')
        world.structure()
    }
}

draw()