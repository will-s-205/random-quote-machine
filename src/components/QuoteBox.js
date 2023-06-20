import '../App.scss';
import React, { useState, useEffect } from 'react';
import { FaFreeCodeCamp, FaGithub, FaTwitter, FaQuoteLeft } from 'react-icons/fa';
// import colorVariations from '../data/colorVariations';
import quotesList from '../data/quotes.json'

const url =
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

export default function QuoteBox({ onNewQuoteClick }) {
    const [quotedText, setQuotedText] = useState('');
    const [authorName, setAuthorName] = useState('');

    function getQuoteFromProject() {
        const quotes = quotesList.quotes;
        const randomNum = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomNum];

        setAuthorName(randomQuote.author);
        setQuotedText(randomQuote.quote);
    }

    // Fetch quote on initial render
    useEffect(() => {
        fetchRandomQuote();
    }, []);

    const fetchRandomQuote = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const quotes = data.quotes;
                const randomNum = Math.floor(Math.random() * quotes.length);
                const randomQuote = quotes[randomNum];

                setAuthorName(randomQuote.author);
                setQuotedText(randomQuote.quote);
            })
            .catch((error) => {
                console.log(error);
                getQuoteFromProject()
            });
    };

    const handleNewQuoteClick = () => {
        // Fetch a new quote
        onNewQuoteClick();
        fetchRandomQuote();
    }

    // Old good JS way to change background-color on click
    // const setColor = () => {
    //     const randomColor = Math.floor(Math.random() * colorVariations.length);
    //     console.log(colorVariations[randomColor].title)
    //     return document.getElementById("App").style.backgroundColor = colorVariations[randomColor].color
    // }
    // {/* <button id="new-quote" onClick={setColor}>newQuote</button> */}

    const twitterLink = `https://twitter.com/intent/tweet?text=${`"${quotedText}" - ${authorName}`
        }&hashtags=quotes`;

    return (
        <div>
            <div id="quote-box">

                <div id="text">
                    <p><FaQuoteLeft /> {quotedText}</p>
                </div>
                <div id="author">- {authorName}</div>

                <div>
                    <a id="tweet-quote" href={twitterLink} target='_blank' rel="noreferrer">
                        <button className="button icon"><FaTwitter /></button>
                    </a>
                    <a href='https://www.freecodecamp.org/rigo205' target='_blank' rel="noreferrer">
                        <button className="button icon"><FaFreeCodeCamp /></button>
                    </a>
                    <a href='https://github.com/will-s-205' target='_blank' rel="noreferrer">
                        <button className="button icon"><FaGithub /></button>
                    </a>
                    <button id="new-quote" className="button new-quote" onClick={handleNewQuoteClick}>New quote</button>
                </div>
            </div>
            {/* <small className="footer"><a href="https://github.com/will-s-205/random-quote-machine" target='_blank'>by William Step</a></small> */}
        </div>
    )
}
