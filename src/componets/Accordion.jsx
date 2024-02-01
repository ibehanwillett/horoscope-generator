import React from 'react'
import horoscopes from '../../horoscopes'
import { useState } from 'react';



const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
      < HoroscopePanel star= {0} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      < HoroscopePanel star= {1} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      < HoroscopePanel star= {2} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      < HoroscopePanel star= {3} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      < HoroscopePanel star= {4} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      < HoroscopePanel star= {5} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      < HoroscopePanel star= {6} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      < HoroscopePanel star= {7} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      < HoroscopePanel star= {8} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      < HoroscopePanel star= {9} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      < HoroscopePanel star= {10} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      < HoroscopePanel star= {11} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      <h1>LOAd</h1>
      </>
    );
  }

// const HoroscopePanel = () => {
//     for (let star in horoscopes) {
//         console.log(star)
//         console.log(horoscopes[star])
//         return (star => {
//             return (
//                 <>
//                 <h1>hello</h1>
//                 <Panel title={horoscopes[star].sign} isActive={true}>
//                 {horoscopes[star].fortune}
//                 </Panel>
//                 </> 
//                 )
//         })
// }}

const HoroscopePanel = ( {star=0, activeIndex, setActiveIndex }) => {
          let index = JSON.stringify(star)
            return (
                <>
                <Panel 
                title={horoscopes[star].sign} 
                isActive={activeIndex === index}
                onShow={() => setActiveIndex(index)}
                >
                {horoscopes[star].fortune}
                </Panel>
                </> 
                )
        }

  
  function Panel({ 
    title,
    children,
    isActive,
    onShow}) {
    return (
      <section className="panel">
        <h3>{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button onClick={onShow}>
            Show
          </button>
        )}
      </section>
    );
  }

export default Accordion