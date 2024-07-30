import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20 space-y-5">
      <div className="shadow-xl rounded-md border p-5">
        <h1 className="font-bold text-xl pb-5">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="shadow-xl rounded-md border p-10">
        <OrderTracker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {[1,1,1,1].map((item)=><Grid
          item
          container
          className="shadow-xl rounded-md border p-5"
          sx={{ alignItems: "center", justifyContent: " space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center">
              <img
                className="w-[7rem] h-[7rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                alt=""
              />
              <div className="ml-5 space-y-2">
                <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold"> <span>Color : Pink</span> Size : M</p>
                <p>Seller : linaria</p>
                <p>₹1044</p>

              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{color: deepPurple[500]}}>
                <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2" />
                    <span>Rate & Review Product</span>
            </Box>

          </Grid>
        </Grid>)}
      </Grid>
    </div>
  );
};

export default OrderDetails;
