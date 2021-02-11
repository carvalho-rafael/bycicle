import Style from './style.module.scss'

export default function Form() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log("sent");
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
                        <input id='name' type='text' ></input>
                    </div>
                    <div className={Style.formGroup}>
                        <label htmlFor='email'>Email</label>
                        <input id='email' type='email' ></input>
                    </div>
                    <div className={Style.formGroup}>
                        <label htmlFor='idade'>Your age</label>
                        <input id='idade' type='number' ></input>
                    </div>
                    <div className={Style.formGroup}>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message' type='textarea' rows='8' ></textarea>
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