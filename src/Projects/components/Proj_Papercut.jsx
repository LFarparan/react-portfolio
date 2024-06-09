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
                    <p className='merntext'> Express </p>
                </div>
            </div>
            <div className="proj1part2">
                <div className="R">
                    <img src={react} alt="react" className='react'/>
                    <p className='merntext'> React </p>
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
                <h2> PAPERCUT </h2>
                <p className='stack'> 
                    <span className='mongotext'> MongoDB Atlas </span> | 
                    <span className="expresstext"> Express </span>  | 
                    <span className="reacttext"> React </span>  |
                    <span className="nodetext"> Node </span> |
                    <span className="verceltext"> Vercel </span>
                </p>
                <p className='descriptiontext'> 
                    &nbsp;&nbsp;&nbsp;&nbsp; PaperCut is a platform where users can discover
                    and exchange recommendations for books, series, movies, music, and more.
                </p>
                <p className='descriptiontext'> 
                    &nbsp;&nbsp;&nbsp;&nbsp; It is a React website that makes HTTP 
                    requests to an API I built using Node.js, Express, and MongoDB Atlas.
                    Both were deployed on Vercel.
                </p>
            </div>
            
        </div>
    </section>
  )
}
