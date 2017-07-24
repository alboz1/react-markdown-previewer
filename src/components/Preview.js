import React from 'react';

const Preview = (props) => {
    return (
        <div dangerouslySetInnerHTML={props.renderMarkdown} className="preview-wrapper" />
    );
}

export default Preview;