import React, { useState, useEffect } from "react";
import { css } from "aphrodite/no-important";
import { Link } from "react-router-dom";
import { Table, TableColumn } from "../../components/table/Table";
import Button from "../../components/button/Button";

import { DATE_OPTIONS } from "../../config";
import { getToken } from "../../services/auth";
import * as api from "../../modules/meetingRoom";

import { update, remove } from "../../modules/meeting";

import styles from "./styles";

export default () => {
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [availableMeetings, setAvailableMeetings] = useState([]);
  const { email, isAdmin } = getToken();

  const getMeetingRooms = () => {
    api.getMeetingRooms().then(({ data }) => {
      setMeetingRooms(data);
    });
  };
  const getAvailableMeetings = () => {
    api.getAvailableMeetings().then(({ data }) => {
      setAvailableMeetings(data);
    });
  };

  useEffect(() => {
    getMeetingRooms();
    getAvailableMeetings();
  }, []);

  const removeMeeting = async (meetingRoomId, meetingId) => {
    const result = await remove(meetingRoomId, meetingId);
    if (result.statusCode) {
      alert(result.message);
    } else {
      alert("Reunião cancelada com sucesso");
      getAvailableMeetings();
    }
  };

  const joinMeeting = async (meetingRoomId, meetingId, meeting) => {
    meeting.participants.push(email);

    const result = await update(meetingRoomId, meetingId, meeting);
    if (result.statusCode) {
      alert(result.err);
    } else {
      getAvailableMeetings();
    }
  };

  const leaveMeeting = async (meetingRoomId, meetingId, meeting) => {
    const participants = meeting.participants.filter((p) => p !== email);
    meeting.participants = participants;

    const result = await update(meetingRoomId, meetingId, meeting);
    if (result.statusCode) {
      alert(result.message);
    } else {
      getAvailableMeetings();
    }
  };

  const availableHeader = [
    "Nome",
    "Descrição",
    "Horário",
    "Criado Por",
    "Ação",
  ];
  const meetingRoomHeader = ["Nome", "Descrição", "Ação"];

  return (
    <>
      <h1>Reuniões</h1>
      <div className={css(styles.content)}>
        <section className={css(styles.tableContent)}>
          <h2>Reuniões disponíveis</h2>

          <Table header={availableHeader}>
            {availableMeetings.length === 0 && (
              <tr>
                <TableColumn colSpan={5}>
                  Não há reuniões disponíveis
                </TableColumn>
              </tr>
            )}
            {availableMeetings.length > 0 &&
              availableMeetings.map((meetingRoom) => {
                const { _id, meetings } = meetingRoom;

                return meetings.map((m) => {
                  const owner = m.createdBy === email;
                  const alreadyJoined =
                    m.participants.filter((p) => p === email)[0] !== undefined;

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
                      <TableColumn>{m.name}</TableColumn>
                      <TableColumn>{m.description}</TableColumn>
                      <TableColumn>
                        <p>{`De: ${start}`}</p>
                        <p>{`Até: ${end}`}</p>
                      </TableColumn>
                      <TableColumn>{m.createdBy}</TableColumn>
                      <TableColumn>
                        {(owner || isAdmin) && (
                          <Button
                            type="button"
                            className={styles.button}
                            role="error"
                            onClick={() => removeMeeting(_id, m._id)}
                          >
                            Cancelar Reunião
                          </Button>
                        )}
                        {alreadyJoined && (
                          <Button
                            type="button"
                            className={styles.button}
                            role="error"
                            onClick={() => leaveMeeting(_id, m._id, m)}
                          >
                            Sair da Reunião
                          </Button>
                        )}
                        {alreadyJoined && !owner && (
                          <Button
                            type="button"
                            className={styles.button}
                            role="success"
                            onClick={() => joinMeeting(_id, m._id, m)}
                          >
                            Entrar da Reunião
                          </Button>
                        )}
                      </TableColumn>
                    </tr>
                  );
                });
              })}
          </Table>
        </section>

        <section className={css(styles.tableContent)}>
          <h2>Salas disponíveis</h2>

          <Table header={meetingRoomHeader}>
            {meetingRooms.length === 0 && (
              <tr>
                <TableColumn colSpan={3}>Não há salas disponíveis</TableColumn>
              </tr>
            )}
            {meetingRooms.length > 0 &&
              meetingRooms.map((m) => (
                <tr key={m._id}>
                  <TableColumn>{m.name}</TableColumn>
                  <TableColumn>{m.description}</TableColumn>
                  <TableColumn>
                    <Link
                      to={`/agendamento/reuniao/${m._id}`}
                      className={css(styles.button, styles.schedule)}
                    >
                      Agendar Reunião
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
