import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Header from '../components/Header'

const TemplatesPage = ({ location }) => (
  <div>
    <Helmet>
      <title>Templates &middot; HEML </title>
    </Helmet>
    <Header currentPath={location.pathname} fixed />
    <div style={{ margin: '6rem 0' }}>
      <h2
        style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '1rem' }}
      >
        Beautiful Templates
      </h2>
      <p style={{ textAlign: 'center', fontSize: '1.5em', fontWeight: '300' }}>
        Simple templates to get you started
      </p>
    </div>
    <div className="container">
      {['', '', '', '', '', ''].map(() => (
        <div className="template">
          <img src="http://placehold.it/600x300" alt="" />
          <h4>Template</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          border-top: 1px solid #f0f0f0;
          background: #f9f8f9;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          padding: 2em 2em;
        }

        .template {
          background: white;
          box-shadow: 0 2px 42px 0px rgba(109, 109, 109, 0.05);
          border: 1px solid #f0f0f0;
          border-radius: 5px;
          overflow: hidden;
          width: 30%;
          transition: all 0.25s;
          cursor: pointer;
          margin: 1em 0;
        }

        .template:hover {
          box-shadow: 0 2px 42px 0px rgba(109, 109, 109, 0.1);
        }

        .template img {
          width: 100%;
          display: block;
        }

        .template h4 {
          margin: 0;
          padding: 0.5em 0;
          text-align: center;
          font-size: 1em;
          border-top: 1px solid #f0f0f0;
        }
      `}</style>
    </div>
  </div>
)

export default TemplatesPage
