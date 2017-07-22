import React from 'react';
import Markdown from './Markdown';
import Preview from './Preview';

export default function Layout() {
    return (
        <main className="container">
            <h1 className="head-title">Markdown Previewer</h1>
            <Markdown />
            <Preview />
        </main>
    );
}