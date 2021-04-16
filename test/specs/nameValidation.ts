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
  it('should get first table details', () => {
    tableDetails = universityTable.getFirstTableRowList();
    logger.info('First table details:' + tableDetails);
  });
  it('should get second table details', () => {
    tableDetails = universityTable.getFirstTableRowList('samson');
    logger.info('second table details:' + tableDetails);
  });
});
