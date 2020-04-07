import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowDown, FiUser, FiCheck, FiMoreHorizontal } from 'react-icons/fi'

import './styles.css';

export default function Profile() {

  const history = useHistory();

  const username = history.location.pathname.substring(1)

  return (
    <div className="profile-container">
      <div className="centered">

        <header>
          <img src="https://api.adorable.io/avatars/50/" />

          <div className="right-side">
            <div className="actions">
              <h2>{username}</h2>
              <div className="buttons">
                <button className="message">Send a message</button>
                <button className="follow">
                  <FiUser size={14} fill="#000" color="#000" />
                  <FiCheck size={14} />
                </button>
                <button className="suggestions">
                  <FiArrowDown size={12} />
                </button>
                <FiMoreHorizontal size={32} />
              </div>
            </div>

            <div className="stats">
              <p>
                <b>3046</b> posts
              </p>
              <p>
                <b>346208</b> followers
              </p>
              <p>
                <b>133</b> following
              </p>
            </div>

            <div className="infos">
              <b>Gustavo Morais</b>
              <p>
              Texto texto texto texto texto texto texto
              </p>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};