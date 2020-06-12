import React, { useState, useEffect } from "react";
import { css } from "aphrodite/no-important";
import { Table, TableColumn } from "../../../components/table/Table";
import Button from "../../../components/button/Button";

import { getToken } from "../../../services/auth";
import { getAll, patch } from "../../../modules/user";

import styles from "./styles";

export default () => {
  const [users, setUsers] = useState([]);
  const { email } = getToken();

  const getUsers = () => {
    getAll().then(({ data }) => {
      setUsers(data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const setAdmin = async (id, isAdmin) => {
    const result = await patch(id, isAdmin);
    if (result.statusCode) {
      alert(result.message);
    } else {
      alert("Usuário alterado com sucesso, favor relogar para surgir efeito");
      getUsers();
    }
  };

  const header = ["Nome", "Cpf", "E-mail", "Ação"];

  return (
    <>
      <h1>Usuários</h1>
      <div className={css(styles.content)}>
        <section className={css(styles.tableContent)}>
          <Table header={header}>
            {users.length === 0 && (
              <tr>
                <TableColumn colSpan={5}>Não há usuários</TableColumn>
              </tr>
            )}
            {users.length > 0 &&
              users.map((user) => {
                if (user.email !== email) {
                  return (
                    <tr key={user._id}>
                      <TableColumn>{user.name}</TableColumn>
                      <TableColumn>{user.cpf}</TableColumn>
                      <TableColumn>{user.email}</TableColumn>
                      <TableColumn>
                        {!user.isAdmin && (
                          <Button
                            type="button"
                            className={styles.button}
                            role="success"
                            onClick={() => setAdmin(user._id, true)}
                          >
                            Tornar Admin
                          </Button>
                        )}
                        {user.isAdmin && (
                          <Button
                            type="button"
                            className={styles.button}
                            role="error"
                            onClick={() => setAdmin(user._id, false)}
                          >
                            Remover Admin
                          </Button>
                        )}
                      </TableColumn>
                    </tr>
                  );
                }
                return null;
              })}
          </Table>
        </section>
      </div>
    </>
  );
};
