import React, { useState, useEffect } from "react";
import { css } from "aphrodite/no-important";
import { Link } from "react-router-dom";
import { Table, TableColumn } from "../../../components/table/Table";

import * as api from "../../../modules/workStation";

import styles from "./styles";
import Button from "../../../components/button/Button";

export default () => {
  const [workStations, setWorkStations] = useState([]);

  const getWorkStations = () => {
    api.getWorkStations().then(({ data }) => {
      setWorkStations(data);
    });
  };
  useEffect(() => {
    getWorkStations();
  }, []);

  const remove = async (workStationId) => {
    const result = await api.removeWorkStation(workStationId);
    if (result.statusCode) {
      alert(result.message);
    } else {
      alert("Workstation removida com sucesso");
      getWorkStations();
    }
  };
  const header = ["Nome", "Descrição", "Ação"];
  return (
    <>
      <h1>Workstations</h1>
      <div className={css(styles.content)}>
        <section className={css(styles.tableContent)}>
          <Link
            to={`/admin/workstation/new`}
            className={css(styles.button, styles.schedule)}
          >
            Criar Nova
          </Link>
          <Table header={header}>
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
                  <TableColumn multiAction={true}>
                    <Link
                      to={`/admin/workstation/${w._id}`}
                      className={css(styles.button, styles.join)}
                    >
                      Editar
                    </Link>
                    <Button
                      className={styles.button}
                      role="error"
                      onClick={() => remove(w._id)}
                    >
                      Excluir
                    </Button>
                  </TableColumn>
                </tr>
              ))}
          </Table>
        </section>
      </div>
    </>
  );
};
