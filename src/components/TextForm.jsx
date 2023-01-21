import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('')
    
    function convertUpper() {
        setText(text.toUpperCase())
        props.alert('success', 'Converted to Upper Case!!')
    }

    function convertLower() {
        setText(text.toLowerCase());
        props.alert('success', 'Converted to Lower Case!!')
    }
    function handleChange(e) {
        setText(e.target.value)
    }

    function clearText() {
        setText('');
        props.alert('success', 'Text Cleared!!')
    }

    function copyText() {
        navigator.clipboard.writeText(text);
        props.alert('success', 'Copied to Clipboard');
    }

    function handleExtraSpaces() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.alert('success', 'Extra spaces removed!!');
    }

    return (
        <div className="container my-3 ">
            <label htmlFor="box" className='h1 my-3'>{props.heading}</label>
            <textarea className={`form-control my-3 border border-2 border-${props.mode}`} value={text} onChange={handleChange} id="box" placeholder='Type here!!' rows="9"></textarea>
            <button className={`mx-1 btn btn-${props.mode}`} onClick={convertUpper}>Convert To Upper Case</button>    
            <button className={`mx-1 btn btn-${props.mode}`} onClick={convertLower}>Convert To Lower Case</button>    
            <button className={`mx-1 btn btn-${props.mode}`} onClick={handleExtraSpaces}>Remove extra spaces</button>    
            <button className={`mx-1 btn btn-${props.mode}`} onClick={copyText}>Copy Text</button>    
            <button className={`mx-1 btn btn-${props.mode}`} onClick={clearText}>Clear Text</button>    
            <div className='my-1'>
                <h3 className='my-3'>Summary:</h3>
                <p>{text.split(' ').length} {text.split(' ').length > 1 ? 'Words' : 'Word' } and {text.length} Characters</p>
                <p>{.008 * text.split(' ').length} Minutes read</p>
            </div>
            <div className="my-2">
                <h3 className={`border-${props.mode} border-bottom py-3`}>Preview:</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}


