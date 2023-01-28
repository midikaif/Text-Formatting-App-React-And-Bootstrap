import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('')

    function speak() {
        if ('speechSynthesis' in window) {
            let utter = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utter);
        } else {
            props.alert('warning', "Your browser dont support Text-To-Speech!!")
        }
    }

    function convertUpper() {
        setText(text.toUpperCase())
        if (text.length)
            props.alert('success', 'Converted to Upper Case!!')
        else
            props.alert('warning', 'Type Something to Convert!!')
    }

    function convertLower() {
        setText(text.toLowerCase());
        if (text.length)
            props.alert('success', 'Converted to Lower Case!!')
        else
            props.alert('warning', 'Type Something to Convert!!')
    }
    function handleChange(e) {
        setText(e.target.value)
    }

    function clearText() {
        if (text.length) {
            setText('');
            props.alert('success', 'Text Cleared!!')
        }
        else {
            props.alert('warning', 'Type Something to Clear!!')
        }
    }

    function copyText() {
        if (text.length) {
            navigator.clipboard.writeText(text);
            props.alert('success', 'Copied to Clipboard');
        }
        else {
            props.alert('warning', "First type something to copy!!")
        }
    }

    function handleExtraSpaces() {
        if (text.length) {
            let newText = text.split(/[ ]+/);
            setText(newText.join(' '));
            props.alert('success', 'Extra spaces removed!!');
        }
        else {
            props.alert('warning', 'First type something to remove extra spaces!!');
        }
    }

    return (
        <div className="container my-3 ">
            <label htmlFor="box" className='h1 my-3'>{props.heading}</label>
            <textarea className={`form-control my-3 border border-2 border-${props.mode}`} value={text} onChange={handleChange} id="box" placeholder='Type here!!' rows="9"></textarea>
            <button className={`mx-1 my-1 btn btn-${props.mode}`} onClick={convertUpper}>Convert To Upper Case</button>
            <button className={`mx-1 my-1 btn btn-${props.mode}`} onClick={convertLower}>Convert To Lower Case</button>
            <button className={`mx-1 my-1 btn btn-${props.mode}`} onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button className={`mx-1 my-1 btn btn-${props.mode}`} onClick={copyText}>Copy Text</button>
            <button className={`mx-1 my-1 btn btn-${props.mode}`} onClick={clearText}>Clear Text</button>
            <button className={`mx-1 my-1 btn btn-warning`} onClick={speak}>Text-To-Speech</button>
            <div className='my-1'>
                <h2 className='my-3 pb-3'>Summary:</h2>
                <div className={`p-3 border border-2 border-${props.mode} rounded-pill text-center fs-3`}>
                    <p>{text.split(/\s+/).filter((el) => el.length !== 0).length} {text.split(/\s+/).length > 1 ? 'Words' : 'Word'} and {text.length} Characters</p>
                    <p>{Math.floor(.008 * text.split(/\s+/).filter((el) => el.length !== 0).length).toFixed(2)} Minutes read</p>
                </div>
            </div>
            <div className="my-2">
                <h3 className={`border-${props.mode} border-bottom py-3`}>Preview:</h3>
                <p>{text.length === 0 ? 'Type something to preview' : text}</p>
            </div>
        </div>
    )
}


