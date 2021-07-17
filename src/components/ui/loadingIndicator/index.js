import { useTransition, animated, config } from "@react-spring/web"

import { VIEWS } from "../../../config"
import useStore from "./../../../store"
import "./index.css"

const LoadingIndicator = () => {
  const view = useStore(state => state.view)
  const arEngineReady = useStore(state => state.arEngineReady)

  const labelTransitions = useTransition(view !== VIEWS.INTRO, {
    from: { opacity: 0, y: -30 },
    enter: { opacity: 1, y: 0 },
    delay: 700,
    config: config.molasses
  })

  const wrapperTransitions = useTransition(!arEngineReady, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  })

  return (
    <>
      {wrapperTransitions(
        (wrapperStyles, wrapper) => wrapper &&
          <animated.div className="loading-indicator" style={wrapperStyles}>
            {labelTransitions(
              (labelStyes, label) => label &&
                <animated.p className="loading-indicator__label" style={labelStyes}>Preparing</animated.p>
            )}
            <div className="loading-indicator__logo" />
            <span className="loading-indicator__drop"></span>
            <span className="loading-indicator__drop loading-indicator__drop--delay-300 loading-indicator__drop--small"></span>
            <span className="loading-indicator__fill"></span>
          </animated.div>
      )}
    </>
  )
}

export default LoadingIndicator