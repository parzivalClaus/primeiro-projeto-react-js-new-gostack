import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/41478702?s=460&u=49096f119ee4a6d01d401c8668afdd2b3ecc4522&v=4"
            alt="parzivalClaus"
          />
          <div>
            <strong>fogo-doom</strong>
            <p>
              Aprender e modificar o arquivo de criação de Fogo do Doom, usando
              javascript
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/41478702?s=460&u=49096f119ee4a6d01d401c8668afdd2b3ecc4522&v=4"
            alt="parzivalClaus"
          />
          <div>
            <strong>fogo-doom</strong>
            <p>
              Aprender e modificar o arquivo de criação de Fogo do Doom, usando
              javascript
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/41478702?s=460&u=49096f119ee4a6d01d401c8668afdd2b3ecc4522&v=4"
            alt="parzivalClaus"
          />
          <div>
            <strong>fogo-doom</strong>
            <p>
              Aprender e modificar o arquivo de criação de Fogo do Doom, usando
              javascript
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
