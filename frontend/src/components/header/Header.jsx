import React from 'react'
import * as Styles from './HeaderStyles'

const Header = () => {
  return (
    <Styles.HeaderContainer>
      <Styles.HeaderWrapper>
        <Styles.HeaderLogo>Logo</Styles.HeaderLogo>
        <Styles.HeaderButtonBox>
          <button>Sign In</button>
          <button>Sign Up</button>
        </Styles.HeaderButtonBox>
      </Styles.HeaderWrapper>
    </Styles.HeaderContainer>
  );
}

export default Header
