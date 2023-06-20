import React, { useState, useEffect } from 'react';
// import colorVariations from '../data/colorVariations';
import double_quotes from '../images/double-quotes-svgrepo-com.svg'
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

    return (
        <div>
            <div className="quote-box">

                <div className="text">
                    <p><img src={double_quotes} className='double-quotes' alt="double quotes svg"></img> {quotedText}</p>
                </div>
                <div className="author">- {authorName}</div>

                <div>
                    <a href="twitter.com/intent/tweet" id="tweet-quote">
                        <button >Twi</button>
                    </a>
                    <button>FCC</button>
                    <button>Git</button>
                    {/* <button className="new-quote" onClick={props.handleNewQuoteButtonClick}>newQuote</button> */}
                    {/* <button className="new-quote" onClick={getQuote}>newQuote</button> */}
                    <button className="new-quote" onClick={handleNewQuoteClick}>newQuote</button>
                </div>
            </div>
        </div>
    )
}
