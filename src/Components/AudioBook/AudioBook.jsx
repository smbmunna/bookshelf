import './AudioBook.css'; 

const AudioBook = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold  text-white dark:text-black text-center my-8">Join the trend of audio books. Listen on the go. Everywhere!</h1>
            <section className="audio-trend">
                {/* Left Section */}
                <div className="audio-text">
                    <h1>Join the Trend of Audiobooks</h1>
                    <p>
                        Experience stories, knowledge, and inspiration without turning a
                        single page. Audiobooks let you learn and enjoy books anytime —
                        while commuting, relaxing, or multitasking.
                    </p>
                    <p className="highlight">
                        Listen. Learn. Grow.
                    </p>
                    <button className="cta-btn">Start Listening Today</button>
                </div>

                {/* Right Section */}
                <div className="audio-image">
                    <img
                        src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
                        alt="Listening to audiobook with headphones"
                    />
                </div>
            </section>
        </div>
    );
};

export default AudioBook;