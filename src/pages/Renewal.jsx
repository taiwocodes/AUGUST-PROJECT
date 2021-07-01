import '../styles/forms.css'

import { useHistory } from 'react-router';

export default function Renewal() {

    const history = useHistory();

    function submitHandler(e) {
        e.preventDefault();

        history.push("/renewal-accepted")


    }


    return(
        <>
            <div className='form-action'>
                <form className="form-body" onSubmit={submitHandler}>
                    <h1 className="renew-title">ENTER YOUR NAME AND LICENCE NUMBER</h1>
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
                                placeholder='Licence number'
                                id='d-l-n'
                                required
                            />
                        </div>
                        <div className='gender'>
                            <label className="labels" htmlFor="e-d">Expiry Date:
                            <input
                                type='date'
                                placeholder='Expiry Date'
                                id='e-d'
                                required
                            />
                            </label>
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