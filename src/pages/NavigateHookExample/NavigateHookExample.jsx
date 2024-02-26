import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavigateHookExample() {
    const navigate = useNavigate();
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const goToHomepage = (event) => {
        event.preventDefault();
        event.target.reset();
        setSubmitSuccess(true);

        // after 5 seconds, send the user to /contestants
        setTimeout(() => {
            navigate("/contestants");
        }, 5000);
    }

    return (
        <>
            <form onSubmit={goToHomepage}>
                <label>Some Input<input type="text" /></label>
                <button disabled={submitSuccess}>Submit Form</button>
            </form>
            {submitSuccess && (
                <div>Successfully submitted form. Taking you to the view contestants page</div>
            )}
        </>
    )
}

export default NavigateHookExample;