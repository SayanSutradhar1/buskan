import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TextAnimation = ({className}:{className?:string}) => {
    return (
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'We produce food for Mice',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'We produce food for Hamsters',
            1000,
            'We produce food for Guinea Pigs',
            1000,
            'We produce food for Chinchillas',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
          className={className}
        />
      );
}

export default TextAnimation