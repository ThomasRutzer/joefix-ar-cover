import { useRef } from "react"
import { animated } from "@react-spring/three"
import { useFrame } from "@react-three/fiber"

import Text from "./Text"
import useStore from "../../store"

const InfoText = props => {
  let angle = 0
  const textRef = useRef()
  const currentSongName = useStore(state => state.currentSongName)

  useFrame(() => {
    textRef.current.position.x += 0.001 * Math.cos(angle)
    textRef.current.position.z += 0.001 * Math.sin(angle)
    angle += 0.01
  })

  return (
    <animated.group
      {...props}
      ref={textRef}
      position-y={-.2}
      position-x={1.8}>
      <Text
        position={[-2.3, 1.7, 0]}
        rotation={[Math.PI / 8,  - Math.PI / 8, 0]}
        opacity={props.opacity}
        appearance="primary"
        children="JOE" />
      <Text
        position={[-2.5, 1, 0]}
        rotation={[Math.PI / 8, Math.PI / 6, Math.PI / 24]}
        opacity={props.opacity}
        appearance="secondary"
        children="FIX" />
      {/* <Text
        font={font}
        fontSize={0.15}
        color="#d5d3d3"
        position-y={1}
        anchorX="center"
        anchorY="middle">
        JOE FIX
        <TextMaterial opacity={props.opacity} />
      </Text>
      <Text
        font={font}
        fontSize={0.1}
        color="#d5d3d3"
        position-y={0.86}
        position-x={0.5}
        anchorX="center"
        anchorY="middle">
        is playing
        <TextMaterial opacity={props.opacity} />
      </Text>
      <Text
        font={font}
        fontSize={0.15}
        color="#e2192c"
        position-y={0.7}
        position-x={0.2}
        anchorX="center"
        anchorY="middle">
        {currentSongName}
        <TextMaterial opacity={props.opacity} />
      </Text> */}
    </animated.group>
  )
}

export default InfoText
