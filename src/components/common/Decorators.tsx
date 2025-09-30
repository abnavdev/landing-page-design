import React, { useMemo } from 'react'
import styles from './Decorators.module.css'
import decor1 from '../../assets/decor1.png'
import decor2 from '../../assets/decor2.png'
import decor3 from '../../assets/decor3.png'

type DecoratorsProps = {
  count?: number
  seed?: number // for consistent randomization if needed
}

const available = [decor1, decor2, decor3]

// Simple seeded random number generator
function seededRandom(seed: number) {
  let x = seed
  return function() {
    x = (x * 9301 + 49297) % 233280
    return x / 233280
  }
}

const Decorators: React.FC<DecoratorsProps> = ({ count = 3, seed = 0 }) => {
  const items = useMemo(() => {
    const decorations = []
    const rand = seededRandom(seed)
    
    // Calculate vertical zones to prevent overlap
    const minSpacing = 25 // minimum 25vh between items
    const zones = []
    
    // Create available vertical positions
    for (let i = 10; i <= 90; i += minSpacing) {
      zones.push(i)
    }
    
    // Shuffle zones deterministically
    const shuffledZones = [...zones].sort(() => rand() - 0.5)
    
    // Determine distribution based on count
    let leftCount = Math.floor(count / 2)
    let rightCount = Math.ceil(count / 2)
    
    // Add some controlled randomness to distribution
    if (rand() > 0.5) {
      [leftCount, rightCount] = [rightCount, leftCount]
    }
    
    let zoneIndex = 0
    
    // Place left-side decorations
    for (let i = 0; i < leftCount && zoneIndex < shuffledZones.length; i++) {
      const imageIndex = (seed + i) % available.length
      const top = shuffledZones[zoneIndex++]
      const rotate = -15 + rand() * 30 // -15 to +15 degrees
      
      decorations.push({
        src: available[imageIndex],
        side: 'left' as const,
        top,
        rotate,
        key: `decor-left-${i}`,
        zIndex: rand() > 0.5 ? 4 : 6, // vary z-index for depth
      })
    }
    
    // Place right-side decorations
    for (let i = 0; i < rightCount && zoneIndex < shuffledZones.length; i++) {
      const imageIndex = (seed + leftCount + i) % available.length
      const top = shuffledZones[zoneIndex++]
      const rotate = -15 + rand() * 30
      
      decorations.push({
        src: available[imageIndex],
        side: 'right' as const,
        top,
        rotate,
        key: `decor-right-${i}`,
        zIndex: rand() > 0.5 ? 4 : 6,
      })
    }
    
    return decorations
  }, [count, seed])

  return (
    <div className={styles.container} aria-hidden="true" role="presentation">
      {items.map((item) => (
        <img
          key={item.key}
          src={item.src}
          alt=""
          className={`${styles.image} ${styles[item.side]}`}
          style={{ 
            top: `${item.top}%`,
            transform: `${item.side === 'left' ? 'translateX(-40%)' : 'translateX(40%)'} rotate(${item.rotate}deg)`,
            zIndex: item.zIndex,
          }}
        />
      ))}
    </div>
  )
}

export default Decorators