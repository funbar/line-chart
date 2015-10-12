module n3Charts.Utils {
  'use strict';

  export interface IAxisOptions {
    type: string;
    key: string;
    min?: any;
    max?: any;
  }

  export class AxisOptions implements IAxisOptions {
    public type: string = 'linear';
    public key: string = 'x';
    public min: any;
    public max: any;

    public static SIDE = {
        X: 'x',
        Y: 'y'
    };

    public static TYPE = {
      LINEAR: 'linear',
      DATE: 'date'
    };

    constructor(js: any = {}) {
      this.parse(js);
    }

    parse(js: any) {
      this.type = Options.getString(js.type, 'linear');
      this.key = js.key;

      if (this.type === AxisOptions.TYPE.LINEAR) {
        this.min = Options.getNumber(js.min, undefined);
        this.max = Options.getNumber(js.max, undefined);
      } else if (this.type === AxisOptions.TYPE.DATE) {
        this.min = Options.getDate(js.min, undefined);
        this.max = Options.getDate(js.max, undefined);
      }

    }

    static isValidSide(side: string): Boolean {
      return d3.values(AxisOptions.SIDE).indexOf(side) !== -1;
    }
  }
}
