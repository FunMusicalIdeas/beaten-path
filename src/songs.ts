import { Song, SongName } from '../../../src/songTypes'
import { BEATEN_PATH_BASE_PITCH } from './basePitch'
import { beatenPathCompile } from './compile'
import { nonScale } from './pitches'

const beatenPath: Song = {
    baseFrequency: BEATEN_PATH_BASE_PITCH,
    compile: beatenPathCompile,
    config: {
        core: 5,
    },
    entityConfigs: [],
    formattedName: 'Beaten Path',
    name: SongName.BEATEN_PATH,
    scales: [
        nonScale,
    ],
}

export {
    beatenPath,
}
