import React from 'react';
import Markdown from './Markdown';
import Preview from './Preview';

import marked from 'marked';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '__This is a markdown previewer__'
        }

        marked.setOptions({
            gfm: true,
            breaks: true
        });

        this.getUserInput = this.getUserInput.bind(this);
    }

    getUserInput(e) {
        this.setState({value: e.target.value});
    }

    getMarkdownText() {
        const markUp = marked(this.state.value);
        return {__html: markUp};
    }

    render() {
        return (
            <main className="container">
                <h1 className="head-title">Markdown Previewer</h1>
                <Markdown value={this.state.value} onChange={this.getUserInput}/>
                <Preview renderMarkdown={this.getMarkdownText()} />
            </main>
        );
    }
}