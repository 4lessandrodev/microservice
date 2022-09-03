import { AppService } from '../app.service';

describe('app.service', () => {
  const service = new AppService();
  it('should return healthCheck', () => {
    const ping = service.ping();
    expect(ping.status).toBe('ok');
  });

  it('should return ok', () => {
    const pong = service.pong();
    expect(pong.status).toBe('ok');
  });
});
