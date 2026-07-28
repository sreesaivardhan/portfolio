import { useEffect, useState } from 'react'

export default function LoadingScreen({ onDone }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Start fade-out after 580ms, then notify parent at 980ms
    const fadeTimer = setTimeout(() => setFadeOut(true), 580)
    const doneTimer = setTimeout(() => onDone(), 980)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`} aria-label="Loading portfolio">
      <span className="loading-logo">SSV</span>
      <div className="loading-bar-track">
        <div className="loading-bar-fill" />
      </div>
      <span className="loading-text">LOADING...</span>
    </div>
  )
}
