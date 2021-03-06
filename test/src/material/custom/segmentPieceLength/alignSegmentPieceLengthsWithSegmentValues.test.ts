import { PitchValue } from '@musical-patterns/material'
import { as, Cardinal, ContourPiece, Ordinal, Scalar } from '@musical-patterns/utilities'
import { alignSegmentPieceLengthsWithSegmentValues, PieceLength } from '../../../../../src/indexForTest'

describe('align segment piece lengths with segment values', (): void => {
    it(
        `makes sure, within a segment, that each entity gets assigned the piece length which matches the value it got assigned \
(so that all together they make a polyrhythm within each segment) - \
the idea is that the entity with the highest value index is the furthest through the core values at this segment, \
so it needs to use the value for the segment which is furthest through the core value`,
        (): void => {
            const segmentPieceLengths: PieceLength[] = [ 15, 12, 16 ] // In order
                .map((actual: number): Cardinal<ContourPiece<PitchValue>> => as.Cardinal<ContourPiece<PitchValue>>(actual))
            const segmentValueIndices: Array<Ordinal<Scalar[]>> = [ 2, 4, 3 ].map(// Ground to 0, 2, 1
                (numeral: number): Ordinal<Scalar[]> => as.Ordinal<Scalar[]>(numeral),
            )

            const actualSegmentPieceLengthsAlignedWithSegmentValues: PieceLength[] =
                alignSegmentPieceLengthsWithSegmentValues({
                    segmentPieceLengths,
                    segmentValueIndices,
                })

            expect(actualSegmentPieceLengthsAlignedWithSegmentValues)
                .toEqual(
                    [ 15, 16, 12 ] // 0 takes index 0, 2 takes index 2, 1 takes index 1
                        .map(
                            (expected: number): Cardinal<ContourPiece<PitchValue>> => as.Cardinal<ContourPiece<PitchValue>>(expected),
                        ),
                )
        },
    )
})
