import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState(0)

    return (
        <>
            <div>
                <form>
                    <fieldset>
                        <legend>Gegevens</legend>
                        <label htmlFor="name-field">Naam:
                            <input
                                type="text"
                                id="name-field"
                                name="name"
                                value={nameValue}
                                placeholder="Bert Bollemans"
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
                </form>
            </div>
        </>
    );
}

export default App;
