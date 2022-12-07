import '../App.css';
import React, { useRef, useEffect, useContext } from 'react';

function Home() {
    return (
      <div className='home-div'>
        <div className='heading-div'>
        <h1 className='page-header'>
        MY PORTFOLIO
        </h1>
        <p 
        className='bio' id="bio">Hello, my name is ____ and I am a Junior at Brown University studying Computer Science.
          It is hard for me to pick what is my favorite field, which is why I enjoy taking a variety of Computer
          Science classes. I hope you enjoy my portfolio!
        </p>
        </div>
        <div className="portfolio-items">

          <div className="my-div-item-1">
            <h3 className='item-header'>Responsive Redesign</h3>
            <p className='item-text'><b>Who:</b> 
            <br/>
            This project is made for fans of Destroy Lonely, and it is more specifically made for
            those who need accessible websites.
            </p>
            <p className='item-text'><b>What:</b> 
            <br/>
            In this project I redesigned an artist, Destroy Lonely's, website.</p>
            <p className='item-text'><b>Why:</b> 
            <br/>
            The previous website has accessibility issues, which I corrected.</p>
            <a className="button-2" href="https://watercup1000.github.io/responsive-design/" target="_blank">View In More Detail</a>
          </div>

          <div className='my-div-item-2'>
            <h3 className='item-header'>Development</h3>
            <p className='item-text'><b>Who:</b> 
            <br/>
            This project is made for people who would like to shop for drinks.
            </p>
            <p className='item-text'><b>What:</b> 
            <br/>
            This website is a simple react website where a user can browse through different
            drinks, as well as add and remove the drinks from the user's cart.</p>
            <p className='item-text'><b>Why:</b> 
            <br/>
            This project was good practice with building a basic react application. I made use of state and props
            to handle displaying data and manage my filtering/sorting. 
            </p>
            <a className="button-2" href="https://watercup1000.github.io/development/" target="_blank">View In More Detail</a>
          </div>

          <div className='my-div-item-3'>
            <h3 className='item-header'>Personas Storyboarding</h3>
            <p className='item-text'><b>Who:</b> 
            <br/>
            This project is made for the owners of the Coca Cola drink machine.
            </p>
            <p className='item-text'><b>What:</b> 
            <br/>
            This project is a construction of personas and storyboards for users of the Coca Cola drink machine
            in the Ratty.</p>
            <p className='item-text'><b>Why:</b> 
            <br/>
            When analyzing interfaces it is important to understand how exactly a user would go about
            using the interface. This process helped me better understand how to about thinking about the user
            first and foremost</p>
            <a className="button-2" href="https://watercup1000.github.io/Personas-Storyboarding/" target="_blank">View In More Detail</a>
          </div>

          <div className='my-div-item-4'>
            <h3 className='item-header'>Song Selector</h3>
            <p className='item-text'><b>Who:</b> 
            <br/>
            This project is made for fans of Playboi Carti and those who are new to his music.
            </p>
            <p className='item-text'><b>What:</b> 
            <br/>
            This project selects a Playboi Carti song for the user to listen to. The selection
            is based off a variety of factors which the user inputs answers to.</p>
            <p className='item-text'><b>Why:</b> 
            <br/>
            It often difficult to listen to a variety of tracks from a specific artist. Additionally
            people often want to listen to different songs in different settings. My project allows for better
            exploration of Playboi Carti's music and keeps in mind the user's setting when determining which
            songs to pick.</p>
            <a className="button-2" href="https://carti-selecter.itsthemoon.vercel.app/" target="_blank">View In More Detail</a>
          </div>
        </div>
        
        </div>
    );
  }
  
  export default Home;


  // I need to make sure that I have the context. The next would be process. This is for each portfolio square.