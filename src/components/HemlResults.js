import React, { Component } from 'react'
import styled from 'styled-components'

const Iframe = styled.div`
  border: 0;
  width: 100%;
  height: ${props => props.height};
  display: ${props => (props.show ? 'block' : 'none')};
`

const Pre = styled.pre`
  width: 100%;
  height: ${props => props.height};
  overflow: scroll;
  word-break: normal;
  margin: 0;
  display: ${props => (props.show ? 'block' : 'none')};
`

export default props => (
  <div>
    <Iframe
      show={props.tab == 'preview'}
      height={props.height}
      dangerouslySetInnerHTML={{
        __html: `<iframe src=${`data:text/html;charset=utf-8,${encodeURI(
          props.html
        )}`} style="height:100%; width:100%; border: 0;"></iframe>`,
      }}
    />
    <Pre id="html" show={props.tab == 'code'} height={props.height}>
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
