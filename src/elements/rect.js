'use strict';

import {Chart} from 'chart.js';

export const Rect = Chart.Element.extend({
  inRange: function(mouseX, mouseY) {
    const rect = this._view.rect;
    return (
      mouseX >= rect.x.from && mouseX <= rect.x.to &&
            mouseY >= rect.y.from && mouseY <= rect.y.to
    );
  },

  getCenterPoint: function() {
    const vm = this._view;
    return {
      x: vm.x,
      y: vm.y,
    };
  },

  getArea: function() {
    const rect = this._view.rect;
    return rect.x.size * rect.y.size;
  },

  draw: function () {
    const vm = this._view;
    const ctx = this._chart.ctx;

    ctx.save();

    ctx.lineWidth = vm.borderWidth;
    ctx.strokeStyle = vm.borderColor;
    ctx.fillStyle = vm.backgroundColor;

    const rect = vm.rect,
      displacement = vm.borderWidth / 2,
      doubleDisplacement = displacement * 2;

    ctx.fillRect(rect.x.from, rect.y.from, rect.x.size, rect.y.size);
    ctx.strokeRect(rect.x.from + displacement, rect.y.from + displacement, rect.x.size - doubleDisplacement, rect.y.size - doubleDisplacement);

    ctx.restore();
  },
});
