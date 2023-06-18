import double_quotes from '../images/double-quotes-svgrepo-com.svg'

export default function QuoteBox() {
    return (
        <div>
            <div id="quote-box">
                <div id="text">
                    <p><img src={double_quotes} className='double-quotes'></img> random quote</p>
                </div>
                <div id="author">- author</div>
                <div>
                    <a href="twitter.com/intent/tweet" id="tweet-quote">
                    <button >Twi</button>
                    </a>
                    <button>FCC</button>
                    <button>Git</button>
                    <button id="new-quote">Q</button>
                </div>
            </div>
        </div>
    )
}
