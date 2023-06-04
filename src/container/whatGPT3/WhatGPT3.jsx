import React from 'react'
import './whatGPT3.css'
// import { Feature } from '../../components'
import Feature from '../../components/feature/Feature'

function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
      <div className='gpt3__whatgpt3-feature'>
      <Feature title='What is GPT-3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum molestias, dignissimos rerum unde voluptatibus nam autem debitis tempore quas ipsum, molestiae aut.'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The Possibilities are beyond your imagination </h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='ChatBot' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum molestias, dignissimos rerum unde'/>
        <Feature title='Knowledge' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum molestias, dignissimos rerum unde voluptatibus nam autem debitis tempore quas ipsum, molestiae aut.'/>
        <Feature title='Education' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum molestias, dignissimos rerum unde voluptatibus nam autem debitis tempore quas ipsum, molestiae aut.'/>
      </div>
    </div>  
  )
}

export default WhatGPT3
