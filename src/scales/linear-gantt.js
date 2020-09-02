'use strict';

import {ScaleUtils} from './scale-utils';

export function LinearGanttScale(Chart) {

  const scale = Chart.scaleService.getScaleConstructor('linear').extend({
    getRightValue: function (rawValue) {
      return ScaleUtils.getRightValue(this, rawValue);
    },

    determineDataLimits: function () {
      ScaleUtils.determineDataLimits(this);
      this.handleTickRangeOptions();
    },

    getLabelForIndex: function (index, datasetIndex) {
      return ScaleUtils.getLabelForIndex(this, index, datasetIndex);
    },
  });
  ScaleUtils.extendScale(Chart, 'linear', 'linear-gantt', scale);
}
