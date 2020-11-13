import { TestBed } from '@angular/core/testing';

import { ServerHttpErrorInterceptor } from './server-http-error.interceptor';

describe('ServerHttpErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ServerHttpErrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ServerHttpErrorInterceptor = TestBed.inject(ServerHttpErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
