/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const Container = ({ children }) => (
  <div css={styles} className="container">
    {children}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1288px) {
    max-width: 90%;
    
  }
`;

