import React, { useState } from 'react';

import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import WarningUpdateModal from '../../components/WarningUpdateModal';

import arrowLeft from '../../assets/arrow-left.svg';

import './styles.css';

function UpdateNaver() {
  const [
    isWarningUpdateModalVisible,
    setIsWarningUpdateModalvisible,
  ] = useState(false);
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [admission_date, setAdmissiondate] = useState('');
  const [project, setProject] = useState('');
  const [url, setUrl] = useState('');
  const [job_role, setJobRole] = useState('');

  const { params } = useRouteMatch();

  const history = useHistory();

  const token = localStorage.getItem('@Navedex:token');

  async function handleUpdateNaver(e) {
    e.preventDefault();

    const data = {
      name,
      birthdate,
      admission_date,
      project,
      url,
      job_role,
    };

    try {
      await api
        .put(`navers/${params.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(setIsWarningUpdateModalvisible(true));

      history.push('/home');
    } catch (err) {
      alert('Erro ao atualizar o Naver, tente novamente.');
    }
  }

  return (
    <div className="new-naver-page container" onSubmit={handleUpdateNaver}>
      <Header />
      <form className="new-naver-container">
        <div className="top-content">
          <Link to="/home">
            <img src={arrowLeft} alt="Arrow Left" />
          </Link>
          <h2>Editar Naver</h2>
        </div>
        <div className="middle-content">
          <div className="first-column">
            <ul>
              <li>
                <span>Nome</span>
                <input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <span>Idade</span>
                <input
                  type="text"
                  placeholder="Idade"
                  value={birthdate}
                  onChange={e => setBirthdate(e.target.value)}
                />

                <span>Projetos que participou</span>
                <input
                  type="text"
                  placeholder="Projetos que participou"
                  value={project}
                  onChange={e => setProject(e.target.value)}
                />
              </li>
            </ul>
          </div>

          <div className="second-column">
            <ul>
              <li>
                <span>Cargo</span>
                <input
                  type="text"
                  placeholder="Cargo"
                  value={job_role}
                  onChange={e => setJobRole(e.target.value)}
                />

                <span>Tempo de empresa</span>
                <input
                  type="text"
                  placeholder="Tempo de empresa"
                  value={admission_date}
                  onChange={e => setAdmissiondate(e.target.value)}
                />

                <span>URL da foto do Naver</span>
                <input
                  type="text"
                  placeholder="URL da foto do Naver"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content">
          <button type="submit">Salvar</button>
          {isWarningUpdateModalVisible ? (
            <WarningUpdateModal
              onClose={() => setIsWarningUpdateModalvisible(false)}
            />
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default UpdateNaver;
