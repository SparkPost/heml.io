import React, { Component } from 'react'
import styled from 'styled-components'

const Iframe = styled.div`
  border: 0;
  width: 100%;
  height: ${props => props.height};
  display: ${props => (props.show ? 'block' : 'none')};
`

const Textarea = styled.textarea`
  width: 100%;
  height: ${props => props.height};
  overflow: scroll;
  margin: 0;
  border: 0;
  font: inherit;
  padding: 10px;
  background: #FBFCFE;
  font-family: ${props => props.theme.monospace};
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
    <Textarea disabled wrap='off' id="html" show={props.tab == 'code'} height={props.height} value={props.html} />
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
