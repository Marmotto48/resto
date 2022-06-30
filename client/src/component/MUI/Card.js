import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const CardHP = ({ title, icon, subTitle, desc }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 300, textAlign: "center" }}>
        <CardContent>
          <Avatar
            sx={{
              height: "100px",
              width: "100px",
              backgroundColor: "#4dabf5",
              margin: "0 auto 15px auto ",
            }}
          >
            {icon}
          </Avatar>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {subTitle}
          </Typography>
          <Typography variant="subtitle1" align="left" sx={{ lineHeight: "2" }}>
            {desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardHP;
