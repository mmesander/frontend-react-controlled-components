import React from 'react';
import './App.css';

function App() {
    // const [nameValue, setNameValue] = React.useState('');
    // const [ageValue, setAgeValue] = React.useState(0);
    // const [messageValue, setMessageValue] = React.useState('');
    // const [newsLetterValue, setNewsLetterValue] = React.useState(false);
    const [formState, setFormState] = React.useState({
        name: '',
        age: 0,
        message: '',
        newsletter: false,
        gender: 'neutral',
    });

    function handleFormChange(e) {
        const changedFieldName = e.target.name
        let newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        if (changedFieldName === "age") {
            newValue = parseInt(newValue);
        }

        setFormState({
            ...formState,
            [changedFieldName]: newValue
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Gegevens</legend>

                        <label htmlFor="name-field">
                            Naam:
                            <input
                                type="text"
                                id="name-field"
                                name="name"
                                value={formState.name}
                                onChange={handleFormChange}
                            />
                        </label>

                        <label htmlFor="age-field">
                            Leeftijd:
                            <input
                                type="number"
                                id="age-field"
                                name="age"
                                value={formState.age}
                                onChange={handleFormChange}
                            />
                        </label>

                        <label htmlFor="gender">
                            Gender:
                            <select
                                name="gender"
                                value={formState.gender}
                                onChange={handleFormChange}>
                                <option value="neutral">Neutral</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </label>


                    </fieldset>

                    <fieldset>
                        <legend>Jouw review</legend>

                        <label htmlFor="message-field">
                            Opmerkingen:
                            <textarea
                                id="message-field"
                                name="message"
                                placeholder="Wat vond je van het recept"
                                cols="45"
                                rows="4"
                                value={formState.message}
                                onChange={handleFormChange}                            />
                        </label>

                        <label htmlFor="newsletter">
                            <input
                                type="checkbox"
                                id="newsletter"
                                name="newsletter"
                                checked={formState.newsletter}
                                onChange={handleFormChange}                            />
                            Ik schrijf me in voor de nieuwsbrief
                        </label>
                        <button type="submit">
                            Versturen
                        </button>
                    </fieldset>
                </form>
            </div>
        </>
    )
        ;
}

export default App;
