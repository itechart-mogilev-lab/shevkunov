import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import { red } from "@material-ui/core/colors";
import MenuItem from "@material-ui/core/MenuItem";
import { Field, FieldArray } from "formik";
import { TextField } from "formik-material-ui";
import { selectService } from "../../../../helpers/enum";

const styles = theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  grid: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%"
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  error: {
    color: red
  },
  services: {
    display: "flex",
    flexDirection: "column"
  },
  formControl: {
    width: "180px",
    marginRight: "20px"
  },
  smallBtn: {
    width: "100px",
    margin: "auto"
  },
  formTitle: {
    marginBottom: 0,
    marginLeft: "40px"
  }
});

function selectItem(options) {
  return options.map(option => (
    <MenuItem key={option.value} value={option.value}>
      {option.name}
    </MenuItem>
  ));
}

export const MyForm = props => {
  const services = selectService;
  const { classes } = props;
  return (
    <FieldArray
      name="services"
      render={arrayHelpers => (
        <div className={classes.services}>
          {props.values.services.map((service, index) => (
            <div className={classes.grid} key={index}>
              {/* Edit the value here */}
              <Field
                type="text"
                name={`services.${index}.name`}
                label="Add service"
                select
                margin="normal"
                component={TextField}
                className={classes.formControl}
                //   InputLabelProps={{
                //     shrink: true
                //   }}
              >
                {selectItem(services)}
              </Field>
              <FormControl
                margin="normal"
                required
                className={classes.formControl}
              >
                <InputLabel htmlFor={`services.${index}.coefficient`}>
                  Price
                </InputLabel>
                <Input
                  name={`services.${index}.coefficient`}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={service.coefficient}
                  error={
                    props.touched.coefficient &&
                    Boolean(props.errors.coefficient)
                  }
                />
              </FormControl>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={() => arrayHelpers.remove(index)}
                className={classes.smallBtn}
              >
                Remove
              </Button>
              {/* Remove this vehicle */}
            </div>
          ))}

          {/* Add a new empty vehicle at the end of the list */}
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => arrayHelpers.push({ name: "", coefficient: "" })}
            fullWidth
          >
            Add Service
          </Button>
        </div>
      )}
    />
  );
};

function EditCompanyForm(props) {
  const {
    classes,
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  function isAdressError(value) {
    const address = touched.address;
    const addressError = errors.address;
    return (
      address &&
      address[value] &&
      Boolean(addressError) &&
      Boolean(addressError[value])
    );
  }
  function isRoomError(roomName, value) {
    const room = touched[roomName];
    const roomError = errors[roomName];
    return (
      room && room[value] && Boolean(roomError) && Boolean(roomError[value])
    );
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.grid}>
        <FormControl margin="normal" required>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            fullWidth
            error={touched.name && Boolean(errors.name)}
          />
        </FormControl>
        <FormControl margin="normal">
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
          />
        </FormControl>
      </div>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="description">Description</InputLabel>
        <Input
          name="description"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.description}
          error={touched.description && Boolean(errors.description)}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="address.city">City</InputLabel>
        <Input
          name="address.city"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.address.city}
          error={isAdressError("city")}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="address.country">Country</InputLabel>
        <Input
          name="address.country"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.address.country}
          error={isAdressError("country")}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="address.other">Other</InputLabel>
        <Input
          name="address.other"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.address.other}
          error={isAdressError("other")}
        />
      </FormControl>
      <p className={classes.formTitle}>Rooms</p>
      <p className={classes.formTitle}>Toilet</p>
      <div className={classes.grid}>
        <FormControl margin="normal" required>
          <InputLabel htmlFor="rooms.toilet.price">Toilet price</InputLabel>
          <Input
            name="rooms.toilet.price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rooms.toilet.price}
            error={isRoomError("toilet", "price")}
          />
        </FormControl>
        <FormControl margin="normal" required>
          <InputLabel htmlFor="rooms.toilet.time">Toilet time</InputLabel>
          <Input
            name="rooms.toilet.time"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rooms.toilet.time}
            error={isRoomError("toilet", "time")}
          />
        </FormControl>
      </div>
      <p className={classes.formTitle}>Standart room</p>
      <div className={classes.grid}>
        <FormControl margin="normal" required>
          <InputLabel htmlFor="rooms.standart.price">Standart price</InputLabel>
          <Input
            name="rooms.standart.price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rooms.standart.price}
            error={isRoomError("standart", "price")}
          />
        </FormControl>
        <FormControl margin="normal" required>
          <InputLabel htmlFor="rooms.standart.time">Standart time</InputLabel>
          <Input
            name="rooms.standart.time"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rooms.standart.time}
            error={isRoomError("standart", "time")}
          />
        </FormControl>
      </div>
      <p className={classes.formTitle}>Big room</p>
      <div className={classes.grid}>
        <FormControl margin="normal" required>
          <InputLabel htmlFor="rooms.big.price">Big price</InputLabel>
          <Input
            name="rooms.big.price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rooms.big.price}
            error={isRoomError("big", "price")}
          />
        </FormControl>
        <FormControl margin="normal" required>
          <InputLabel htmlFor="rooms.big.time">Big time</InputLabel>
          <Input
            name="rooms.big.time"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rooms.big.time}
            error={isRoomError("big", "time")}
          />
        </FormControl>
      </div>
      <MyForm {...props} />

      <Button
        type="submit"
        onClick={handleSubmit}
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Save
      </Button>
    </form>
  );
}

EditCompanyForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditCompanyForm);
