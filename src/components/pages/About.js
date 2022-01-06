import React from 'react'
import '../About.css'

function About() {
    return (
        <div className="about-background bg-dark m-0 px-0 py-0">
            <div className="about-foreground">
                <h1 className="text-light text-center p-5 w-100">ABOUT</h1>
                <section className='m-5 p-5 h-100'>
                  <p className='text-light'>This is an about page</p>
                </section>
            </div>              
        </div>
    )
}

export default About;
