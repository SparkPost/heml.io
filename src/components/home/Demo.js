import React from 'react'
import Button from '../Button'
import Editor from '../Editor'

export default ({ code }) => (
  <div className="emailClient">
    <div className="emailClient__bar">welcome.heml</div>
    <div className="emailClient__content">
      <Editor
        value={code}
        mode="xml"
        theme="github"
        width="100%"
        height="auto"
        setOptions={{
          enableEmmet: true,
          useSoftTabs: true,
          tabSize: 2,
          maxLines: 20,
        }}
        onChange={html => localStorage.setItem('homeEditor', html)}
      />
      <Button to="/editor#homeEditor" className="emailClient__button">
        Preview
      </Button>
    </div>
    <style jsx>{`
      .emailClient {
        max-width: 700px;
        margin: 0em auto 4em;
        min-height: 100px;
        border: 1px solid #f0f0f0;
        border-radius: 5px;
        box-shadow: 0 1px 20px 0px rgba(66, 66, 66, 0.13);
        box-shadow: 0 2px 42px 0px rgba(30, 112, 167, 0.39);
        background: white;
      }

      .emailClient__bar:before {
        content: ' ';
        position: absolute;
        top: 50%;
        left: 40px;
        height: 12px;
        width: 12px;
        display: block;
        border-radius: 50%;
        transform: translateY(-50%);
        background: #febd31;
        box-shadow: 20px 0px 0px 0px #30c240, -20px 0px 0px 0px #fb6056;
      }

      .emailClient__bar {
        background: #f9f9f9;
        border-bottom: 1px solid #ebebeb;
        height: 40px;
        line-height: 40px;
        color: rgba(0, 0, 0, 0.8);
        font-size: 0.8em;
        text-align: center;
      }

      .emailClient__content {
        white-space: pre-wrap;
      }

      .emailClient__content .ace-github .ace_gutter {
        background: #f9f9f9;
      }

      .emailClient__content .ace-github .ace_active-line,
      .ace-github .ace_gutter-active-line {
        background: transparent !important;
      }

      :global(.emailClient__button) {
        position: absolute;
        bottom: 1em;
        right: 2em;
        z-index: 44;
        margin-top: 1em;
        box-shadow: 0 2px 5px 0px rgba(43, 63, 76, 0.18);
        border: 1px solid #eeeeee;
      }

      :global(.emailClient__button:hover) {
        box-shadow: 0 3px 7px 0px rgba(43, 63, 76, 0.2);
      }
    `}</style>
  </div>
)
