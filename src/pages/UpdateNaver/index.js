import React, { useState, useCallback } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import * as Yup from 'yup';

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

  const handleUpdateNaver = useCallback(
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
          .put(`navers/${params.id}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(setIsWarningUpdateModalvisible(true));

        history.push('/home');
      } catch (err) {
        alert(
          'Erro ao atualizar o Naver, verifique os dados de cadastro tente novamente.',
        );
        setIsWarningUpdateModalvisible(false);
      }
    },
    [
      admission_date,
      birthdate,
      history,
      job_role,
      name,
      params.id,
      project,
      token,
      url,
    ],
  );

  return (
    <div className="update-naver-page container" onSubmit={handleUpdateNaver}>
      <Header />
      <form className="update-naver-container">
        <div className="update-naver-top-content">
          <Link to="/home">
            <img
              src={arrowLeft}
              alt="Arrow Left"
              className="update-naver-top-content-img"
            />
          </Link>
          <h2 className="update-naver-top-content-h2">Editar Naver</h2>
        </div>
        <div className="update-naver-middle-content">
          <div className="update-naver-first-column">
            <ul className="update-naver-first-column-ul">
              <li className="update-naver-first-column-ul-li">
                <span className="update-naver-first-column-ul-li-span">
                  Nome
                </span>
                <input
                  type="text"
                  className="update-naver-first-column-ul-li-input"
                  placeholder="Nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <span className="update-naver-first-column-ul-li-span">
                  Idade
                </span>
                <input
                  type="text"
                  className="update-naver-first-column-ul-li-input"
                  placeholder="Idade"
                  value={birthdate}
                  onChange={e => setBirthdate(e.target.value)}
                />

                <span className="update-naver-first-column-ul-li-span">
                  Projetos que participou
                </span>
                <input
                  type="text"
                  className="update-naver-first-column-ul-li-input"
                  placeholder="Projetos que participou"
                  value={project}
                  onChange={e => setProject(e.target.value)}
                />
              </li>
            </ul>
          </div>

          <div className="update-naver-second-column">
            <ul className="update-naver-second-column-ul">
              <li className="update-naver-second-column-ul-li">
                <span className="update-naver-second-column-ul-li-span">
                  Cargo
                </span>
                <input
                  type="text"
                  className="update-naver-second-column-ul-li-input"
                  placeholder="Cargo"
                  value={job_role}
                  onChange={e => setJobRole(e.target.value)}
                />

                <span className="update-naver-second-column-ul-li-span">
                  Tempo de empresa
                </span>
                <input
                  type="text"
                  className="update-naver-second-column-ul-li-input"
                  placeholder="Tempo de empresa"
                  value={admission_date}
                  onChange={e => setAdmissiondate(e.target.value)}
                />

                <span className="update-naver-second-column-ul-li-span">
                  URL da foto do Naver
                </span>
                <input
                  type="text"
                  className="update-naver-second-column-ul-li-input"
                  placeholder="URL da foto do Naver"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="update-naver-footer-content">
          <button type="submit" className="update-naver-footer-content-button">
            Salvar
          </button>
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
