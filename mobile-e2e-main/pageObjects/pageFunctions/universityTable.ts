import { universityTableLocators } from '../pageLocators/universityTableLocators';
import { logger } from '../../winstonLogger';
export class UniversityTable extends universityTableLocators {
  getSecondTableRowList(lastName: string): any {
    const rowList = [];
    const rowList1 = this.secondTableRowList;
    for (let i = 0; i < rowList1.length; i += 1) {
      const text = rowList1[i].getText();
      if (text.includes(lastName)) {
        const subText = text.split(' ');
        rowList.push(subText[0]);
        rowList.push(subText[2]);
      }
      logger.info(text);
      logger.info(rowList);
    }
    return rowList;
  }

  getFirstTableRowList(): any {
    const rowList = [];
    const rowList2 = [];
    const rowList1 = this.firstTableRowList;
    for (let i = 0; i < rowList1.length; i += 1) {
      const text = rowList1[i].getText();
      const subText = text.split(' ');
      rowList.push(subText[2]);
    }
    for (let j = 0; j < rowList.length; j += 1) {
      if (rowList[j] < 50) {
        const text = rowList1[j].getText();
        const subText = text.split(' ');
        rowList2.push(subText[0]);
        rowList2.push(subText[1]);
      }
    }
    return rowList2;
  }

  getBadgesText(): any {
    const badges1 = [];
    const badges = this.badgesText;
    for (let j = 0; j < badges.length; j += 1) {
      const text = badges[j].getText();
      badges1.push(text);
    }
    return badges1;
  }
}
export default new UniversityTable();
