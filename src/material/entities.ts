import { Entity, MaterializeEntities, TimbreNameEnum } from '@musical-patterns/compiler'
import { BeatenPathSpec } from '../spec'
import { buildNotes } from './notes'
import { BeatenPathEntity, BeatenPathEntityNotes } from './types'

const materializeEntities: MaterializeEntities =
    (spec: BeatenPathSpec): Entity[] => {
        const notes: BeatenPathEntityNotes = buildNotes(spec)

        const firstEntity: Entity = {
            notes: notes[ BeatenPathEntity.FIRST ],
            timbreName: TimbreNameEnum.PUTNEY_WAVERING,
        }

        const secondEntity: Entity = {
            notes: notes[ BeatenPathEntity.SECOND ],
            timbreName: TimbreNameEnum.ORGAN_2,
        }

        return [
            firstEntity,
            secondEntity,
        ]
    }

export {
    materializeEntities,
}
