import { Container, makeStyles, Typography } from "@material-ui/core";
import Corousal from "./Corousal";


const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: '#151515',
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
        <Container className="{classes.bannerContent">
            <div className={classes.tagline}>
            <Typography
            variant="h2"
            style={{
              color:'gold',
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}>
            CryptOOwl
          </Typography>
          <Typography
          variant="subtitle2"
          style={{
            color: "white",
            textTransform: "capitalize",
            fontFamily: "Montserrat",
          }}>
          Track Your Favorite Crypto Currency
        </Typography>
            </div>
            <br/>
            <Corousal />
        </Container>
      </div>
  )
}

export default Banner;