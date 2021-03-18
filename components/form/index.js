import { useState } from 'react';
import Popup from '../popup';
import Style from './style.module.scss'

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(20);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const [popup, setPopup] = useState({ show: false, title: '', message: '', type: '' });

    async function handleSubmit(event) {
        event.preventDefault();

        setLoading(true);

        const body = { name, email, age, message }
        const result = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        }).then(response => {
            return response.json();
        })

        if (result.message === 'ok') {
            setLoading(false);
            event.target.reset();
            showPopup(
                'Sucesso!',
                'Sua mensagem foi enviada!',
                'success'
            )
        } else {
            setLoading(false);
            showPopup(
                'Erro!',
                'Não foi possível enviar sua mensagem!',
                'erro'
            )
        }
    }

    function showPopup(message, title, type) {
        setPopup({ title, message, show: true, type });
        setTimeout(() => {
            setPopup({ show: false });
        }, 5000)
    }

    return (

        <div className={Style.formWrapper}>
            <Popup
                title={popup.title}
                message={popup.message}
                type={popup.type}
                show={popup.show}
            />
            <div className={Style.formContainer}>
                <div className={Style.formHeader}>
                    <h3>Contact Us!</h3>
                    <p>Feel free to text us!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={Style.formGroup}>
                        <label htmlFor='name'>Name</label>
                        <input onChange={(e) => setName(e.target.value)} id='name' type='text' required />
                    </div>
                    <div className={Style.formGroup}>
                        <label htmlFor='email'>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} id='email' type='email' required />
                    </div>
                    <div className={Style.formGroup}>
                        <label htmlFor='idade'>Your age</label>
                        <input onChange={(e) => setAge(e.target.value)} defaultValue={age} id='idade' type='number' required />
                    </div>
                    <div className={Style.formGroup}>
                        <label htmlFor='message'>Message</label>
                        <textarea onChange={(e) => setMessage(e.target.value)} id='message' type='textarea' rows='8' required />
                    </div>
                    <div className={Style.formGroup}>
                        <button id='submit' type='submit' disabled={loading} >
                            Send
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}