import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import PrintIcon from '@material-ui/icons/Print';
import HouseDesription from "./HouseDesription";
import { CircleOfStatistic } from "./CircleOfStatistic";
import GetAppIcon from '@material-ui/icons/GetApp';
import Typography from "@material-ui/core/Typography";
import { Slider } from "./Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: '15px',
    marginTop: '5px',
    font: 'Roboto'
  },
  topSide: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: '15px',
    marginTop: '15px',
    font: 'Roboto'
  },


  leftSide: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
  },


  rightSide: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    flexDirection: 'column'

  },
  houseIdInfo: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  id: {
    fontSize: '24px',
    color: '#9DC2FF',

  },
  houseDescription: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  houseIdInfoButtonBlock: {
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  ExportButton: {
    marginLeft: '10px',
    textTransform: 'none',
    textDecoration: 'none',
    color: '#464C4E',
    border: '1px solid #6E7375', borderRadius: '10px',
    padding: '20px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },


  houseRentStatisticBlock: {
    margin: '20px',
    borderRadius: '20px',
    paddingTop: '5px',
    boxShadow: "1px 2px 2px rgba(0,0,0,0.19), 1px 2px 2px rgba(0,0,0,0.23)",
    padding: '0px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'space-between',
  },
  diagramBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'space-evenly',
    minHeight:"190px"
  },
  diagramBody: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'flex-start',
  },

  roundOfStatistic: {
    margin: '10px',
    width: '100px',
    height: '100px',
  },
  persentsBlock: {
    lineHeight: '8px'
  },
  moneyInDollars: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    fontSize: '32px',
    fontWeight: 400
  },
  days: {
    fontSize: '16px',
    fontWeight: 400
  },
  persents: {
    fontSize: '12px'
  },
  persentsCount: {
    color: '#4AD584'
  },
  persentsFromTo: {
    color: '#99A0A3'
  },
  statisticRent: {

    fontSize: '16px',
    color: '#293134',
    marginLeft: '30px',
    marginTop: '20px',
    width: "100%"
  },

  textBlock: {
    margin: 15
  }
}));


export const HouseContainer = () => {
  const classes = useStyles();


  return (
    <>
      <div className={classes.root}>
        <div className={classes.topSide}>
          <div className={classes.leftSide}>
            <Slider/>
          </div>


          <div className={classes.rightSide}>
            <div className={classes.houseIdInfo}>
              <p className={classes.id}>ID 00170</p>
              <div className={classes.houseIdInfoButtonBlock}>
                <PrintIcon style={{ color: '#464C4E' }}/>
                <a className={classes.ExportButton} href={'#'}>
                  <p>Експорт</p>
                  <GetAppIcon style={{ color: '#464C4E' }}/>
                </a>
              </div>
            </div>
            <div className={classes.houseDescription}>
              <HouseDesription/>
            </div>

            <div className={classes.houseRentStatisticBlock}>

              <div className={classes.diagramBlock}>
                <div className={classes.statisticRent}>Статистика Оренди</div>
                <div className={classes.diagramBody}>
                  <div className={classes.roundOfStatistic}>
                    <CircleOfStatistic percentage={57}/>
                  </div>
                  <div className={classes.persentsBlock}>
                    <div className={classes.days}>20 днів</div>
                    <div className={classes.persents}>
                      <p>
                        <span className={classes.persentsCount}><span>  &#x2B06;</span>+12%</span>
                        <span className={classes.persentsFromTo}>від минулого місяця</span>
                      </p>
                    </div>
                  </div>
                  <div className={classes.moneyInDollars}>
                    <p>$3.573K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={classes.textBlock}>
          <Typography variant="body1" gutterBottom>
            Деталі
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>

        </div>
      </div>
    </>
  );
};