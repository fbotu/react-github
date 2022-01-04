import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-start bg-dark m-0 p-0 vh-100">
            <h1 className="text-light text-center p-5 w-100">Welcome</h1>
            <main className='w-100 text-center'>
                <h2 className='text-light'>Welcome to the homepage!</h2>
                <p className='text-light'>You can do this, I believe in you.</p>
            </main>
            <nav className='w-100 text-center'>
                <Link to="/about">About</Link>
            </nav>
            <main className='w-100 text-center'>
                <h2 className='text-light'>Who are we?</h2>
                <p className='text-light'>
                That feels like an existential question, don't you
                think?</p>
            </main>
            <nav className='w-100 text-center'>
                <Link to="/">Home</Link>
            </nav>
        </div>
      
    )
}

export default Home;
