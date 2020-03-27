import React from 'react'
import styled from 'styled-components'

// const WindowInfo = styled.div`
//   position: fixed;
//   top: 0;
//   right: 0;
//   font-size: 12px;
//   line-height: 1;
//   z-index: 1000;
//   margin: 1rem 1rem 0 0;
//   padding: 0.5rem 1rem;
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0px 0px 16px hsla(0,0%,0%,0.25);
// `

// Hook
// function useWindowSize() {
  
//   const isClient = typeof window === 'object'

//   function getSize() {
//     return {
//       width: isClient ? window.innerWidth : undefined,
//       height: isClient ? window.innerHeight : undefined
//     }
//   }

//   const [windowSize, setWindowSize] = useState(getSize)

//   useEffect(() => {

//     if (!isClient) {
//       return false
//     }
    
//     function handleResize() {
//       setWindowSize(getSize())
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []) // Empty array ensures that effect is only run on mount and unmount

//   return windowSize
// }

  // const fade = useSpring({opacity: 1, from: {opacity: 0}})

  // const size = useWindowSize()


 {/* <WindowInfo>{size.width}px / {size.height}px</WindowInfo> */}