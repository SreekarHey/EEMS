import {
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink
} from 'carbon-components-react/lib/components/UIShell';
import { DataTableSkeleton } from 'carbon-components-react';
import styled from 'styled-components';
import './Datatable.scss';
import { Checkbox } from 'carbon-components-react';
import { Button1 } from './Button1';
import { Route, Link, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const Styledeader = styled.h2`
  margin-left: 8px;
`;
const Fade16 = () => <Checkbox labelText="" id="checked" />;

function DataTable1() {
  return (
    <div style={{ width: '100%', marginLeft: '300px', marginTop: '55px', padding: '30px' }}>
      <>
        <Styledeader>TimeSheet Management System</Styledeader>
      </>

      <DataTableSkeleton columnCount={4} rowCount={8}></DataTableSkeleton>

      <SideNav aria-label="Side navigation" className="bx--side-nav1">
        <SideNavItems className="bx--side-nav__items">
          <SideNavMenu renderIcon={Fade16} title="Add new">
            <SideNavMenuItem>Weekly Entry</SideNavMenuItem>
            <SideNavMenuItem>Day Entry</SideNavMenuItem>
          </SideNavMenu>
          <SideNavLink renderIcon={Fade16}>Report</SideNavLink>
          <SideNavLink renderIcon={Fade16}>Review</SideNavLink>
        </SideNavItems>
      </SideNav>
      <Link to="/">
        <Button1
          icon={
            <FontAwesomeIcon style={{ fontSize: '30px' }} icon={faHome} size="2x"></FontAwesomeIcon>
          }></Button1>
      </Link>
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </div>
  );
}
export default DataTable1;
