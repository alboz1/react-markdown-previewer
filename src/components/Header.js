import React from 'react';

const Header = (props) => {
    return (
        <header className="site-header">
            <h1 className="head-title">Markdown Previewer</h1>
            <div className="icon-wrapper">
                <span>Change Layout:</span>
                <button id="col" className={props.active ? "active" : ""} onClick={props.onClick}>
                    <svg className="col-icon" width="45" height="30" viewBox="0 0 45 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Canvas" transform="translate(12 199)"><g id="Vector"><mask id="mask0_outline_ins"><use xlinkHref="#path0_fill" fill="white" transform="translate(-12 -199)"/></mask><g mask="url(#mask0_outline_ins)"><use xlinkHref="#path1_stroke_2x" transform="translate(-12 -199)" fill="#6F6F6F"/></g></g></g><defs><path id="path0_fill" d="M 0 0L 45 0L 45 30L 0 30L 0 0Z"/><path id="path1_stroke_2x" d="M 21.9758 0.666664L 21.9758 30L 24.4758 30L 24.4758 0.666664L 21.9758 0.666664ZM 0 0L 0 -2.5L -2.5 -2.5L -2.5 0L 0 0ZM 45 0L 47.5 0L 47.5 -2.5L 45 -2.5L 45 0ZM 45 30L 45 32.5L 47.5 32.5L 47.5 30L 45 30ZM 0 30L -2.5 30L -2.5 32.5L 0 32.5L 0 30ZM 0 2.5L 45 2.5L 45 -2.5L 0 -2.5L 0 2.5ZM 42.5 0L 42.5 30L 47.5 30L 47.5 0L 42.5 0ZM 45 27.5L 0 27.5L 0 32.5L 45 32.5L 45 27.5ZM 2.5 30L 2.5 0L -2.5 0L -2.5 30L 2.5 30Z"/></defs></svg>
                </button>
                <button className={props.active ? "" : "active"} onClick={props.onClick}>
                    <svg className="row-icon" width="45" height="30" viewBox="0 0 45 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(435 47)"><g><mask id="b"><use xlinkHref="#a" fill="white" transform="rotate(180 -195 -8.5)"/></mask><g mask="url(#b)"><use xlinkHref="#c" transform="rotate(180 -195 -8.5)" fill="#6F6F6F"/></g></g></g><defs><path id="a" d="M 0 0L 45 0L 45 30L 0 30L 0 0Z"/><path id="c" d="M 0 16.25L 45 16.25L 45 13.75L 0 13.75L 0 16.25ZM 0 0L 0 -2.5L -2.5 -2.5L -2.5 0L 0 0ZM 45 0L 47.5 0L 47.5 -2.5L 45 -2.5L 45 0ZM 45 30L 45 32.5L 47.5 32.5L 47.5 30L 45 30ZM 0 30L -2.5 30L -2.5 32.5L 0 32.5L 0 30ZM 0 2.5L 45 2.5L 45 -2.5L 0 -2.5L 0 2.5ZM 42.5 0L 42.5 30L 47.5 30L 47.5 0L 42.5 0ZM 45 27.5L 0 27.5L 0 32.5L 45 32.5L 45 27.5ZM 2.5 30L 2.5 0L -2.5 0L -2.5 30L 2.5 30Z"/></defs></svg>
                </button>
            </div>
        </header>
    );
}

export default Header;