import React from 'react'
import '../header/header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

function Header() {
  return (
    <div className='gpt3__header' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT3 OpenAI</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum neque omnis molestiae, aperiam in molestias quae obcaecati, nobis accusamus aut totam nihil odio.</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your email address' />
          <button className='gpt3__header-button' type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src= { people } alt="people" />
          <p>1000 people Lorem ipsum dolor, sit amet . </p>
        </div>
      </div>
      <div className='gpt3__header-img'>
        <img src={ ai } alt="Ai" />
      </div>
      
    </div>
  )
}

export default Header
