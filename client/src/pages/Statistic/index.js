import React, { useState } from 'react';
import Container from "../../components/Container";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import ClientStatisticRent from '../../components/ClientStatisticRent/clientStatistic/index';
import PanelClientMediumCard from '../../components/PanelClientMediumCard/index';
import Grid from "@material-ui/core/Grid";
import Pagination from '@material-ui/lab/Pagination';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles({
  indicator: {
    backgroundColor: '#254A93',
  },
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    textTransform:"none",
    marginTop:"20px",
    padding: "0px",
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color:"#254A93",
      textTransform:"none",
    },
    "& .MuiTab-root": {
      color:"#254A93",
      textTransform:"none",
    },
    "& .MuiAppBar-colorDefault": {
      backgroundColor: "transparent",
      color:"#6E7375",
      opacity:1
    },
    "& .PrivateTabIndicator-colorPrimary-96": {
      backgroundColor:"#254A93",
      color:'#6E7375'
    },
    "& .MuiTab-wrapper": {
      fontSize:"18px",
    },
    "& .MuiBox-root-100": {
      height: "480px",
      padding:0,
    },
    "& .MuiBox-root":{
      padding:0,
    }
  },
  textBlack:{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    marginLeft: "2%",
  },
  aboveContainer: {
    marginTop:"20px"
  },
  aboveSelectorTxt:{
    color: "#293134",
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  rootSelect:{
    "& .MuiSelect-filled.MuiSelect-filled": {
      backgroundColor:'#F7FAFF',
      padding:"0px 32px 0px 0px",
      border:"fff",
      color: "#293134"
    },
  },
});
const a11yProps=(index)=> {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};
const feedbacks = [
  {
    id:1,
    title:"Останній відгук",
    user:"Anatolii",
    date:"27 Червня - 30 Червня",
    subName:"Огляд",
    body:"Це місце дивовижне! Супер чистий, стильний і не надто далеко від усього найкращого, що може запропонувати Україна. Господар був привітним. Однозначно знову затримаюсь тут, повернувшись в Україну"
  },
  {
    id:2,
    title:"Останній відгук",
    user:"Anatolii",
    date:"27 Червня - 30 Червня",
    subName:"Огляд",
    body:"Це місце дивовижне! Супер чистий, стильний і не надто далеко від усього найкращого, що може запропонувати Україна. Господар був привітним. Однозначно знову затримаюсь тут, повернувшись в Україну"
  },
  {
    id:3,
    title:"Останній відгук",
    user:"Anatolii",
    date:"27 Червня - 30 Червня",
    subName:"Огляд",
    body:"Це місце дивовижне! Супер чистий, стильний і не надто далеко від усього найкращого, що може запропонувати Україна. Господар був привітним. Однозначно знову затримаюсь тут, повернувшись в Україну"
  },
  {
    id:4,
    title:"Останній відгук",
    user:"Anatolii",
    date:"27 Червня - 30 Червня",
    subName:"Огляд",
    body:"Це місце дивовижне! Супер чистий, стильний і не надто далеко від усього найкращого, що може запропонувати Україна. Господар був привітним. Однозначно знову затримаюсь тут, повернувшись в Україну"
  },
  {
    id:5,
    title:"Останній відгук",
    user:"Anatolii",
    date:"27 Червня - 30 Червня",
    subName:"Огляд",
    body:"Це місце дивовижне! Супер чистий, стильний і не надто далеко від усього найкращого, що може запропонувати Україна. Господар був привітним. Однозначно знову затримаюсь тут, повернувшись в Україну"
  },
  {
    id:6,
    title:"Останній відгук",
    user:"Anatolii",
    date:"27 Червня - 30 Червня",
    subName:"Огляд",
    body:"Це місце дивовижне! Супер чистий, стильний і не надто далеко від усього найкращого, що може запропонувати Україна. Господар був привітним. Однозначно знову затримаюсь тут, повернувшись в Україну"
  },
  {
    id:7,
    title:"Останній відгук",
    user:"Anatolii",
    date:"27 Червня - 30 Червня",
    subName:"Огляд",
    body:"Це місце дивовижне! Супер чистий, стильний і не надто далеко від усього найкращого, що може запропонувати Україна. Господар був привітним. Однозначно знову затримаюсь тут, повернувшись в Україну"
  },
  {
    id:8,
    title:"Останній відгук",
    user:"Anatolii",
    date:"27 Червня - 30 Червня",
    subName:"Огляд",
    body:"Це місце дивовижне! Супер чистий, стильний і не надто далеко від усього найкращого, що може запропонувати Україна. Господар був привітним. Однозначно знову затримаюсь тут, повернувшись в Україну"
  },
  {
    id:9,
    title:"Останній відгук",
    user:"Anatolii",
    date:"27 Червня - 30 Червня",
    subName:"Огляд",
    body:"Це місце дивовижне! Супер чистий, стильний і не надто далеко від усього найкращого, що може запропонувати Україна. Господар був привітним. Однозначно знову затримаюсь тут, повернувшись в Україну"
  },
  {
    id:10,
    title:"Останній відгук",
    user:"Anatolii",
    date:"27 Червня - 30 Червня",
    subName:"Огляд",
    body:"Це місце дивовижне! Супер чистий, стильний і не надто далеко від усього найкращого, що може запропонувати Україна. Господар був привітним. Однозначно знову затримаюсь тут, повернувшись в Україну"
  },
  {
    id:11,
    title:"Останній відгук",
    user:"Anatolii",
    date:"27 Червня - 30 Червня",
    subName:"Огляд",
    body:"Це місце дивовижне! Супер чистий, стильний і не надто далеко від усього найкращого, що може запропонувати Україна. Господар був привітним. Однозначно знову затримаюсь тут, повернувшись в Україну"
  },
  {
    id:12,
    title:"Останній відгук",
    user:"Anatolii",
    date:"27 Червня - 30 Червня",
    subName:"Огляд",
    body:"Це місце дивовижне! Супер чистий, стильний і не надто далеко від усього найкращого, що може запропонувати Україна. Господар був привітним. Однозначно знову затримаюсь тут, повернувшись в Україну"
  },
];

