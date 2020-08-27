import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import WarningCreateModal from '../../components/WarningCreateModal';

import arrowLeft from '../../assets/arrow-left.svg';

import './styles.css';

function NewNaver() {
  const [
    isWarningCreateModalVisible,
    setIsWarningCreateModalvisible,
  ] = useState(false);
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [admission_date, setAdmissiondate] = useState('');
  const [project, setProject] = useState('');
  const [url, setUrl] = useState('');
  const [job_role, setJobRole] = useState('');

  const history = useHistory();

  const token = localStorage.getItem('@Navedex:token');

  async function handleNewNaver(e) {
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
        .post('navers', data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(setIsWarningCreateModalvisible(true));

      history.push('/home');
    } catch (err) {
      setIsWarningCreateModalvisible(false);
      alert('Erro ao cadastrar Naver, tente novamente.');
    }
  }

  return (
    <div className="new-naver-page container">
      <Header />
      <form className="new-naver-container" onSubmit={handleNewNaver}>
        <div className="new-naver-top-content">
          <Link to="/home">
            <img
              src={arrowLeft}
              alt="Arrow Left"
              className="new-naver-top-content-img"
            />
          </Link>
          <h2 className="new-naver-top-content-h2">Adicionar Naver</h2>
        </div>
        <div className="middle-content">
          <div className="first-column">
            <ul className="first-column-ul">
              <li className="first-column-ul-li">
                <span className="first-column-ul-li-span">Nome</span>
                <input
                  type="text"
                  className="first-column-ul-li-input"
                  placeholder="Nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <span className="first-column-ul-li-span">Idade</span>
                <input
                  type="text"
                  className="first-column-ul-li-input"
                  placeholder="Idade"
                  value={birthdate}
                  onChange={e => setBirthdate(e.target.value)}
                />

                <span className="first-column-ul-li-span">
                  Projetos que participou
                </span>
                <input
                  type="text"
                  className="first-column-ul-li-input"
                  placeholder="Projetos que participou"
                  value={project}
                  onChange={e => setProject(e.target.value)}
                />
              </li>
            </ul>
          </div>

          <div className="second-column">
            <ul className="second-column-ul">
              <li className="second-column-ul-li">
                <span className="second-column-ul-li-span">Cargo</span>
                <input
                  type="text"
                  className="second-column-ul-li-input"
                  placeholder="Cargo"
                  value={job_role}
                  onChange={e => setJobRole(e.target.value)}
                />

                <span className="second-column-ul-li-span">
                  Tempo de empresa
                </span>
                <input
                  type="text"
                  className="second-column-ul-li-input"
                  placeholder="Tempo de empresa"
                  value={admission_date}
                  onChange={e => setAdmissiondate(e.target.value)}
                />

                <span className="second-column-ul-li-span">
                  URL da foto do Naver
                </span>
                <input
                  type="text"
                  className="second-column-ul-li-input"
                  placeholder="URL da foto do Naver"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content">
          <button className="footer-content-button" type="submit">
            Salvar
          </button>
          {isWarningCreateModalVisible ? (
            <WarningCreateModal
              onClose={() => setIsWarningCreateModalvisible(false)}
            />
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default NewNaver;
