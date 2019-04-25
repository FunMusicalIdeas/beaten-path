import { StandardSpec } from '@musical-patterns/spec'
import { Duration, Scalar, Translation, use } from '@musical-patterns/utilities'
import { PseudocompileDelayParameters } from './types'

const pseudocompileDelay: (parameters: {
    [ StandardSpec.BASIS_DURATION ]: Duration,
    [ StandardSpec.BASIS_DURATION_TRANSLATION ]: Translation<Duration>,
    delayScalar: Scalar<Duration>,
}) => Duration =
    ({ delayScalar, baseDuration, baseDurationTranslation }: PseudocompileDelayParameters): Duration =>
        use.Translation(
            use.Scalar(
                baseDuration,
                delayScalar,
            ),
            baseDurationTranslation,
        )

export {
    pseudocompileDelay,
}
