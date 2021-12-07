import HeaderContainer from 'carbon-components-react/lib/components/UIShell/HeaderContainer';
import './app.scss';
import {
  Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem
} from 'carbon-components-react/lib/components/UIShell';
import { Button1 } from '../Button1';
import styled from 'styled-components';
import { Route, Link, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faChartBar, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import DataTable1 from '../DataTable';

const Styledheader = styled.h2`
fontWeight: 900px,
margin: 30px,
fontSize: 20px,
margin-left: -200px;
`;

const StoryContent = () => {
  const content = (
    <div className="bx--grid">
      <div className="bx--row">
        <section className="bx--offset-lg-3 bx--col-lg-13">
          <div style={{ marginLeft: '-201px' }}>
            <Styledheader>TimeSheet Management System</Styledheader>
          </div>
          <br />
          <p style={{ lineHeight: '28px', marginLeft: '-201px' }}>
            The shell is perhaps the most crucial piece of any UI built with Carbon. It contains the
            shared navigation framework for the entire design system and ties the products in IBM’s
            portfolio together in a cohesive and elegant way. The shell is the home of the topmost
            navigation, where users can quickly and dependably gain their bearings and move between
            pages.
            <br />
            <br />
            <br />
          </p>
        </section>

        <div style={{ display: 'flex', marginLeft: '150px' }}>
          <Link to="/home">
            <Button1
              icon={
                <FontAwesomeIcon
                  style={{ margin: '8px', marginRight: '23px' }}
                  icon={faPlusCircle}
                  size="2x"></FontAwesomeIcon>
              }
              title="ADD NEW"></Button1>
          </Link>
          <Link to="/home">
            <Button1
              icon={
                <FontAwesomeIcon
                  style={{ margin: '8px', marginRight: '23px' }}
                  icon={faChartBar}
                  size="2x"></FontAwesomeIcon>
              }
              title="REPORTS"></Button1>
          </Link>
          <Link to="/home">
            <Button1
              icon={
                <FontAwesomeIcon
                  style={{ margin: '8px', marginRight: '23px' }}
                  icon={faFileAlt}
                  size="2x"></FontAwesomeIcon>
              }
              title="REVIEWS"></Button1>
          </Link>
        </div>
      </div>
    </div>
  );

  return <Content id="main-content">{content}</Content>;
};

const Fade16 = () => (
  <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
);

export const Header1 = () => (
  <div className="container">
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="IBM Platform Name">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="ESTUATE EMPLOYEE MANAGEMENT SYSTEM">
              [EEMS]
            </HeaderName>
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                <p style={{ color: 'white' }}>Inc</p>
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
              <div
                style={{ height: '15vh', marginTop: '10px', marginLeft: '10px', display: 'flex' }}>
                <img
                  alt="sreekar"
                  src="https://cdn.3dnames.co/previews/fr01/250x250/s/fr01srikar3dxx.jpg"
                  style={{
                    borderRadius: '100%',
                    height: '80px',
                    width: '80px',
                    marginTop: '10px'
                  }}></img>
                <p style={{ marginTop: '29px', margin: '30px' }}>
                  SREEKAR
                  <br />
                  EST-5597
                </p>
              </div>
              <SideNavItems className="bx--side-nav__items">
                <SideNavMenu renderIcon={Fade16} title="Time Sheet">
                  <SideNavMenuItem>Weekly</SideNavMenuItem>

                  <SideNavMenuItem>Daily</SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu renderIcon={Fade16} title="Experience">
                  <SideNavMenuItem>Year</SideNavMenuItem>
                </SideNavMenu>
              </SideNavItems>
            </SideNav>
          </Header>
          <Styledheader />
          <Routes>
            <Route path="/" element={<StoryContent />}></Route>
            <Route path="/home" element={<DataTable1 />}></Route>
          </Routes>
        </>
      )}
    />
  </div>
);
