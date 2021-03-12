import { useState } from 'react';
import Style from './style.module.scss'

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(20);
    const [message, setMessage] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        
        const body = { name, email, age, message }
        console.log(body)
        const result = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })

        if (result) {
            console.log(result);
        }
    }

    return (
        <div className={Style.formWrapper}>
            <div className={Style.formContainer}>
                <div className={Style.formHeader}>
                    <h3>Contact Us!</h3>
                    <p>Feel free to text us!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={Style.formGroup}>
                        <label htmlFor='name'>Name</label>
                        <input onChange={(e) => setName(e.target.value)} id='name' type='text' />
                    </div>
                    <div className={Style.formGroup}>
                        <label htmlFor='email'>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} id='email' type='email' />
                    </div>
                    <div className={Style.formGroup}>
                        <label htmlFor='idade'>Your age</label>
                        <input onChange={(e) => setAge(e.target.value)} defaultValue={age} id='idade' type='number' />
                    </div>
                    <div className={Style.formGroup}>
                        <label htmlFor='message'>Message</label>
                        <textarea onChange={(e) => setMessage(e.target.value)} id='message' type='textarea' rows='8' />
                    </div>
                    <div className={Style.formGroup}>
                        <button id='submit' type='submit' >
                            Submit
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}