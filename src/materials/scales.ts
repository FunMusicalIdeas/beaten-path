import { BuildScalesFunction, Scale } from '@musical-patterns/utilities'
import { buildStandardScales, scaleFromScalarsAndScalar } from '../../../../patternMaterial'
import { BeatenPathPatternSpec } from '../types'

const buildScales: BuildScalesFunction =
    (patternSpec: BeatenPathPatternSpec): Scale[] => {
        const { nonScale } = buildStandardScales()

        const gainScale: Scale = nonScale
        const durationsScale: Scale = scaleFromScalarsAndScalar(
            nonScale.scalars,
            patternSpec.patternDurationScalar,
        )
        const pitchesScale: Scale = scaleFromScalarsAndScalar(
            nonScale.scalars,
            patternSpec.patternPitchScalar,
        )

        return [
            gainScale,
            durationsScale,
            pitchesScale,
        ]
    }

export {
    buildScales,
}
