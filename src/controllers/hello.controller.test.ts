// helloWorld.test.ts
import { Request, Response } from 'express';

// Import the function to test. Adjust the import path as needed.
import helloController from './hello.controller';

describe('helloWorld function', () => {
  it('should call res.send with "Hello World"', async () => {
    // Create a dummy request object (empty object is fine since _req is unused)
    const req = {} as Request;
    
    // Create a dummy response object with a jest mock for the send method
    const res = {
      send: jest.fn(),
    } as unknown as Response;
    
    // Call the helloWorld function
    await helloController.helloWorld(req, res);
    
    // Assert that res.send was called with the expected message
    expect(res.send).toHaveBeenCalledWith('Hello World');
  });
});
