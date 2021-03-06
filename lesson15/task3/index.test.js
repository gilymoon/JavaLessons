import { createLogger } from './index';

it('should get type === "error"', () => {
    const logger = createLogger();
    logger.error('error');
    const result = logger.getRecords('error')[0].type;

    expect(result).toEqual('error');
})
it('should get type === "log"', () => {
    const logger = createLogger();
    logger.log('log');
    const result = logger.getRecords('log')[0].type;

    expect(result).toEqual('log');
})