const TabPanel=(props)=> {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Index =()=> {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [dataForm] = useState({
    propertyId:'all'
  });
  // const handleChangeProperty= (e) => {
  //   setDataForm({
  //     propertyId:e.target.value
  //   });
  // };

  return(<Container>
    <Box className={classes.root}>
      <AppBar position="static" color="default" style={{ boxShadow:"none" }}>
        <Tabs  classes={{ indicator: classes.indicator }} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label={t("incomeTab")} {...a11yProps(0)} />
          <Tab label={t("feedbackTab")} {...a11yProps(1)} />
        </Tabs>
        <span style={{ marginLeft:"75%", marginTop: "-3%" }}>
          <Grid
            className={classes.aboveContainer}
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid className={classes.subGrid} item xs={5}>
              <Typography className={classes.aboveSelectorTxt}>{t('showItem')}</Typography>
            </Grid>
            <Grid className={classes.subGrid} item xs={5}>
              <FormControl variant="filled" className={classes.formControlSelect}>
                <InputLabel id="demo-simple-select-filled-label"/>
                <Select
                  className={classes.rootSelect}
                  defaultValue={dataForm.propertyId}
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={dataForm.propertyId}
                  // onChange={handleChangeProperty}
                >
                  <MenuItem value={'all'}>{t('allHouse')}</MenuItem>
                  <MenuItem value={'id1'}>{t('houseOne')}</MenuItem>
                  <MenuItem value={'id2'}>{t('houseTwo')}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </span>
      </AppBar>
      <TabPanel value={value} index={0} style={{ padding:"0px" }}>
        <Box>
          <ClientStatisticRent />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={3} style={{ marginTop:"20px", marginBottom:"20px" }}>
          {feedbacks.map(f=>
            <PanelClientMediumCard key={f.id} id={f.id} user={f.user} title={f.title} subName={f.subName} date={f.date} body={f.body} />)
          }
          <Box style={{ marginTop: "20px", marginBottom: "15px", marginLeft: "30%", marginRight:"30%" }}>
            <Pagination count={10} />
          </Box>
        </Grid>
      </TabPanel>
    </Box>
  </Container>);
};
export default Index;