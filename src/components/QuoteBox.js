import double_quotes from '../images/double-quotes-svgrepo-com.svg'
import colorVariations from '../data/colorVariations';

export default function QuoteBox() {

    const setColor = () => {
        const randomColor = Math.floor(Math.random() * colorVariations.length);
        // console.log(colorVariations[randomColor].title)
        return console.log(document.getElementById("App").style.backgroundColor = colorVariations[randomColor].title)
    }

    return (
        <div>
            <div id="quote-box">
                <div id="text">
                    <p><img src={double_quotes} className='double-quotes' alt="double quotes svg"></img> random quote</p>
                </div>
                <div id="author">- author</div>
                <div>
                    <a href="twitter.com/intent/tweet" id="tweet-quote">
                        <button >Twi</button>
                    </a>
                    <button>FCC</button>
                    <button>Git</button>
                    <form>
                    <button id="new-quote" onClick={setColor}>newQuote</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
