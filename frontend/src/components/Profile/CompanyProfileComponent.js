import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    width: "100%",
    minHeight: 520
  }
};

class ProfilePageComponent extends Component {
  render() {
    // const {role} = this.props;
    // if(role === "customer"){

    // } else if(role === "executor"){

    // }
    const { classes, company } = this.props;
    const {
      name,
      description,
      email,
      address,
      services,
      rooms,
      rating
    } = company;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <Grid container alignItems="flex-start">
            <Grid item xs>
              <Typography gutterBottom variant="h5">
                {name}
              </Typography>
            </Grid>
          </Grid>

          <CardContent>
            <p>Description: {description}</p>
            <p>Email: {email}</p>
            <p>
              Address: {address.country} {address.city} {address.other}
            </p>
            <div>
              <Typography gutterBottom variant="h5">
                Rooms prices
              </Typography>
              <Table>
                <TableHead>
                  <TableRow key={14}>
                    <TableCell align="left" />
                    <TableCell align="left">Toilet</TableCell>
                    <TableCell align="left">Standart</TableCell>
                    <TableCell align="left">Big</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow key={13}>
                    <TableCell>Price</TableCell>
                    <TableCell align="left">{rooms.toilet.price}</TableCell>
                    <TableCell align="left">{rooms.standart.price}</TableCell>
                    <TableCell align="left">{rooms.big.price}</TableCell>
                  </TableRow>
                  <TableRow key={23}>
                    <TableCell>Time</TableCell>
                    <TableCell align="left">{rooms.toilet.time}</TableCell>
                    <TableCell align="left">{rooms.standart.time}</TableCell>
                    <TableCell align="left">{rooms.big.time}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div>
              <Typography gutterBottom variant="h5">
                Services
              </Typography>
              <Table>
                <TableHead>
                  <TableRow key={24}>
                    <TableCell align="left">Name of service</TableCell>
                    <TableCell align="left">Coefficient</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {services.map(service => (
                    <TableRow key={service._id}>
                      <TableCell>{service.name}</TableCell>
                      <TableCell>{service.coefficient}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p>Rating: {rating}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

ProfilePageComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfilePageComponent);
