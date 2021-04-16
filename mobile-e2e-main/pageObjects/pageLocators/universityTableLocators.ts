import { ElementArray } from '@wdio/sync';
export class universityTableLocators {
  get secondTableRowList(): ElementArray {
    return $$('#t02 tr');
  }

  get firstTableRowList(): ElementArray {
    return $$('#t01 tr');
  }

  get badgesText(): ElementArray {
    return $$(
      'body > div > div:nth-child(4) > div > ul > li:nth-child(2)> span',
    );
  }
}
