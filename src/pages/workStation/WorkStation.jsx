import React, { useState, useEffect } from "react";
import { css } from "aphrodite/no-important";
import { Link } from "react-router-dom";
import { Table, TableColumn } from "../../components/table/Table";

import { DATE_OPTIONS } from "../../config";
import * as workStationApi from "../../modules/workStation";
import * as scheduleApi from "../../modules/schedule";

import styles from "./styles";

export default () => {
  const [workStations, setWorkStations] = useState([]);
  const [workStationSchedules, setWorkStationSchedules] = useState([]);

  const getWorkStations = () => {
    workStationApi.getWorkStations().then(({ data }) => {
      setWorkStations(data);
    });
  };

  const getUserSchedules = () => {
    scheduleApi.getUserSchedules().then(({ data }) => {
      setWorkStationSchedules(data);
    });
  };

  useEffect(() => {
    getUserSchedules();
    getWorkStations();
  }, []);

  const scheduleHeader = ["Workstion", "Horário", "Criado Por"];
  const workStationHeader = ["Nome", "Descrição", "Ação"];

  return (
    <>
      <h1>WorkStation</h1>
      <div className={css(styles.content)}>
        <section className={css(styles.tableContent)}>
          <h2>Agendamentos</h2>
          <Table header={scheduleHeader}>
            {workStationSchedules.length === 0 && (
              <tr>
                <TableColumn colSpan={3}>Não há agendamentos</TableColumn>
              </tr>
            )}
            {workStationSchedules.length > 0 &&
              workStationSchedules.map((workStation) => {
                const { name, schedules } = workStation;

                return schedules.map((m) => {
                  const startDate = new Date(m.start);
                  const endDate = new Date(m.end);

                  const start = new Intl.DateTimeFormat(
                    "pt-BR",
                    DATE_OPTIONS
                  ).format(startDate);
                  const end = new Intl.DateTimeFormat(
                    "pt-BR",
                    DATE_OPTIONS
                  ).format(endDate);

                  return (
                    <tr key={m._id}>
                      <TableColumn>{name}</TableColumn>
                      <TableColumn>
                        <p>{`De: ${start}`}</p>
                        <p>{`Até: ${end}`}</p>
                      </TableColumn>
                      <TableColumn>{m.createdBy}</TableColumn>
                    </tr>
                  );
                });
              })}
          </Table>
        </section>

        <section className={css(styles.tableContent)}>
          <h2>Workstations disponíveis</h2>

          <Table header={workStationHeader}>
            {workStations.length === 0 && (
              <tr>
                <TableColumn colSpan={3}>
                  Não há workstations disponíveis
                </TableColumn>
              </tr>
            )}
            {workStations.length > 0 &&
              workStations.map((w) => (
                <tr key={w._id}>
                  <TableColumn>{w.name}</TableColumn>
                  <TableColumn>{w.description}</TableColumn>
                  <TableColumn>
                    <Link
                      to={`/agendamento/workstation/${w._id}`}
                      className={css(styles.button, styles.schedule)}
                    >
                      Agendar
                    </Link>
                  </TableColumn>
                </tr>
              ))}
          </Table>
        </section>
      </div>
    </>
  );
};
