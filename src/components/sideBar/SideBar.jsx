import React from "react";
import { Link } from "react-router-dom";
import { css } from "aphrodite/no-important";
import { FiHome, FiUsers, FiMonitor, FiSettings } from "react-icons/fi";

import { getToken } from "../../services/auth";
import { TOKEN_KEY } from "../../config";

import logo from "../../assets/logo.svg";
import styles from "./styles";

export default () => {
  const { name, isAdmin, confirmed } = getToken();
  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.href = "/";
  };

  return (
    <nav className={css(styles.nav)}>
      <img className={css(styles.img)} src={logo} alt="Logo" />
      <section>
        <h2>Olá, {name}</h2>
        <span className={css(styles.logout)} onClick={logout}>
          Logout
        </span>
      </section>
      <ul className={css(styles.ul)}>
        <li>
          {confirmed && (
            <Link to="/home" className={css(styles.link)}>
              <FiHome size={20} />
              <span>Início</span>
            </Link>
          )}
          {!confirmed && (
            <span className={css(styles.link)}>
              <FiHome size={20} />
              <span>Início</span>
            </span>
          )}
        </li>
        <li>
          {confirmed && (
            <Link to="/reuniao" className={css(styles.link)}>
              <FiUsers size={20} />
              <span>Reuniões</span>
            </Link>
          )}
          {!confirmed && (
            <span className={css(styles.link)}>
              <FiUsers size={20} />
              <span>Reuniões</span>
            </span>
          )}
        </li>
        <li>
          {confirmed && (
            <Link to="/workstation" className={css(styles.link)}>
              <FiMonitor size={20} />
              <span>Workstations</span>
            </Link>
          )}
          {!confirmed && (
            <span className={css(styles.link)}>
              <FiMonitor size={20} />
              <span>Workstations</span>
            </span>
          )}
        </li>
        <li>
          {confirmed && (
            <Link to="/meus-dados" className={css(styles.link)}>
              <FiSettings size={20} />
              <span>Meus Dados</span>
            </Link>
          )}
          {!confirmed && (
            <span className={css(styles.link)}>
              <FiSettings size={20} />
              <span>Meus Dados</span>
            </span>
          )}
        </li>
      </ul>
      {isAdmin && (
        <section className={css(styles.admin)}>
          <h3>Administrador</h3>
          <ul className={css(styles.ulAdmin)}>
            <li>
              <Link to="/admin/usuario">
                <span>Gerenciamento de usuários</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/reuniao">
                <span>Gerenciamento de salas de reuniões</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/workstation">
                <span>Gerenciamento de workstations</span>
              </Link>
            </li>
          </ul>
        </section>
      )}
    </nav>
  );
};
