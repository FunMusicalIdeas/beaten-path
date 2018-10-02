import { beatenPathNoteBlocks } from '../src/notes'
import * as to from '../../../src/utilities/to'
import * as from from '../../../src/utilities/from'
import { Time } from '../../../src/utilities/nominalTypes'
import calculateNotesDuration from '../../../src/utilities/calculateNotesDuration'
import { beatenPathDurations } from '../src/durations'
import isCloseTo from '../../../spec/support/isCloseTo'

const blockEntityDuration = (block: number, entity: number): number => from.Time(beatenPathNoteBlocks[block][entity][0].duration)

describe('beaten path notes', () => {
    it('each block has two sets of notes, one for each entity', () => {
        beatenPathNoteBlocks.forEach(block => {
            expect(block.length).toBe(2)
        })
    })

    it('each set of notes in each block has notes which all have the same duration', () => {
        beatenPathNoteBlocks.forEach(block => {
            block.forEach(notes => {
                let noteDuration: Time = to.Time(0)
                notes.forEach(note => {
                    if (from.Time(noteDuration) === 0) {
                        noteDuration = note.duration
                    } else {
                        expect(note.duration).toBe(noteDuration)
                    }
                })
            })
        })
    })

    it('each block\'s two sets of notes have the same total duration', () => {
        beatenPathNoteBlocks.forEach(block => {
            let blockDuration: Time = to.Time(0)
            block.forEach(notes => {
                if (from.Time(blockDuration) === 0) {
                    blockDuration = calculateNotesDuration(notes)
                } else {
                    expect(isCloseTo(from.Time(calculateNotesDuration(notes)), from.Time(blockDuration))).toBeTruthy()
                }
            })
        })
    })

    it('blocks\'s note durations follow an alternating pattern of incrementing along the beaten path durations', () => {
        expect(isCloseTo(blockEntityDuration(0, 0), beatenPathDurations[0] * 100)).toBeTruthy()
        expect(isCloseTo(blockEntityDuration(0, 1), beatenPathDurations[1] * 100)).toBeTruthy()

        expect(isCloseTo(blockEntityDuration(1, 0), beatenPathDurations[2] * 100)).toBeTruthy()
        expect(isCloseTo(blockEntityDuration(1, 1), beatenPathDurations[1] * 100)).toBeTruthy()

        expect(isCloseTo(blockEntityDuration(2, 0), beatenPathDurations[2] * 100)).toBeTruthy()
        expect(isCloseTo(blockEntityDuration(2, 1), beatenPathDurations[3] * 100)).toBeTruthy()

        expect(isCloseTo(blockEntityDuration(3, 0), beatenPathDurations[4] * 100)).toBeTruthy()
        expect(isCloseTo(blockEntityDuration(3, 1), beatenPathDurations[3] * 100)).toBeTruthy()

        expect(isCloseTo(blockEntityDuration(4, 0), beatenPathDurations[4] * 100)).toBeTruthy()
        expect(isCloseTo(blockEntityDuration(4, 1), beatenPathDurations[5] * 100)).toBeTruthy()
    })
})
