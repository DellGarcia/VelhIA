import styled from "styled-components";

interface VictoryLineProps {
  type: string;
}

export const VictoryLine = styled.strong<VictoryLineProps>`
  ::before {
    content: "";
    position: absolute;
    top: ${(victory: VictoryLineProps) => 
      victory.type[0] !== 'H' || victory.type === 'H2' ? 'calc(50% - 3.5px)' :
      victory.type === 'H1' ? '29.0%' :
      '70.2%'
    };
    left: ${(victory: VictoryLineProps) => 
              victory.type === 'D1' ? '-21%' :
              victory.type === 'D2' ? '-21%' :
              victory.type === 'V1' ? '-35%' :
              victory.type === 'V3' ? '32.5%' :
              victory.type === 'V2' ? '-0.8%' :
              '0'};
    border: 0;
    background: #272424;

    
    width: ${(victory: VictoryLineProps) => victory.type[0] === 'D' ? '600px' : victory.type[0] === 'V' ? '434px' : '420px'};
    height: 7px;
    
    transform: ${(victory: VictoryLineProps) =>
                  victory.type[0] === 'H' ? 'rotate(0deg)' :
                  victory.type[0] === 'V' ? 'rotate(90deg)' :
                  victory.type === 'D1' ? 'rotate(46deg)' :
                  'rotate(134deg)'
                };
    z-index: 1;
  }
`
