import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink,
SidebarRoute, SideBtnWrap } from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarMenu>
            <SidebarLink to="/">Products</SidebarLink>
            <SidebarLink to="/">About Me</SidebarLink>
            <SidebarLink to="/">Contact Me</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/">Place Order</SidebarRoute>
        </SideBtnWrap>

    </SidebarContainer>
  )
}

export default Sidebar;