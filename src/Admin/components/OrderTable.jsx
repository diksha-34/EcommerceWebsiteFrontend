import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from "../../State/Admin/Orders/Action";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem } from "@mui/material";

const OrderTable = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event, index) => {
    const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=event.currentTarget;
    setAnchorEl(newAnchorElArray)
  };
  const handleClose = (index) => {
     const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=null;
    setAnchorEl(newAnchorElArray)
  };

  const handleShippedOrder=(orderId)=>{
    dispatch(shipOrder(orderId))
    handleClose()
  }
  const handleConfirmedOrder=(orderId)=>{
    dispatch(confirmOrder(orderId))
    handleClose()
  }
  const handleDeliveredOrder=(orderId)=>{
    dispatch(deliveredOrder(orderId))
    handleClose()
  }
  const handleDeleteOrder=(orderId)=>{
    dispatch(deleteOrder(orderId))
  }
  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrder]);

  console.log("admin orders", adminOrder);
  return (
    <div className="p-5">
      <Card className="mt-2">
        <CardHeader title="All Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.order?.map((item, index) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItems) => (
                        <Avatar src={orderItems.product.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left">
                    {item.orderItems.map((orderItems) => (
                      <p>{orderItems.product.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left"><span className={`text-white px-5 py-2 rounded-full ${item.orderStatus=="CONFIRMED"?"bg-[#1BCA9B]":item.orderStatus=="SHIPPED"?"bg-[#0ABDE3]":item.orderStatus=="PLACED"?"bg-[#758AA2]":item.orderStatus=="PENDING"?"bg-[#F5BCBA]":"bg-[#E83350]"}`}>{item.orderStatus}</span></TableCell>
                  <TableCell align="left">
                    <Button
                      id="basic-button"
                      aria-haspopup="true"
                      aria-controls={`basic-menu=${item.id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                      onClick={(event)=>handleClick(event, index)}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={()=>handleClose(index)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={()=>handleConfirmedOrder(item.id)}>Confirmed Order</MenuItem>
                      <MenuItem onClick={()=>handleShippedOrder(item.id)}>Shipped Order</MenuItem>
                      <MenuItem onClick={()=>handleDeliveredOrder(item.id)}>Deliverd Order</MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left" onClick={()=>handleDeleteOrder(item.id)}>
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrderTable;
