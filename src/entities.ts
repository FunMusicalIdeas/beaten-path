// tslint:disable-next-line:no-any no-magic-numbers
import { EntityConfig, TimeType } from '../../../src/compile/types'
import { Notes, OscillatorName, VoiceType } from '../../../src/types'
import { Scalar } from '../../../src/utilities/nominalTypes'
import sequence from '../../../src/utilities/sequence'
import { beatenPathNoteBlocks } from './notes'

const entityOneNotes: Notes = sequence(beatenPathNoteBlocks.map((block: Notes[]): Notes => block[0]))
const entityTwoNotes: Notes = sequence(beatenPathNoteBlocks.map((block: Notes[]): Notes => block[1]))

// tslint:disable-next-line:no-any no-magic-numbers
const TO_AVOID_BLOW_OUT: Scalar = 0.2 as any

const beatenEntityOne: EntityConfig = {
    notes: entityOneNotes,
    timeType: TimeType.RAW,
    voiceConfig: {timbre: OscillatorName.SAWTOOTH, voiceType: VoiceType.OSCILLATOR},
    voiceGain: TO_AVOID_BLOW_OUT,
}

const beatenEntityTwo: EntityConfig = {
    notes: entityTwoNotes,
    timeType: TimeType.RAW,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
    voiceGain: TO_AVOID_BLOW_OUT,
}

export {
    beatenEntityOne,
    beatenEntityTwo,
}