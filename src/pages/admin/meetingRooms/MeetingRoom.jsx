import React, { useState, useEffect } from "react";
import { css } from "aphrodite/no-important";
import { Link } from "react-router-dom";
import { Table, TableColumn } from "../../../components/table/Table";

import * as api from "../../../modules/meetingRoom";

import styles from "./styles";

export default () => {
  const [meetingRooms, setMeetingRooms] = useState([]);

  const getMeetingRooms = () => {
    api.getMeetingRooms().then(({ data }) => {
      setMeetingRooms(data);
    });
  };
  useEffect(() => {
    getMeetingRooms();
  }, []);

  const remove = async (meetingRoomId) => {
    const result = await api.removeMeetingRoom(meetingRoomId);
    if (result.statusCode) {
      alert(result.message);
    } else {
      alert("Sala de reunião removida com sucesso");
      getMeetingRooms();
    }
  };
  const header = ["Nome", "Descrição", "Ação"];

  return (
    <>
      <h1>Salas de Reunião</h1>
      <div className={css(styles.content)}>
        <section className={css(styles.tableContent)}>
          <Link
            to={`/admin/reuniao/new`}
            className={css(styles.button, styles.schedule)}
          >
            Criar Nova
          </Link>
          <Table header={header}>
            {meetingRooms.length === 0 && (
              <tr>
                <TableColumn colSpan={5}>Não há salas disponíveis</TableColumn>
              </tr>
            )}
            {meetingRooms.length > 0 &&
              meetingRooms.map((m) => (
                <tr key={m._id}>
                  <TableColumn>{m.name}</TableColumn>
                  <TableColumn>{m.description}</TableColumn>
                  <TableColumn multiAction={true}>
                    <Link
                      to={`/admin/reuniao/${m._id}`}
                      className={css(styles.button, styles.join)}
                    >
                      Editar
                    </Link>
                    <button
                      className={css(styles.button, styles.leave)}
                      onClick={() => remove(m._id)}
                    >
                      Excluir
                    </button>
                  </TableColumn>
                </tr>
              ))}
          </Table>
        </section>
      </div>
    </>
  );
};
