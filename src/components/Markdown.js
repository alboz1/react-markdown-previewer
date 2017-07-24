import React from 'react';

const Markdown = (props) => {
    return (
        <div className="markdown-wrapper">
            <textarea value={props.value} rows="8" onChange={props.onChange}></textarea>
        </div>
    );
}

export default Markdown;