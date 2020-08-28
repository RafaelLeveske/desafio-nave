import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

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

  const handleNewNaver = useCallback(
    async e => {
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
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          birthdate: Yup.string().required(),
          admission_date: Yup.string().required(),
          project: Yup.string().required(),
          url: Yup.string().required(),
          job_role: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api
          .post('navers', data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(setIsWarningCreateModalvisible(true));

        history.push('/home');
      } catch (err) {
        alert(
          'Erro ao cadastrar Naver verifique os dados de cadastro e tente novamente',
        );
        setIsWarningCreateModalvisible(false);
      }
    },
    [admission_date, birthdate, history, job_role, name, project, token, url],
  );

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
        <div className="new-naver-middle-content">
          <div className="new-naver-first-column">
            <ul className="new-naver-first-column-ul">
              <li className="new-naver-first-column-ul-li">
                <span className="new-naver-first-column-ul-li-span">Nome</span>
                <input
                  type="text"
                  className="new-naver-first-column-ul-li-input"
                  placeholder="Nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <span className="new-naver-first-column-ul-li-span">Idade</span>
                <input
                  type="text"
                  className="new-naver-first-column-ul-li-input"
                  placeholder="Idade"
                  value={birthdate}
                  onChange={e => setBirthdate(e.target.value)}
                />

                <span className="new-naver-first-column-ul-li-span">
                  Projetos que participou
                </span>
                <input
                  type="text"
                  className="new-naver-first-column-ul-li-input"
                  placeholder="Projetos que participou"
                  value={project}
                  onChange={e => setProject(e.target.value)}
                />
              </li>
            </ul>
          </div>

          <div className="new-naver-second-column">
            <ul className="new-naver-second-column-ul">
              <li className="new-naver-second-column-ul-li">
                <span className="new-naver-second-column-ul-li-span">
                  Cargo
                </span>
                <input
                  type="text"
                  className="new-naver-second-column-ul-li-input"
                  placeholder="Cargo"
                  value={job_role}
                  onChange={e => setJobRole(e.target.value)}
                />

                <span className="new-naver-second-column-ul-li-span">
                  Tempo de empresa
                </span>
                <input
                  type="text"
                  className="new-naver-second-column-ul-li-input"
                  placeholder="Tempo de empresa"
                  value={admission_date}
                  onChange={e => setAdmissiondate(e.target.value)}
                />

                <span className="new-naver-second-column-ul-li-span">
                  URL da foto do Naver
                </span>
                <input
                  type="text"
                  className="new-naver-second-column-ul-li-input"
                  placeholder="URL da foto do Naver"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="new-naver-footer-content">
          <button className="new-naver-footer-content-button" type="submit">
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
