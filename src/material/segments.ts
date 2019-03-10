import { Note } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import {
    apply,
    Cardinal,
    indexOfLastElement,
    INITIAL,
    map,
    Ordinal,
    Scalar,
    slice,
    to,
    zeroAndPositiveIntegers,
} from '@musical-patterns/utilities'
import { BeatenPathStyle } from '../spec'
import { calculateNoteCountsForSegment, selectScalarsForSegment } from './custom'
import { buildNote } from './features'
import { buildPolyrhythmicPiece, buildSmoothPiece } from './pieces'
import { BuildPiece, BuildSegmentsParameters } from './types'

const buildSegment: (segmentIndex: Ordinal, buildSegmentsParameters: BuildSegmentsParameters) => Segment =
    (segmentIndex: Ordinal, { scalars, fractions, repetitions, style }: BuildSegmentsParameters): Segment => {
        const scalarsForSegment: Scalar[] = selectScalarsForSegment({ scalars, segmentIndex })
        const noteCounts: Cardinal[] = calculateNoteCountsForSegment({ fractions, segmentIndex })

        const buildPiece: BuildPiece =
            style === BeatenPathStyle.POLYRHYTHMIC ? buildPolyrhythmicPiece : buildSmoothPiece

        return map(scalarsForSegment, (scalar: Scalar, index: Ordinal): Note[] =>
            buildPiece({
                notesCount: apply.Ordinal(noteCounts, index),
                repetitions,
                scalar,
            })
                .map(buildNote))
    }

const buildSegments: (buildSegmentsParameters: BuildSegmentsParameters) => Segment[] =
    (buildSegmentsParameters: BuildSegmentsParameters): Segment[] =>
        slice(zeroAndPositiveIntegers, INITIAL, indexOfLastElement(buildSegmentsParameters.scalars))
            .map(to.Ordinal)
            .map((segmentIndex: Ordinal): Segment =>
                buildSegment(segmentIndex, buildSegmentsParameters))

export {
    buildSegments,
}
