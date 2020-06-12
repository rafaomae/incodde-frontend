import React from "react";
import { Switch } from "react-router-dom";
import Route from "./customRoute";

import AdminUser from "../pages/admin/users/Users";
import AdminMeeting from "../pages/admin/meetingRooms/MeetingRoom";
import AdminWorkStation from "../pages/admin/workStations/WorkStations";
import AdminForm from "../pages/admin/create/Form";
import Confirmation from "../pages/email/Confirmation";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Meeting from "../pages/meeting/Meeting";
import ScheduleMeeting from "../pages/schedule/meeting/Meeting";
import ScheduleWorkStation from "../pages/schedule/workstation/WorkStation";
import User from "../pages/user/User";
import WorkStation from "../pages/workStation/WorkStation";
import Unauthorized from "../pages/error/Unauthorized";

export default function Routes() {
  return (
    <Switch>
      <Route path="/confirmar/:id" component={Confirmation} />
      <Route path="/admin/:obj/:id" component={AdminForm} requireAuth />
      <Route path="/admin/reuniao" component={AdminMeeting} requireAuth />
      <Route
        path="/admin/workstation"
        component={AdminWorkStation}
        requireAuth
      />
      <Route path="/admin/usuario" exact component={AdminUser} requireAuth />
      <Route path="/meus-dados" exact component={User} requireAuth />
      <Route
        path="/agendamento/reuniao/:id"
        exact
        component={ScheduleMeeting}
        requireAuth
      />
      <Route
        path="/agendamento/workstation/:id"
        exact
        component={ScheduleWorkStation}
        requireAuth
      />
      <Route path="/workstation" exact component={WorkStation} requireAuth />
      <Route path="/reuniao" exact component={Meeting} requireAuth />
      <Route path="/home" exact component={Home} requireAuth />
      <Route path="/" exact component={Login} />
      <Route path="/permissao" exact component={Unauthorized} />
    </Switch>
  );
}
