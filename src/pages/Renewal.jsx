import '../styles/forms.css'

export default function Renewal() {

    function submitHandler(e) {
        e.preventDefault();
        alert('Hi')

    }


    return(
        <>
            <div class='form-action'>
                <form className="form-body" onSubmit={submitHandler}>
                    <h1 className="renew-title">Enter your name and Driver's Licence Number</h1>
                    <div className='content'>
                        <div className='input-field'>
                            <input
                                type="text"
                                placeholder="Full Name"
                                id='name'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type='number'
                                placeholder='Drivers Licence number'
                                id='d-l-n'
                                required
                            />
                        </div>

                    </div>
                    <div className='action'>
                        <button
                            type='submit'
                            className='reg-btn'
                        >
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}