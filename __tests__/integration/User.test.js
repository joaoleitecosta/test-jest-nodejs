import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Joao Leite',
        email: 'joao_leite@hotmail.com.br',
        password_hash: '12345678',
      });

    expect(response.body).toHaveProperty('id');
  });

  // it('shoult not be able to register with duplicated email', async () => {
  //   await request(app)
  //     .post('/users')
  //     .send({
  //       name: 'Joao',
  //       email: 'joao_leite@hotmail.com',
  //       password_hash: '12345678',
  //     });

  //   const response = await request(app)
  //     .post('./users')
  //     .send({
  //       name: 'Joao',
  //       email: 'joao_leite@hotmail.com',
  //       password_hash: '12345678',
  //     });
  //   expect(response.status).toBe(400);
  // });
});
