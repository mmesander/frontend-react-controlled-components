import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState(0);
    const [messageValue, setMessageValue] = React.useState('');
    const [newsLetterValue, setNewsLetterValue] = React.useState(false);

    function handleSubmit(e){
        e.preventDefault();
        console.log(nameValue, ageValue, messageValue, newsLetterValue);
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Gegevens</legend>
                        <label htmlFor="name-field">Naam:
                            <input
                                type="text"
                                id="name-field"
                                name="name"
                                value={nameValue}
                                placeholder=""
                                onChange={(e) => setNameValue(e.target.value)}
                            />
                        </label>
                        <label htmlFor="age-field">Leeftijd:
                            <input
                                type="number"
                                id="age-field"
                                name="age"
                                value={ageValue}
                                onChange={(e) => setAgeValue(parseInt(e.target.value))}
                            />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Jouw review</legend>
                        <label htmlFor="message-field">Opmerkingen:
                            <textarea
                                id="message-field"
                                name="message"
                                placeholder="Wat vond je van het recept"
                                cols="45"
                                rows="4"
                                value={messageValue}
                                onChange={(e) => setMessageValue(e.target.value)}
                            />
                        </label>
                        <label htmlFor="newsletter">
                            <input
                                type="checkbox"
                                id="newsletter"
                                name="newsletter"
                                checked={newsLetterValue}
                                onChange={() => setNewsLetterValue(!newsLetterValue)}
                            />
                            Ik schrijf me in voor de nieuwsbrief
                        </label>
                        <button
                            type="submit"
                        >
                            Versturen
                        </button>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default App;
