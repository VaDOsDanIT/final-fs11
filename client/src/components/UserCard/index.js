import React from 'react';
import Card from "@material-ui/core/Card";
import {Divider, makeStyles, Typography} from "@material-ui/core";
import Button from '@components/Button';

import defaultUser from '../../images/avatar.png';
import clsx from "clsx";
import { Delete, DeleteRounded, LeakRemove, Message, Remove, RemoveCircle, RemoveCircleOutlineOutlined, RemoveSharp } from "@material-ui/icons";
import ClientCardProfile from "../../pages/Client/components/ClientCardProfile";

const useStyles = makeStyles({
  root: {
    borderRadius: '20px',
    background: '#fff',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    border: 'none',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center'
  },
  userProfile: {
    borderRight: '0.5px solid #acb5b9',
    maxWidth: '363px',
    minWidth: '363px',
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '40px'
  },
  userName: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: '5px'
  },
  userAvatar: {
    objectFit: 'cover',
    width: '40px',
    height: '40px',
    borderRadius: '50%'
  },
  userInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'enter'
  },

  userInfo_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between'
  },
  containerPadding: {
    paddingLeft: '15px',
    borderLeft: '0.5px solid #acb5b9'
  },

  grayText: {
    color: '#6e7375',
    fontSize: '14px'
  },

  link: {
    color: '#254a93',
    fontSize: '14px',
    textDecoration: 'none'
  },

  managerInfo: {
    padding: '14px 0 0 28px',
  },

  table: {
    width: '300px'
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '25px'
  },

  btn: {
    borderRadius: '5px',
    padding: '5px 18px',
    height: '30px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    boxSizing: 'border-box',
    minWidth: '133px'
  },

  messageBtn: {
    backgroundColor: '#254a93',
    marginRight: '31px',
    color: "#fff",

  },

  divider: {
    background: '#acb5b9',
    boxShadow: '1px 0px 3px rgba(0,0,0,0.3)'
  },

  addBtn: {
    backgroundColor: '#f88b38',
    marginRight: '31px',
    color: "#fff",

  },

  deleteBtn: {
    backgroundColor: '#fff',
    border: '1px solid #6e7375',
    color: '#6e7375',
  }
});


const Index = ({ user, removeUser }) => {
  const classes = useStyles();

  const { urlAvatar, name, contacts, email, id } = user;
  const { phone } = contacts?.find(cc => cc.type === "MAIN") || { phone: "" };


  const handleRemoveUser = () => {
    removeUser({
      url: `/users/${user.id}`,
      method: 'delete'
    });
  }

  return (
    <Card className={classes.root}>
      <ClientCardProfile email={email} name={name} phone={phone} urlAvatar={urlAvatar || defaultUser} id={id}/>

      <Divider className={classes.divider} orientation="vertical" flexItem/>

      <div className={classes.managerInfo}>
        <table className={classes.table}>
          <tr>
            <td>Позиція:</td>
            <td>Менеджер</td>
          </tr>
          <tr>
            <td>Здано в оренду будинків:</td>
            <td>125</td>
          </tr>
        </table>

        <div className={classes.buttonContainer}>
          <button className={clsx(classes.messageBtn, classes.btn)}>Написати <Message width="17px" height="17px"/></button>
          <button className={clsx(classes.addBtn, classes.btn)}>Додати клієнта</button>
          <button onClick={handleRemoveUser} className={clsx(classes.btn, classes.deleteBtn)}>Видалити <DeleteRounded width="17px" height="17px"/></button>
        </div>
      </div>
    </Card>
  );
};

export default Index;