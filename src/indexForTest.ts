// tslint:disable no-reaching-imports

export {
    buildDurationsAndRatios,
} from './custom/indexForTest'
export {
    buildSegments,
    buildEntities,
    buildParts,
    buildScales,
} from './material/indexForTest'
export { pattern } from './patterns'
export { specData } from './specs'

export {
    to,
    from,
    Core,
} from './nominal/indexForTest'
export {
    Durations,
    DurationsAndRatios,
    BeatenPathSpec,
} from './types'

// tslint:disable-next-line no-default-import
import * as snapshot from './snapshot.json'

export { snapshot }
