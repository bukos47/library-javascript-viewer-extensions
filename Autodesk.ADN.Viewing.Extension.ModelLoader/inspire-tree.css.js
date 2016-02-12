
var inspireTreeCss = `

/*!
 * Inspire Tree v1.2.5
 * https://github.com/helion3/inspire-tree
 * 
 * Copyright 2015 Helion3, and other contributors
 * Licensed under MIT. https://github.com/helion3/inspire-tree/blob/master/LICENSE
 */
/* ~~@@@~~~~~ Context Menu ~~~~~@@@~~ */
.itree-menu {
    background: #ddd;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    font-family: sans-serif;
    list-style: none;
    margin: 0;
    min-width: 150px;
    padding: 0;
    position: absolute;
    z-index: 10; }
.itree-menu a {
    display: block;
    padding: 3px 8px; }

.itree-menu a:hover {
    background: #dafaff;
    color: #a4eaf5;
}

.inspire-tree {
    /* ~~@@@~~~~~ Lists ~~~~~@@@~~ */
    /* ~~@@@~~~~~ Node Content ~~~~~@@@~~ */ }
.inspire-tree:focus {
    outline: none; }
.inspire-tree ol {
    list-style: none;
    margin: 0;
    padding: 0; }
.inspire-tree ol ol {
    margin-left: 20px; }
.inspire-tree .collapsed > ol, .inspire-tree .hidden {
    display: none; }
.inspire-tree a {
    cursor: default;
    display: block;
    height: 100%;
    line-height: 25px; }
.inspire-tree li > .title-wrap {
    position: relative;
    z-index: 2; }
.inspire-tree .toggle {
    height: 25px;
    left: 0;
    position: absolute;
    top: 0;
    width: 25px;
    z-index: 2; }
.inspire-tree .toggle:before {
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); }
.inspire-tree [type="checkbox"] {
    left: 18px;
    position: absolute;
    top: 4px;
    vertical-align: middle;
    width: 20px;
    z-index: 2; }
.inspire-tree .title {
    overflow: hidden;
    padding-left: 30px;
    position: relative;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;
    z-index: 1; }
.inspire-tree .title:before {
    left: -6px;
    position: relative;
    top: -2px;
    vertical-align: middle; }

.inspire-tree {
    /* ~~@@@~~~~~ Drag/Drop ~~~~~@@@~~ */ }
.inspire-tree .dragging {
    position: fixed;
    z-index: 5000; }
.inspire-tree.drop-target {
    border: 1px solid #2dadc5; }

.inspire-tree .icon:before {
    background-position: 0 0;
    background-repeat: no-repeat;
    content: '';
    display: inline-block;
    height: 14px;
    width: 14px; }

.inspire-tree .selected > .title-wrap .icon-folder:before {
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%232dadc5%22%20d%3D%22M14%204l4%204h14v22h-32v-26z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"); }

.inspire-tree .selected > .title-wrap .icon-file-empty:before {
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%232dadc5%22%20d%3D%22M28.681%207.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-15.5c-1.378%200-2.5%201.121-2.5%202.5v27c0%201.378%201.122%202.5%202.5%202.5h23c1.378%200%202.5-1.122%202.5-2.5v-19.5c0-0.448-0.137-1.23-1.319-2.841zM24.543%205.457c0.959%200.959%201.712%201.825%202.268%202.543h-4.811v-4.811c0.718%200.556%201.584%201.309%202.543%202.268zM28%2029.5c0%200.271-0.229%200.5-0.5%200.5h-23c-0.271%200-0.5-0.229-0.5-0.5v-27c0-0.271%200.229-0.5%200.5-0.5%200%200%2015.499-0%2015.5%200v7c0%200.552%200.448%201%201%201h7v19.5z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"); }

.inspire-tree .icon-folder:before {
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%23ccc%22%20d%3D%22M14%204l4%204h14v22h-32v-26z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"); }

.inspire-tree .icon-caret:before, .inspire-tree .icon-caret-down:before {
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%23222%22%20d%3D%22M6%204l20%2012-20%2012z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"); }

.inspire-tree .icon-caret-down:before {
    -webkit-transform: translate(-50%, -50%) rotate(90deg);
    -ms-transform: translate(-50%, -50%) rotate(90deg);
    transform: translate(-50%, -50%) rotate(90deg); }

.inspire-tree .icon-file-empty:before {
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%23ccc%22%20d%3D%22M28.681%207.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-15.5c-1.378%200-2.5%201.121-2.5%202.5v27c0%201.378%201.122%202.5%202.5%202.5h23c1.378%200%202.5-1.122%202.5-2.5v-19.5c0-0.448-0.137-1.23-1.319-2.841zM24.543%205.457c0.959%200.959%201.712%201.825%202.268%202.543h-4.811v-4.811c0.718%200.556%201.584%201.309%202.543%202.268zM28%2029.5c0%200.271-0.229%200.5-0.5%200.5h-23c-0.271%200-0.5-0.229-0.5-0.5v-27c0-0.271%200.229-0.5%200.5-0.5%200%200%2015.499-0%2015.5%200v7c0%200.552%200.448%201%201%201h7v19.5z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"); }

.inspire-tree .loading > .title-wrap .title:before {
    background: url(863c5a2796b088dea28a1f75a0973372.gif) 0 0 no-repeat;
    content: '';
    height: 14px;
    width: 14px; }

.inspire-tree > ol {
    position: relative; }

.inspire-tree .wholerow {
    height: 25px;
    left: 0;
    position: absolute;
    -webkit-transform: translate(0, -100%);
    -ms-transform: translate(0, -100%);
    transform: translate(0, -100%);
    width: 100%;
    z-index: 1; }

.inspire-tree .focused:not(.selected) > .wholerow,
.inspire-tree .title-wrap:hover + .wholerow {
    background: #dafaff; }

.inspire-tree .selected > .wholerow,
.inspire-tree .selected > .title-wrap:hover + .wholerow {
    background: #a4eaf5; }
`;

$('<style type="text/css">' + inspireTreeCss + '</style>').appendTo('head');