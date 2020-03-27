// // import React from 'react'
// // import styled from 'styled-components'


// // const ScrollInfo = styled.div`
// //   position: fixed;
// //   top: 0;
// //   right: 0;
// //   font-size: 12px;
// //   line-height: 1;
// //   z-index: 1000;
// //   margin: 3.5rem 1rem 0 0;
// //   padding: 0.5rem 1rem;
// //   background: white;
// //   border-radius: 8px;
// //   box-shadow: 0px 0px 16px hsla(0,0%,0%,0.25);
// // `

// // function useScrollPosition(elementRef) {

// //   function getScroll() {
// //     return {
// //       y: elementRef.current ? elementRef.current.scrollTop : undefined,
// //       x: elementRef.current ? elementRef.current.scrollLeft : undefined
// //     }
// //   }

// //   const [scrollPosition, setScrollPosition] = useState(getScroll)

// //   useEffect(() => {

// //     if (!elementRef.current) {
// //       return false
// //     }
      
// //     function handleScroll() {
// //       setScrollPosition(getScroll())
// //     }

// //     elementRef.current.addEventListener('scroll', handleScroll);
// //     return () => elementRef.current.removeEventListener('scroll', handleScroll);
// //   }, []) // Empty array ensures that effect is only run on mount and unmount

// //   return scrollPosition
// // }

//  // const scroll = useScrollPosition(elementRef)


//  const ContentContainer = (props) => {

//   // const elementRef = useRef()

//   // useEffect(() => {
//   //   setTimeout(() => elementRef.current.scrollTop = 0, 0)
//   // }, [])

//    useEffect(() => {
//     setTimeout(() => document.getElementById('ContentContainer').scrollTop = 0, 0);
//   })

//   return (
//     // <Main ref={ref}>
//     <Main id='ContentContainer'>
//       {props.children}
//     </Main>
//   )
// }

// export default ContentContainer