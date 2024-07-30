import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" guttterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttterBottom>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttterBottom>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
           Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" guttterBottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttterBottom>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttterBottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttterBottom>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttterBottom>
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentations
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" guttterBottom>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttterBottom>
              API status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" guttterBottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttterBottom>
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
           &copy; 2024 My company. All rights reserved.
          </Typography>

        </Grid>
      </Grid>

    </div>
  );
};

export default Footer;
