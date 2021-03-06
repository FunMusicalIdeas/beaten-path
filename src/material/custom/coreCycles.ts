import {
    absoluteRatio,
    as,
    Cycle,
    DECREMENT,
    Denominator,
    finalElement,
    INCREMENT,
    isCloseTo,
    Rational,
    reciprocal,
    Scalar,
    use,
} from '@musical-patterns/utilities'
import { Core } from '../../nominals'
import { CoreCycles } from '../types'
import { INITIAL_CORE_DURATION } from './constants'

const isUpwardsDurationCloserToOriginalDurationOfOne:
    (maybeNextUpwardsDuration: Scalar, maybeNextDownwardsDuration: Scalar) => boolean =
    (maybeNextUpwardsDuration: Scalar, maybeNextDownwardsDuration: Scalar): boolean =>
        absoluteRatio(as.number(maybeNextUpwardsDuration)) > absoluteRatio(as.number(maybeNextDownwardsDuration))

const computeCoreCycles: (core: Core) => CoreCycles =
    (core: Core): CoreCycles => {
        const coreDurations: Cycle<Scalar> = as.Cycle([ INITIAL_CORE_DURATION ])
        const coreIntervals: Cycle<Rational> = as.Cycle([])

        const rawCore: number = as.number(core)

        const superparticular: Scalar = as.Scalar(reciprocal(use.Cardinal(rawCore, INCREMENT)))
        const superparticularDurationScalar: Scalar<Scalar> = as.Scalar<Scalar>(use.Scalar(rawCore, superparticular))
        const superparticularDenominator: Denominator = as.Denominator(use.Cardinal(rawCore, INCREMENT))
        const superparticularInterval: Rational = [ as.Numerator(rawCore), superparticularDenominator ]

        const subparticularDivisor: Scalar =
            as.Scalar(reciprocal(use.Cardinal(rawCore, DECREMENT)))
        const subparticularDurationScalar: Scalar<Scalar> =
            as.Scalar<Scalar>(use.Scalar(rawCore, subparticularDivisor))
        const subparticularDenominator: Denominator =
            as.Denominator(use.Cardinal(rawCore, DECREMENT))
        const subparticularInterval: Rational = [ as.Numerator(rawCore), subparticularDenominator ]

        let hasLooped: boolean = false
        while (!hasLooped) {
            const previousDuration: Scalar = finalElement(coreDurations)
            const maybeNextUpwardsDuration: Scalar = use.Scalar(previousDuration, superparticularDurationScalar)
            const maybeNextDownwardsDuration: Scalar = use.Scalar(previousDuration, subparticularDurationScalar)

            if (isUpwardsDurationCloserToOriginalDurationOfOne(maybeNextUpwardsDuration, maybeNextDownwardsDuration)) {
                if (isCloseTo(maybeNextUpwardsDuration, INITIAL_CORE_DURATION)) {
                    hasLooped = true
                }
                else {
                    coreDurations.push(maybeNextUpwardsDuration)
                }
                coreIntervals.push(superparticularInterval)
            }
            else {
                if (isCloseTo(maybeNextDownwardsDuration, INITIAL_CORE_DURATION)) {
                    hasLooped = true
                }
                else {
                    coreDurations.push(maybeNextDownwardsDuration)
                }
                coreIntervals.push(subparticularInterval)
            }
        }

        return {
            coreDurations,
            coreIntervals,
        }
    }

export {
    computeCoreCycles,
}
