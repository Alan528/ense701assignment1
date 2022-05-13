import React, { PureComponent } from 'react';
import
{
  HeaderWrapper, Navbar, NavItem, Title,
} from './style';

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Title>Assessment 1B</Title>
        <Navbar>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/SearchArticle">Search Article</NavItem>
          <NavItem href="/SubmitArticle">Submit Article</NavItem>
        </Navbar>
      </HeaderWrapper>
    );
  }
}

export default Header;