import { Game, Tile, } from '../src/core.ts'

const s = new Tile('thing', '■', 'black')

const world = new Game(
    [
        [s, s, s, s, s],
        [s, s, s, s, s],
        [s, s, s, s, s],
        [s, s, s, s, s],
        [s, s, s, s, s],
    ],
    5
)

const { move } = world

import { readLines } from 'https://deno.land/std@0.82.0/io/bufio.ts'

console.log(world.arr)

const draw = async () => {
    world.structure()
    for await(const line of readLines(Deno.stdin)) {
        if(line == 'w') move('top')
        else if(line == 'a') move('left')
        else if(line == 's') move('bottom')
        else if(line == 'd') move('right')
        world.structure()
    }
}

draw()