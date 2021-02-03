import React, { useCallback, useState } from 'react';
import Link from 'next/link'
import {FaInstagramSquare, FaFacebookSquare, FaLinkedin} from 'react-icons/fa';
import {MdMenu} from 'react-icons/md';

import { Container, Header, Wrapper, MenuMobile } from './styles';

interface IProps {
  instagram: string;
  facebook: string;
  linkedin: string;
}

const Layout: React.FC<IProps> = ({ children, instagram, facebook, linkedin}) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = useCallback(() => {
    setMenu((prevState) => {
      return !prevState;
    })
  }, [])

  return (
    <Container>
      <Wrapper>
        <Header>
          <div className="socialMedia">
            <Link href={instagram} passHref>
              <a>
                <FaInstagramSquare size={24} />    
              </a>
            </Link>
            <Link href={facebook} passHref>
              <a>
                <FaFacebookSquare size={24} />
              </a>
            </Link>
            <Link href={linkedin} passHref>
              <a>
                <FaLinkedin size={24} />
              </a>
            </Link>
          </div>
          <div className="menu">
            <div className="logo">
              <div className="logoImg">
                <Link href="/">HOME</Link>
              </div>
              <div className="logoMenu">
                <ul>
                  <li><Link href="/clients">JOBS</Link></li>
                  <li><Link href="/jobs">SCHOOLING</Link></li>
                  <li><Link href="/">COURSES</Link></li>
                  <li><Link href="/contact">KNOWLEDGE</Link></li>
                  <li><Link href="/contact">INTERESTS</Link></li>
                  <li><Link href="/contact">PERSONAL</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </Header>
        <MenuMobile>
          <div className="burguer" onClick={() => handleMenu()}>
            <MdMenu size={30}/>
          </div>
          { menu && (
            <ul>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/clients">JOBS</Link></li>
              <li><Link href="/jobs">SCHOOLING</Link></li>
              <li><Link href="/">COURSES</Link></li>
              <li><Link href="/contact">KNOWLEDGE</Link></li>
              <li><Link href="/contact">INTERESTS</Link></li>
              <li><Link href="/contact">PERSONAL</Link></li>
            </ul>
          )}
          
        </MenuMobile>
        <div className="main">{children}</div>
      </Wrapper>
    </Container>
  )
}

export default Layout;