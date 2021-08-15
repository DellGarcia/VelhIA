import styled from "styled-components";

import { Victory } from '../models/Victory';

export const VictoryLine = styled.strong<Victory>`
  ::before {
    content: "";
    position: absolute;
    top: ${(props: Victory) => 
      props.type[0] !== 'H' || props.type === 'H2' ? 'calc(50% - 3.5px)' :
      props.type === 'H1' ? '15.3%' :
      '83%'
    };
    left: ${(props: Victory) => 
              props.type === 'D1' ? '-21%' :
              props.type === 'D2' ? '-21%' :
              props.type === 'V1' ? '-35%' :
              props.type === 'V3' ? '32.5%' :
              props.type === 'V2' ? '-0.8%' :
              '0'};
    border: 0;
    background: #272424;

    
    width: ${(props: Victory) => props.type[0] === 'D' ? '600px' : props.type[0] === 'V' ? '434px' : '420px'};
    height: 7px;
    
    transform: ${(props: Victory) =>
                  props.type[0] === 'H' ? 'rotate(0deg)' :
                  props.type[0] === 'V' ? 'rotate(90deg)' :
                  props.type === 'D1' ? 'rotate(46deg)' :
                  'rotate(134deg)'
                };
    z-index: 1;
  }
`