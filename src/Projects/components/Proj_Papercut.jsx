import React from 'react'
import '../style/papercut.css'
import papercuthome from '../assets/projectmern.png'
import mongo from '../assets/mongo.png'
import express from '../assets/express.png'
import react from '../assets/react.png'
import node from '../assets/node.svg'


export default function Papercut() {
  return (
    <section id='project1'>
        <div className="p1con">
            <div className="proj1part1">
                <div className="home1con">
                    <div className="screen">
                        <img src={papercuthome} alt="papercuthome" className='papercuthome'/>
                    </div>
                </div>
                <div className="M">
                    <img src={mongo} alt="mongo" className='mongo'/>
                </div>
                <div className="E">
                    <img src={express} alt="express" className='express'/>
                </div>
            </div>
            <div className="proj1part2">
                <div className="R">
                    <img src={react} alt="react" className='react'/>
                </div>
                <div className="N">
                    <img src={node} alt="node" className='node'/>
                </div>
                <div className="home1con">
                    <div className="screen">
                        <img src={papercuthome} alt="papercuthome" className='papercuthome'/>
                    </div>
                </div>
            </div>
            <div className="proj1description">
                <h2>
                    PaperCut
                </h2>
                <p> A MERN PROJECT</p>
            </div>
            
        </div>
    </section>
  )
}
