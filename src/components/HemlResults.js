import React, { Component } from 'react'
import styled from 'styled-components'


const Iframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
  display: ${props => props.show ? 'block' : 'none'}`

const Pre = styled.pre`
  width: 100%;
  height: 100%;
  overflow: scroll;
  margin: 0;
  display: ${props => props.show ? 'block' : 'none'}`

export default (props) =>(
  <div>
    <Iframe
      src={`data:text/html;charset=utf-8,${encodeURI(props.html)}`}
      show={props.tab == 'preview'}
    />
    <Pre
      id="html"
      show={props.tab == 'code'}
    >
      {props.html}
    </Pre>
  </div>
)

// export default class HemlResults extends Component {
//   render() {
//     return (
//       <div>
//         <Iframe
//           src={`data:text/html;charset=utf-8,${encodeURI(this.props.html)}`}
//           show={this.props.tab == 'preview'}
//         />
//         <Pre
//           id="html"
//           show={this.props.tab == 'code'}
//         >
//           {this.props.html}
//         </Pre>
//       </div>
//     )
//   }
// }
