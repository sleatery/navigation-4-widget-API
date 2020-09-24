import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';


const options = [

{
    label: 'Afrikaans',
    value: 'af'
},
{
    label: 'Arabic',
    value: 'ar'
},
{
    label: 'Hindi',
    value: 'hi'
},
{
    label: 'Vietnamese',
    value: 'vi'
}
];


const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
return (
    <div> 
        <div className="ui form">
            <div className="field">
                <label>Enter Text</label>
        <input type="text" value={text} onChange={(event) => {setText(event.target.value)}}/>
        </div>
        </div>
        <hr/>

        <Dropdown 
        label="Chọn ngôn ngữ"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}/> 
        <h3 className="ui header">Output</h3>
        <Convert 
        language={language}
        text={text}/>
        </div>
    );
};

export default Translate;