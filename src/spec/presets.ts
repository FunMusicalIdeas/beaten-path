// tslint:disable max-file-line-count

import { Preset, StandardSpec } from '@musical-patterns/spec'
import { ObjectOf } from '@musical-patterns/utilities'
import {
    PRESET_BALANCED_CORE,
    PRESET_BALANCED_ENTITY_COUNT,
    PRESET_BALANCED_MS_PHYSICALIZATION,
    PRESET_DENSE_CORE,
    PRESET_DENSE_ENTITY_COUNT,
    PRESET_DENSE_HZ_PHYSICALIZATION,
    PRESET_DENSE_MS_PHYSICALIZATION,
    PRESET_DENSE_REPETITIONS,
    PRESET_ISOLATE_CORE,
    PRESET_ISOLATE_ENTITY_COUNT,
    PRESET_ISOLATE_MS_PHYSICALIZATION,
    PRESET_PRIMAL_CORE,
    PRESET_PRIMAL_ENTITY_COUNT,
    PRESET_PRIMAL_HZ_PHYSICALIZATION,
    PRESET_PRIMAL_MS_PHYSICALIZATION,
    PRESET_ROUND_CORE,
    PRESET_ROUND_ENTITY_COUNT,
    PRESET_ROUND_HZ_PHYSICALIZATION,
    PRESET_ROUND_MS_PHYSICALIZATION,
} from './constants'
import { initialSpecs } from './initials'
import { BeatenPathSpecs, BeatenPathStyle } from './types'

const presets: ObjectOf<Preset<BeatenPathSpecs>> = {
    balanced: {
        description: 'not too many entities, not too complex a core, this porridge is just right',
        order: 2,
        specs: {
            ...initialSpecs,
            [ StandardSpec.MS_PHYSICALIZATION ]: PRESET_BALANCED_MS_PHYSICALIZATION,
            core: PRESET_BALANCED_CORE,
            entityCount: PRESET_BALANCED_ENTITY_COUNT,
            reverse: true,
        },
    },
    dense: {
        description: 'leaning toward more entities but simpler core, for an etherial effect',
        order: 1,
        specs: {
            ...initialSpecs,
            [ StandardSpec.MS_PHYSICALIZATION ]: PRESET_DENSE_MS_PHYSICALIZATION,
            [ StandardSpec.HZ_PHYSICALIZATION ]: PRESET_DENSE_HZ_PHYSICALIZATION,
            core: PRESET_DENSE_CORE,
            entityCount: PRESET_DENSE_ENTITY_COUNT,
            repetitions: PRESET_DENSE_REPETITIONS,
        },
    },
    entropic: {
        description: 'simple illustration of entities movement, with a sufficiently interestingly complex core',
        order: 0,
        specs: initialSpecs,
    },
    isolate: {
        description: 'isolating the core cycle',
        order: 5,
        specs: {
            ...initialSpecs,
            [ StandardSpec.MS_PHYSICALIZATION ]: PRESET_ISOLATE_MS_PHYSICALIZATION,
            core: PRESET_ISOLATE_CORE,
            entityCount: PRESET_ISOLATE_ENTITY_COUNT,
        },
    },
    primal: {
        description: 'demonstration of the power of the 11th and 13th harmonics',
        order: 3,
        specs: {
            ...initialSpecs,
            [ StandardSpec.MS_PHYSICALIZATION ]: PRESET_PRIMAL_MS_PHYSICALIZATION,
            [ StandardSpec.HZ_PHYSICALIZATION ]: PRESET_PRIMAL_HZ_PHYSICALIZATION,
            core: PRESET_PRIMAL_CORE,
            entityCount: PRESET_PRIMAL_ENTITY_COUNT,
            style: BeatenPathStyle.SMOOTH,
        },
    },
    round: {
        description: 'testing the limits of the entity density',
        order: 4,
        specs: {
            ...initialSpecs,
            [ StandardSpec.MS_PHYSICALIZATION ]: PRESET_ROUND_MS_PHYSICALIZATION,
            [ StandardSpec.HZ_PHYSICALIZATION ]: PRESET_ROUND_HZ_PHYSICALIZATION,
            core: PRESET_ROUND_CORE,
            entityCount: PRESET_ROUND_ENTITY_COUNT,
            reverse: true,
            style: BeatenPathStyle.SMOOTH,
        },
    },
}

export {
    presets,
}
