import { logger } from '../../winstonLogger';
import universityTable from '../../pageObjects/pageFunctions/universityTable';
describe('name validations', () => {
  let tableDetails = [];
  it('should launch the url', () => {
    const urlName = browser.getUrl();
    logger.info('url name:' + urlName);
    tableDetails = universityTable.getBadgesText();
    logger.info('second table details:' + tableDetails);
  });
});
