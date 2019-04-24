// tslint:disable comment-format

import { Entity, PitchDuration, Segment } from '@musical-patterns/material'
import { as, ContourPiece, Scalar } from '@musical-patterns/utilities'
import { computeSegmentPieceLengths, PieceLength } from '../../../../../src/indexForTest'

describe('segment piece lengths', () => {
    describe('when entity count is 2', () => {
        it(
            `given that the entities in this segment are going to be playing notes of duration in proportion to each other \
by a subsequence of intervals from the core cycle, find that subsequence and then from it determine \
the ratios each of the durations will be in with each other duration, and from that determine \
the fewest number of notes each entity will have to play before they make a single polyrhythm and all line up again. \
this is an integration test of sorts - for more details look at: \
computeSegmentIntervals, computeSegmentRatios, computeSegmentPieceLengthsFromSegmentRatios, and alignSegmentPieceLengthsWithSegmentDurations`,
            () => {
                const segmentPieceLengths: PieceLength[] = computeSegmentPieceLengths({
                    coreIntervals: as.Cycle([
                        as.Fraction([ as.Numerator(4), as.Denominator(5) ]),
                        as.Fraction([ as.Numerator(4), as.Denominator(3) ]),
                    ]),
                    entityCount: as.Cardinal<Entity[]>(2),
                    segmentDurationIndices: [ 1, 0 ].map((value: number) => as.Ordinal<Scalar[]>(value)),
                    segmentIndex: as.Ordinal<Segment[]>(0),
                })

                // # Step 1: computeSegmentIntervals
                // [ as.Fraction([ as.Numerator(4), as.Denominator(5) ]) ]

                // # Step 2: computeSegmentRatios
                // [
                //      as.Fraction([ as.Numerator(1), as.Denominator(1) ]),
                //      as.Fraction([ as.Numerator(4), as.Denominator(5) ]),
                // ]

                // # Step 3: computeSegmentPieceLengthsFromSegmentRatios
                // [ 4, 5 ].map(as.Cardinal)

                // # Step 4: alignSegmentPieceLengthsWithSegmentDurations
                // [ 5, 4 ].map(as.Cardinal)

                expect(segmentPieceLengths)
                    .toEqual([ 5, 4 ].map((expected: number) => as.Cardinal<ContourPiece<PitchDuration>>(expected)))
            },
        )
    })

    describe('when entity count is 3', () => {
        it(
            `given that the entities in this segment are going to be playing notes of duration in proportion to each other \
by a subsequence of intervals from the core cycle, find that subsequence and then from it determine \
the ratios each of the durations will be in with each other duration, and from that determine \
the fewest number of notes each entity will have to play before they make a single polyrhythm and all line up again. \
this is an integration test of sorts - for more details look at: \
computeSegmentIntervals, computeSegmentRatios, computeSegmentPieceLengthsFromSegmentRatios, and alignSegmentPieceLengthsWithSegmentDurations`,
            () => {
                const segmentPieceLengths: PieceLength[] = computeSegmentPieceLengths({
                    coreIntervals: as.Cycle([
                        as.Fraction([ as.Numerator(4), as.Denominator(5) ]),
                        as.Fraction([ as.Numerator(4), as.Denominator(3) ]),
                        as.Fraction([ as.Numerator(4), as.Denominator(5) ]),
                    ]),
                    entityCount: as.Cardinal<Entity[]>(3),
                    segmentDurationIndices: [ 2, 1, 0 ].map((value: number) => as.Ordinal<Scalar[]>(value)),
                    segmentIndex: as.Ordinal<Segment[]>(0),
                })

                // # Step 1: computeSegmentIntervals
                // [
                //      as.Fraction([ as.Numerator(4), as.Denominator(5) ]),
                //      as.Fraction([ as.Numerator(4), as.Denominator(3) ]),
                // ]

                // # Step 2: computeSegmentRatios
                // [
                //      as.Fraction([ as.Numerator(1), as.Denominator(1) ]),
                //      as.Fraction([ as.Numerator(4), as.Denominator(5) ]),
                //      as.Fraction([ as.Numerator(16), as.Denominator(15) ]),
                // ]

                // # Step 3: computeSegmentPieceLengthsFromSegmentRatios
                // [ 16, 20, 15 ].map(as.Cardinal)

                // # Step 4: alignSegmentPieceLengthsWithSegmentDurations
                // [ 15, 20, 16 ].map(as.Cardinal)

                expect(segmentPieceLengths)
                    .toEqual([ 15, 20, 16 ].map((expected: number) => as.Cardinal<ContourPiece<PitchDuration>>(expected)))
            },
        )
    })
})