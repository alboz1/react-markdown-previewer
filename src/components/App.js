import React from 'react';
import Markdown from './Markdown';
import Preview from './Preview';
import Header from './Header';
import marked from 'marked';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '__This is a markdown previewer__',
            column: false
        }

        marked.setOptions({
            gfm: true,
            breaks: true,
            sanitize: true
        });

        this.getUserInput = this.getUserInput.bind(this);
        this.changeLayout = this.changeLayout.bind(this);
    }

    getUserInput(e) {
        this.setState({value: e.target.value});
    }

    getMarkdownText() {
        const markUp = marked(this.state.value);
        return {__html: markUp};
    }

    changeLayout(e) {
        if (e.currentTarget.id === 'col') {
            this.setState({column: true});
        } else {
            this.setState({column: false});
        }
    }

    render() {
        return (
            <div className="container">
                <Header active={this.state.column} onClick={this.changeLayout}/>
                <main className={this.state.column ? "col" : ""}>
                    <Markdown value={this.state.value} onChange={this.getUserInput}/>
                    <Preview renderMarkdown={this.getMarkdownText()} />
                </main>
            </div>
        );
    }
}