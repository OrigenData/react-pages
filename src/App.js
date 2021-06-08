import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import TelegramIcon from '@material-ui/icons/Telegram';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#424242',
  },
  section: {
    marginTop: 20,
  }
}));

export default function App() {
  const classes = useStyles();
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: 'dark',
        },
      }),
  );

  return (

    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container maxWidth="sm">

          <div className={classes.section}>
            <Typography variant="h5" gutterBottom>
              Negocios
      </Typography>


            <List className={classes.root}>
              <ListItem button component="a" href="https://esserdi.com">
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Esserdi" secondary="Soluciones web para Pymes brindando todo el beneficio a tu negocio para que crezca de manera digital" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem button component="a" href="https://cuetepinbaby.shop">
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Cuetepin Baby Shop" secondary="Mayorista en línea de venta de artículos de bebé" />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </div>


          <div className={classes.section}>
          <Typography variant="h5" gutterBottom>
            Contacto
      </Typography>

          <List className={classes.root}>
            <ListItem button component="a" href="https://t.me/CristianEscDev">
              <ListItemAvatar>
                <Avatar>
                  <TelegramIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Telegram" secondary="@CristianEscDev" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <AlternateEmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Email" secondary="contacto@esserdi.com" />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>

</div>

        </Container>
      </ThemeProvider>
    </div>
  );
}
