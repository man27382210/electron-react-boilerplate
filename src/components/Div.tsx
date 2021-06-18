import styled from 'styled-components';

interface Props {
  display?: boolean;
}

export default styled('div')<Props>`
  height: 100vh;
  display: ${(props: Props) => {
    if (props.display === false) {
      return 'none';
    }
    return 'block';
  }};
`;

// export default styled.div`
//   height: 100vh;
// `;
