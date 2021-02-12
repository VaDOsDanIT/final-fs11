import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Container } from "@material-ui/core";
import { Information } from "./index";
import { ClientHouses } from "../ClientHouses";
import { tileData } from "../../../../utils/constants/housesView";
import { House } from "../ClientHouses/House";
import { Documents } from "../Documents";
import { MyContracts } from "../Documents/MyContracts";
import ClientStatisticRent from "../../../ClientStatisticRent";

const useStyles = makeStyles(() => ({
  root: {
    // borderLeft: '1px solid black',
    width: "100vh",
    marginLeft: '3px',
    display: "flex",
    margin: "2px",
    flexDirection: 'row',
    textTransform: 'capitalize',
  },
  br: {
    textTransform: 'capitalize',
    padding: 0,
    margin: 0,
    backgroundColor: "white",
    color: 'black',
    borderRadius: "0px 30px 0px 0px  ",
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  user: {
    backgroundColor: "white",
    minHeight: '268px',
    maxHeight: '268px',
    minWidth: "268px",
    maxWidth: "268px",
    border: '2px solid black'
  },
  columnStart: {
    width: '100%',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "white",
    borderRadius: "0px 30px 30px 0px  ",
  },
  columnProfile: {
    margin: 0,
    padding: 0
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      className={classes.tab}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          p={3}>
          <Container>{children}</Container>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {

  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function ClientTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [HouseIdx,] = useState(tileData);
  const [house, setHouse] = useState(tileData[0]);
  const [bottomView, setHousesDescription] = useState(null);

  function houseToState(e) {
    setHouse(HouseIdx[e]);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setHousesDescription(newValue);
  };

  return (
    <>
      <div className={classes.columnStart}>
        <div className={classes.root}>
          <div className={classes.user}>
            Tartakovsky Component
          </div>
          <Container
            className={classes.columnProfile}>
            <div className={classes.br}>
              <Tabs
                value={value}
                onChange={handleChange}
              >
                <Tab label="Iнформацiя" {...a11yProps(0)} />
                <Tab label="Будинки" {...a11yProps(1)} />
                <Tab label="Документи" {...a11yProps(2)} />
                <Tab label="Оренда" {...a11yProps(3)} />
              </Tabs>
            </div>
            <TabPanel
              value={value} index={0}>
              <Information/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ClientHouses
                houseToState={houseToState}
                HouseIdx={HouseIdx}
                rent={false}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Documents/>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <ClientHouses
                houseToState={houseToState}
                HouseIdx={HouseIdx}
                buttonSend={true}
                rent={true}
              />
            </TabPanel>
          </Container>

        </div>
        <div>
          {bottomView === 1 ? <House house={house}/> : null}
          <div style={{ width: '100%' }}>
            {bottomView === 2 ? <MyContracts/> : null}
          </div>
          {bottomView === 3 ?
            <div style={{ width: '100vh' }}>
              <ClientStatisticRent/>
            </div> : null}
        </div>

      </div>
    </>
  );
}
