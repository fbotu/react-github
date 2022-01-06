import React from 'react';
import '../Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="hero-section background m-0 px-0 py-0">
            <div className="foreground">
                <h1 className="text-light text-center p-5 w-100">Welcome</h1>
                <section className='m-5 p-5 h-100'>
                    <main className='w-100 text-center p-5'>
                        <h2 className='text-light'>Welcome to the homepage!</h2>
                        <p className='text-light'>You can do this, I believe in you.</p>
                        <nav className='w-100 text-center'>
                            <Link to="/about" className="link-home">About</Link>
                        </nav>
                    </main>
                    <main className='w-100 text-center p-5'>
                        <h2 className='text-light'>Who are we?</h2>
                        <p className='text-light'>
                        That feels like an existential question, don't you
                        think?</p>
                        <nav className='w-100 text-center'>
                            <Link to="/"  className="link-home">Home</Link>
                        </nav>
                    </main>
                </section>
            </div>              
        </div>
      
    )
}

export default Home;
