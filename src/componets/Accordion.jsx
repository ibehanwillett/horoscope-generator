import React from 'react'
import horoscopes from '../../horoscopes'
import { useState } from 'react';



const Accordion = () => {
    return (
      <>
      <ul>{ HoroscopePanels }</ul>
      </>
    );
  }

// const HoroscopePanels = horoscopes.map(star => {
//     <Panel title="{star.sign}" isActive={true}>
//     {star.fortune}
//     </Panel>
// })


const HoroscopePanels = horoscopes.map(star => {
    console.log(star.sign);
    console.log(star.fortune);
    return(
    <li>{star.fortune}</li>)
})

  
  function Panel({ title, children, isActive }) {
    return (
      <section className="panel">
        <h3>{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button onClick={() => setIsActive(true)}>
            Show
          </button>
        )}
      </section>
    );
  }

  export default Accordion