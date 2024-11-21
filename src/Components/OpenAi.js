import { OpenAI } from 'openai'

function OpenAi(){
    const theKey = process.env.REACT_APP_TEST_KEY;
    function printkey(){
        console.log(theKey)
    }
    return (
        <div>
            <p>OpenAi</p>
            <button onClick={printkey}>Print key</button>
        </div>
        
    )
}

export default OpenAi;