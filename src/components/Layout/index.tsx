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
                  <li><Link href="/jobs">EMPREGOS</Link></li>
                  <li><Link href="/schooling">ESCOLARIDADE</Link></li>
                  <li><Link href="/courses">CURSOS</Link></li>
                  <li><Link href="/knowledge">CONHECIMENTO</Link></li>
                  <li><Link href="/interests">INTERESSES</Link></li>
                  <li><Link href="/personal">PESSOAL</Link></li>
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
              <li><Link href="/jobs">EMPREGOS</Link></li>
              <li><Link href="/schooling">ESCOLARIDADE</Link></li>
              <li><Link href="/courses">CURSOS</Link></li>
              <li><Link href="/knowledge">CONHECIMENTO</Link></li>
              <li><Link href="/interests">INTERESSES</Link></li>
              <li><Link href="/personal">PESSOAL</Link></li>
            </ul>
          )}
          
        </MenuMobile>
        <div className="main">{children}</div>
      </Wrapper>
    </Container>
  )
}

export default Layout;