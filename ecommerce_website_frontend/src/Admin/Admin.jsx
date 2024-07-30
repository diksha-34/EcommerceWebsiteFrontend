import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PeopleIcon from '@mui/icons-material/People';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import AddCardIcon from '@mui/icons-material/AddCard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from './components/Dashboard';
import CreateProductForm from './components/CreateProductForm';
import ProductTable from './components/ProductTable';
import OrderTable from './components/OrderTable';
const menu=[
    {name:"Dashboard", path:"/admin", icon:<DashboardIcon/>},
    {name:"Products", path:"/admin/products", icon:<ProductionQuantityLimitsIcon/>},
    {name:"Orders", path:"/admin/orders", icon:<AutoFixNormalIcon/>},
    {name:"AddProducts", path:"/admin/product/create", icon:<AddCardIcon/>},
    {name:"", path:""}
]
const Admin = () => {
    const theme =useTheme();
    const isLargeScreen=useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible]=useState(false);
    const navigate=useNavigate();

    const drawer=(
        <Box
        sx={{
            overflow:"auto",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            height:"100%"
        }}
        >
            <List>
                {menu.map((item, index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText>{item.name}</ListItemText>
                    </ListItemButton>
                </ListItem>)}
            </List>
            
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                     <ListItemText>Account</ListItemText>
                  </ListItemButton>
                </ListItem>
            </List>
            
        </Box>
    )
    return (
        <div className='relative flex h-[100vh]'>
            <div  className='w-[15%] h-full shadow-lg shadow-gray-600 fixed top-0'>
                {drawer}
            </div>
            <div className='w-[85%] h-full ml-[15%]'>
                <Routes>
                    <Route path='/' element={<Dashboard/>}></Route>
                    <Route path='/product/create' element={<CreateProductForm/>}></Route>
                    <Route path='/products' element={<ProductTable/>}></Route>
                    <Route path='/orders' element={<OrderTable/>}></Route>
                </Routes>
            </div>
      
        </div>
    )
}

export default Admin
