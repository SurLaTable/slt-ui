webpackJsonpmaterial_ui([3],{

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(393);

var _style2 = _interopRequireDefault(_style);

var _ownerDocument = __webpack_require__(19);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _scrollbarSize = __webpack_require__(385);

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _isOverflowing = __webpack_require__(401);

var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

var _manageAriaHidden = __webpack_require__(403);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function findIndexOf(data, callback) {
  var idx = -1;
  data.some(function (item, index) {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}

function findContainer(data, modal) {
  return findIndexOf(data, function (item) {
    return item.modals.indexOf(modal) !== -1;
  });
}

function getPaddingRight(node) {
  return parseInt((0, _style2.default)(node, 'paddingRight') || 0, 10);
}

function setContainerStyle(data, container) {
  var style = { overflow: 'hidden' };

  // We are only interested in the actual `style` here because we will override it.
  data.style = {
    overflow: container.style.overflow,
    paddingRight: container.style.paddingRight
  };

  if (data.overflowing) {
    var scrollbarSize = (0, _scrollbarSize2.default)();

    // Use computed style, here to get the real padding to add our scrollbar width.
    style.paddingRight = getPaddingRight(container) + scrollbarSize + 'px';

    // .mui-fixed is a global helper.
    var fixedNodes = (0, _ownerDocument2.default)(container).querySelectorAll('.mui-fixed');
    for (var i = 0; i < fixedNodes.length; i += 1) {
      var paddingRight = getPaddingRight(fixedNodes[i]);
      data.prevPaddings.push(paddingRight);
      fixedNodes[i].style.paddingRight = paddingRight + scrollbarSize + 'px';
    }
  }

  Object.keys(style).forEach(function (key) {
    container.style[key] = style[key];
  });
}

function removeContainerStyle(data, container) {
  Object.keys(data.style).forEach(function (key) {
    container.style[key] = data.style[key];
  });

  var fixedNodes = (0, _ownerDocument2.default)(container).querySelectorAll('.mui-fixed');
  for (var i = 0; i < fixedNodes.length; i += 1) {
    fixedNodes[i].style.paddingRight = data.prevPaddings[i] + 'px';
  }
}
/**
 * @ignore - do not document.
 *
 * Proper state managment for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class
 * Used by the Modal to ensure proper styling of containers.
 */

var ModalManager = function () {
  function ModalManager() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$hideSiblingNodes = _ref.hideSiblingNodes,
        hideSiblingNodes = _ref$hideSiblingNodes === undefined ? true : _ref$hideSiblingNodes,
        _ref$handleContainerO = _ref.handleContainerOverflow,
        handleContainerOverflow = _ref$handleContainerO === undefined ? true : _ref$handleContainerO;

    _classCallCheck(this, ModalManager);

    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    // this.modals[modalIdx] = modal
    this.modals = [];
    // this.containers[containerIdx] = container
    this.containers = [];
    // this.data[containerIdx] = {
    //   modals: [],
    // }
    this.data = [];
  }

  _createClass(ModalManager, [{
    key: 'add',
    value: function add(modal, container) {
      var modalIdx = this.modals.indexOf(modal);
      var containerIdx = this.containers.indexOf(container);

      if (modalIdx !== -1) {
        return modalIdx;
      }

      modalIdx = this.modals.length;
      this.modals.push(modal);

      if (this.hideSiblingNodes) {
        (0, _manageAriaHidden.hideSiblings)(container, modal.mountNode);
      }

      if (containerIdx !== -1) {
        this.data[containerIdx].modals.push(modal);
        return modalIdx;
      }

      var data = {
        modals: [modal],
        overflowing: (0, _isOverflowing2.default)(container),
        prevPaddings: []
      };

      if (this.handleContainerOverflow) {
        setContainerStyle(data, container);
      }

      this.containers.push(container);
      this.data.push(data);

      return modalIdx;
    }
  }, {
    key: 'remove',
    value: function remove(modal) {
      var modalIdx = this.modals.indexOf(modal);

      if (modalIdx === -1) {
        return modalIdx;
      }

      var containerIdx = findContainer(this.data, modal);
      var data = this.data[containerIdx];
      var container = this.containers[containerIdx];

      data.modals.splice(data.modals.indexOf(modal), 1);
      this.modals.splice(modalIdx, 1);

      // If that was the last modal in a container, clean up the container.
      if (data.modals.length === 0) {
        if (this.handleContainerOverflow) {
          removeContainerStyle(data, container);
        }

        if (this.hideSiblingNodes) {
          (0, _manageAriaHidden.showSiblings)(container, modal.mountNode);
        }
        this.containers.splice(containerIdx, 1);
        this.data.splice(containerIdx, 1);
      } else if (this.hideSiblingNodes) {
        // Otherwise make sure the next top modal is visible to a SR.
        (0, _manageAriaHidden.ariaHidden)(false, data.modals[data.modals.length - 1].mountNode);
      }

      return modalIdx;
    }
  }, {
    key: 'isTopModal',
    value: function isTopModal(modal) {
      return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
    }
  }]);

  return ModalManager;
}();

exports.default = ModalManager;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTW9kYWxcXE1vZGFsTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJmaW5kSW5kZXhPZiIsImRhdGEiLCJjYWxsYmFjayIsImlkeCIsInNvbWUiLCJpdGVtIiwiaW5kZXgiLCJmaW5kQ29udGFpbmVyIiwibW9kYWwiLCJtb2RhbHMiLCJpbmRleE9mIiwiZ2V0UGFkZGluZ1JpZ2h0Iiwibm9kZSIsInBhcnNlSW50Iiwic2V0Q29udGFpbmVyU3R5bGUiLCJjb250YWluZXIiLCJzdHlsZSIsIm92ZXJmbG93IiwicGFkZGluZ1JpZ2h0Iiwib3ZlcmZsb3dpbmciLCJzY3JvbGxiYXJTaXplIiwiZml4ZWROb2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwicHJldlBhZGRpbmdzIiwicHVzaCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicmVtb3ZlQ29udGFpbmVyU3R5bGUiLCJNb2RhbE1hbmFnZXIiLCJoaWRlU2libGluZ05vZGVzIiwiaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3ciLCJjb250YWluZXJzIiwibW9kYWxJZHgiLCJjb250YWluZXJJZHgiLCJtb3VudE5vZGUiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsSUFBckIsRUFBMkJDLFFBQTNCLEVBQXFDO0FBQ25DLE1BQUlDLE1BQU0sQ0FBQyxDQUFYO0FBQ0FGLE9BQUtHLElBQUwsQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDekIsUUFBSUosU0FBU0csSUFBVCxDQUFKLEVBQW9CO0FBQ2xCRixZQUFNRyxLQUFOO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxXQUFPLEtBQVA7QUFDRCxHQU5EO0FBT0EsU0FBT0gsR0FBUDtBQUNEOztBQUVELFNBQVNJLGFBQVQsQ0FBdUJOLElBQXZCLEVBQTZCTyxLQUE3QixFQUFvQztBQUNs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QUFNdEIsWUFBWSxLQUFLb0IsVUFBTCxDQUFnQkUsWUFBaEIsQ0FBbEI7O0FBRUFwQyxXQUFLUSxNQUFMLENBQVk4QixNQUFaLENBQW1CdEMsS0FBS1EsTUFBTCxDQUFZQyxPQUFaLENBQW9CRixLQUFwQixDQUFuQixFQUErQyxDQUEvQztBQUNBLFdBQUtDLE1BQUwsQ0FBWThCLE1BQVosQ0FBbUJILFFBQW5CLEVBQTZCLENBQTdCOztBQUVBO0FBQ0EsVUFBSW5DLEtBQUtRLE1BQUwsQ0FBWWUsTUFBWixLQUF1QixDQUEzQixFQUE4QjtBQUM1QixZQUFJLEtBQUtVLHVCQUFULEVBQWtDO0FBQ2hDSCwrQkFBcUI5QixJQUFyQixFQUEyQmMsU0FBM0I7QUFDRDs7QUFFRCxZQUFJLEtBQUtrQixnQkFBVCxFQUEyQjtBQUN6Qiw4Q0FBYWxCLFNBQWIsRUFBd0JQLE1BQU04QixTQUE5QjtBQUNEO0FBQ0QsYUFBS0gsVUFBTCxDQUFnQkksTUFBaEIsQ0FBdUJGLFlBQXZCLEVBQXFDLENBQXJDO0FBQ0EsYUFBS3BDLElBQUwsQ0FBVXNDLE1BQVYsQ0FBaUJGLFlBQWpCLEVBQStCLENBQS9CO0FBQ0QsT0FWRCxNQVVPLElBQUksS0FBS0osZ0JBQVQsRUFBMkI7QUFDaEM7QUFDQSwwQ0FBVyxLQUFYLEVBQWtCaEMsS0FBS1EsTUFBTCxDQUFZUixLQUFLUSxNQUFMLENBQVllLE1BQVosR0FBcUIsQ0FBakMsRUFBb0NjLFNBQXREO0FBQ0Q7O0FBRUQsYUFBT0YsUUFBUDtBQUNEOzs7K0JBRVU1QixLLEVBQU87QUFDaEIsYUFBTyxDQUFDLENBQUMsS0FBS0MsTUFBTCxDQUFZZSxNQUFkLElBQXdCLEtBQUtmLE1BQUwsQ0FBWSxLQUFLQSxNQUFMLENBQVllLE1BQVosR0FBcUIsQ0FBakMsTUFBd0NoQixLQUF2RTtBQUNEOzs7Ozs7a0JBR1l3QixZIiwiZmlsZSI6Ik1vZGFsTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnZG9tLWhlbHBlcnMvc3R5bGUnO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnZG9tLWhlbHBlcnMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgZ2V0U2Nyb2xsYmFyU2l6ZSBmcm9tICdkb20taGVscGVycy91dGlsL3Njcm9sbGJhclNpemUnO1xuaW1wb3J0IGlzT3ZlcmZsb3dpbmcgZnJvbSAnLi9pc092ZXJmbG93aW5nJztcbmltcG9ydCB7IGFyaWFIaWRkZW4sIGhpZGVTaWJsaW5ncywgc2hvd1NpYmxpbmdzIH0gZnJvbSAnLi9tYW5hZ2VBcmlhSGlkZGVuJztcblxuZnVuY3Rpb24gZmluZEluZGV4T2YoZGF0YSwgY2FsbGJhY2spIHtcbiAgbGV0IGlkeCA9IC0xO1xuICBkYXRhLnNvbWUoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGNhbGxiYWNrKGl0ZW0pKSB7XG4gICAgICBpZHggPSBpbmRleDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4gaWR4O1xufVxuXG5mdW5jdGlvbiBmaW5kQ29udGFpbmVyKGRhdGEsIG1vZGFsKSB7XG4gIHJldHVybiBmaW5kSW5kZXhPZihkYXRhLCBpdGVtID0+IGl0ZW0ubW9kYWxzLmluZGV4T2YobW9kYWwpICE9PSAtMSk7XG59XG5cbmZ1bmN0aW9uIGdldFBhZGRpbmdSaWdodChub2RlKSB7XG4gIHJldHVybiBwYXJzZUludChjc3Mobm9kZSwgJ3BhZGRpbmdSaWdodCcpIHx8IDAsIDEwKTtcbn1cblxuZnVuY3Rpb24gc2V0Q29udGFpbmVyU3R5bGUoZGF0YSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IHN0eWxlID0geyBvdmVyZmxvdzogJ2hpZGRlbicgfTtcblxuICAvLyBXZSBhcmUgb25seSBpbnRlcmVzdGVkIGluIHRoZSBhY3R1YWwgYHN0eWxlYCBoZXJlIGJlY2F1c2Ugd2Ugd2lsbCBvdmVycmlkZSBpdC5cbiAgZGF0YS5zdHlsZSA9IHtcbiAgICBvdmVyZmxvdzogY29udGFpbmVyLnN0eWxlLm92ZXJmbG93LFxuICAgIHBhZGRpbmdSaWdodDogY29udGFpbmVyLnN0eWxlLnBhZGRpbmdSaWdodCxcbiAgfTtcblxuICBpZiAoZGF0YS5vdmVyZmxvd2luZykge1xuICAgIGNvbnN0IHNjcm9sbGJhclNpemUgPSBnZXRTY3JvbGxiYXJTaXplKCk7XG5cbiAgICAvLyBVc2UgY29tcHV0ZWQgc3R5bGUsIGhlcmUgdG8gZ2V0IHRoZSByZWFsIHBhZGRpbmcgdG8gYWRkIG91ciBzY3JvbGxiYXIgd2lkdGguXG4gICAgc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7Z2V0UGFkZGluZ1JpZ2h0KGNvbnRhaW5lcikgKyBzY3JvbGxiYXJTaXplfXB4YDtcblxuICAgIC8vIC5tdWktZml4ZWQgaXMgYSBnbG9iYWwgaGVscGVyLlxuICAgIGNvbnN0IGZpeGVkTm9kZXMgPSBvd25lckRvY3VtZW50KGNvbnRhaW5lcikucXVlcnlTZWxlY3RvckFsbCgnLm11aS1maXhlZCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZml4ZWROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcGFkZGluZ1JpZ2h0ID0gZ2V0UGFkZGluZ1JpZ2h0KGZpeGVkTm9kZXNbaV0pO1xuICAgICAgZGF0YS5wcmV2UGFkZGluZ3MucHVzaChwYWRkaW5nUmlnaHQpO1xuICAgICAgZml4ZWROb2Rlc1tpXS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtwYWRkaW5nUmlnaHQgKyBzY3JvbGxiYXJTaXplfXB4YDtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnRhaW5lci5zdHlsZVtrZXldID0gc3R5bGVba2V5XTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNvbnRhaW5lclN0eWxlKGRhdGEsIGNvbnRhaW5lcikge1xuICBPYmplY3Qua2V5cyhkYXRhLnN0eWxlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29udGFpbmVyLnN0eWxlW2tleV0gPSBkYXRhLnN0eWxlW2tleV07XG4gIH0pO1xuXG4gIGNvbnN0IGZpeGVkTm9kZXMgPSBvd25lckRvY3VtZW50KGNvbnRhaW5lcikucXVlcnlTZWxlY3RvckFsbCgnLm11aS1maXhlZCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpeGVkTm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBmaXhlZE5vZGVzW2ldLnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke2RhdGEucHJldlBhZGRpbmdzW2ldfXB4YDtcbiAgfVxufVxuLyoqXG4gKiBAaWdub3JlIC0gZG8gbm90IGRvY3VtZW50LlxuICpcbiAqIFByb3BlciBzdGF0ZSBtYW5hZ21lbnQgZm9yIGNvbnRhaW5lcnMgYW5kIHRoZSBtb2RhbHMgaW4gdGhvc2UgY29udGFpbmVycy5cbiAqIFNpbXBsaWZpZWQsIGJ1dCBpbnNwaXJlZCBieSByZWFjdC1vdmVybGF5J3MgTW9kYWxNYW5hZ2VyIGNsYXNzXG4gKiBVc2VkIGJ5IHRoZSBNb2RhbCB0byBlbnN1cmUgcHJvcGVyIHN0eWxpbmcgb2YgY29udGFpbmVycy5cbiAqL1xuY2xhc3MgTW9kYWxNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoeyBoaWRlU2libGluZ05vZGVzID0gdHJ1ZSwgaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3cgPSB0cnVlIH0gPSB7fSkge1xuICAgIHRoaXMuaGlkZVNpYmxpbmdOb2RlcyA9IGhpZGVTaWJsaW5nTm9kZXM7XG4gICAgdGhpcy5oYW5kbGVDb250YWluZXJPdmVyZmxvdyA9IGhhbmRsZUNvbnRhaW5lck92ZXJmbG93O1xuICAgIC8vIHRoaXMubW9kYWxzW21vZGFsSWR4XSA9IG1vZGFsXG4gICAgdGhpcy5tb2RhbHMgPSBbXTtcbiAgICAvLyB0aGlzLmNvbnRhaW5lcnNbY29udGFpbmVySWR4XSA9IGNvbnRhaW5lclxuICAgIHRoaXMuY29udGFpbmVycyA9IFtdO1xuICAgIC8vIHRoaXMuZGF0YVtjb250YWluZXJJZHhdID0ge1xuICAgIC8vICAgbW9kYWxzOiBbXSxcbiAgICAvLyB9XG4gICAgdGhpcy5kYXRhID0gW107XG4gIH1cblxuICBhZGQobW9kYWwsIGNvbnRhaW5lcikge1xuICAgIGxldCBtb2RhbElkeCA9IHRoaXMubW9kYWxzLmluZGV4T2YobW9kYWwpO1xuICAgIGNvbnN0IGNvbnRhaW5lcklkeCA9IHRoaXMuY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lcik7XG5cbiAgICBpZiAobW9kYWxJZHggIT09IC0xKSB7XG4gICAgICByZXR1cm4gbW9kYWxJZHg7XG4gICAgfVxuXG4gICAgbW9kYWxJZHggPSB0aGlzLm1vZGFscy5sZW5ndGg7XG4gICAgdGhpcy5tb2RhbHMucHVzaChtb2RhbCk7XG5cbiAgICBpZiAodGhpcy5oaWRlU2libGluZ05vZGVzKSB7XG4gICAgICBoaWRlU2libGluZ3MoY29udGFpbmVyLCBtb2RhbC5tb3VudE5vZGUpO1xuICAgIH1cblxuICAgIGlmIChjb250YWluZXJJZHggIT09IC0xKSB7XG4gICAgICB0aGlzLmRhdGFbY29udGFpbmVySWR4XS5tb2RhbHMucHVzaChtb2RhbCk7XG4gICAgICByZXR1cm4gbW9kYWxJZHg7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG1vZGFsczogW21vZGFsXSxcbiAgICAgIG92ZXJmbG93aW5nOiBpc092ZXJmbG93aW5nKGNvbnRhaW5lciksXG4gICAgICBwcmV2UGFkZGluZ3M6IFtdLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5oYW5kbGVDb250YWluZXJPdmVyZmxvdykge1xuICAgICAgc2V0Q29udGFpbmVyU3R5bGUoZGF0YSwgY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lcnMucHVzaChjb250YWluZXIpO1xuICAgIHRoaXMuZGF0YS5wdXNoKGRhdGEpO1xuXG4gICAgcmV0dXJuIG1vZGFsSWR4O1xuICB9XG5cbiAgcmVtb3ZlKG1vZGFsKSB7XG4gICAgY29uc3QgbW9kYWxJZHggPSB0aGlzLm1vZGFscy5pbmRleE9mKG1vZGFsKTtcblxuICAgIGlmIChtb2RhbElkeCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBtb2RhbElkeDtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXJJZHggPSBmaW5kQ29udGFpbmVyKHRoaXMuZGF0YSwgbW9kYWwpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFbY29udGFpbmVySWR4XTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcnNbY29udGFpbmVySWR4XTtcblxuICAgIGRhdGEubW9kYWxzLnNwbGljZShkYXRhLm1vZGFscy5pbmRleE9mKG1vZGFsKSwgMSk7XG4gICAgdGhpcy5tb2RhbHMuc3BsaWNlKG1vZGFsSWR4LCAxKTtcblxuICAgIC8vIElmIHRoYXQgd2FzIHRoZSBsYXN0IG1vZGFsIGluIGEgY29udGFpbmVyLCBjbGVhbiB1cCB0aGUgY29udGFpbmVyLlxuICAgIGlmIChkYXRhLm1vZGFscy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh0aGlzLmhhbmRsZUNvbnRhaW5lck92ZXJmbG93KSB7XG4gICAgICAgIHJlbW92ZUNvbnRhaW5lclN0eWxlKGRhdGEsIGNvbnRhaW5lcik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmhpZGVTaWJsaW5nTm9kZXMpIHtcbiAgICAgICAgc2hvd1NpYmxpbmdzKGNvbnRhaW5lciwgbW9kYWwubW91bnROb2RlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udGFpbmVycy5zcGxpY2UoY29udGFpbmVySWR4LCAxKTtcbiAgICAgIHRoaXMuZGF0YS5zcGxpY2UoY29udGFpbmVySWR4LCAxKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGlkZVNpYmxpbmdOb2Rlcykge1xuICAgICAgLy8gT3RoZXJ3aXNlIG1ha2Ugc3VyZSB0aGUgbmV4dCB0b3AgbW9kYWwgaXMgdmlzaWJsZSB0byBhIFNSLlxuICAgICAgYXJpYUhpZGRlbihmYWxzZSwgZGF0YS5tb2RhbHNbZGF0YS5tb2RhbHMubGVuZ3RoIC0gMV0ubW91bnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9kYWxJZHg7XG4gIH1cblxuICBpc1RvcE1vZGFsKG1vZGFsKSB7XG4gICAgcmV0dXJuICEhdGhpcy5tb2RhbHMubGVuZ3RoICYmIHRoaXMubW9kYWxzW3RoaXMubW9kYWxzLmxlbmd0aCAtIDFdID09PSBtb2RhbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbE1hbmFnZXI7XG4iXX0=

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM2.default) {
      var scrollDiv = document.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
};

var _inDOM = __webpack_require__(107);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = void 0;

module.exports = exports['default'];

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelizeStyleName;

var _camelize = __webpack_require__(394);

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^-ms-/; /**
                          * Copyright 2014-2015, Facebook, Inc.
                          * All rights reserved.
                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
                          */
function camelizeStyleName(string) {
  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
}
module.exports = exports['default'];

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = style;

var _camelizeStyle = __webpack_require__(388);

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

var _hyphenateStyle = __webpack_require__(395);

var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

var _getComputedStyle2 = __webpack_require__(397);

var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);

var _removeStyle = __webpack_require__(398);

var _removeStyle2 = _interopRequireDefault(_removeStyle);

var _properties = __webpack_require__(399);

var _isTransform = __webpack_require__(400);

var _isTransform2 = _interopRequireDefault(_isTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function style(node, property, value) {
  var css = '';
  var transforms = '';
  var props = property;

  if (typeof property === 'string') {
    if (value === undefined) {
      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
    } else {
      (props = {})[property] = value;
    }
  }

  Object.keys(props).forEach(function (key) {
    var value = props[key];
    if (!value && value !== 0) {
      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
    } else if ((0, _isTransform2.default)(key)) {
      transforms += key + '(' + value + ') ';
    } else {
      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
    }
  });

  if (transforms) {
    css += _properties.transform + ': ' + transforms + ';';
  }

  node.style.cssText += ';' + css;
}
module.exports = exports['default'];

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelize;
var rHyphen = /-(.)/g;

function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}
module.exports = exports["default"];

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateStyleName;

var _hyphenate = __webpack_require__(396);

var _hyphenate2 = _interopRequireDefault(_hyphenate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^ms-/; /**
                         * Copyright 2013-2014, Facebook, Inc.
                         * All rights reserved.
                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
                         */

function hyphenateStyleName(string) {
  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
}
module.exports = exports['default'];

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenate;

var rUpper = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
module.exports = exports['default'];

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getComputedStyle;

var _camelizeStyle = __webpack_require__(388);

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;

  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;

      prop = (0, _camelizeStyle2.default)(prop);

      if (prop == 'float') prop = 'styleFloat';

      var current = node.currentStyle[prop] || null;

      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left;

        // Put in the new values to get a computed value out
        if (rsLeft) runStyle.left = node.currentStyle.left;

        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px';

        // Revert the changed values
        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
}
module.exports = exports['default'];

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeStyle;
function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
}
module.exports = exports['default'];

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(107);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function isTransform(property) {
  return !!(property && supportedTransforms.test(property));
}
module.exports = exports["default"];

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBody = isBody;
exports.default = isOverflowing;

var _isWindow = __webpack_require__(402);

var _isWindow2 = _interopRequireDefault(_isWindow);

var _ownerDocument = __webpack_require__(19);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _ownerWindow = __webpack_require__(108);

var _ownerWindow2 = _interopRequireDefault(_ownerWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

// Do we have a scroll bar?
function isOverflowing(container) {
  var doc = (0, _ownerDocument2.default)(container);
  var win = (0, _ownerWindow2.default)(doc);

  /* istanbul ignore next */
  if (!(0, _isWindow2.default)(doc) && !isBody(container)) {
    return container.scrollHeight > container.clientHeight;
  }

  // Takes in account potential non zero margin on the body.
  var style = win.getComputedStyle(doc.body);
  var marginLeft = parseInt(style.getPropertyValue('margin-left'), 10);
  var marginRight = parseInt(style.getPropertyValue('margin-right'), 10);

  return marginLeft + doc.body.clientWidth + marginRight < win.innerWidth;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTW9kYWxcXGlzT3ZlcmZsb3dpbmcuanMiXSwibmFtZXMiOlsiaXNCb2R5IiwiaXNPdmVyZmxvd2luZyIsIm5vZGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJjb250YWluZXIiLCJkb2MiLCJ3aW4iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJib2R5IiwibWFyZ2luTGVmdCIsInBhcnNlSW50IiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm1hcmdpblJpZ2h0IiwiY2xpZW50V2lkdGgiLCJpbm5lcldpZHRoIl0sIm1hcHBpbmdzIjoiOzs7OztRQUlnQkEsTSxHQUFBQSxNO2tCQUtRQyxhOztBQVR4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVPLFNBQVNELE1BQVQsQ0FBZ0JFLElBQWhCLEVBQXNCO0FBQzNCLFNBQU9BLFFBQVFBLEtBQUtDLE9BQUwsQ0FBYUMsV0FBYixPQUErQixNQUE5QztBQUNEOztBQUVEO0FBQ2UsU0FBU0gsYUFBVCxDQUF1QkksU0FBdkIsRUFBa0M7QUFDL0MsTUFBTUMsTUFBTSw2QkFBY0QsU0FBZCxDQUFaO0FBQ0EsTUFBTUUsTUFBTSwyQkFBWUQsR0FBWixDQUFaOztBQUVBO0FBQ0EsTUFBSSxDQUFDLHdCQUFTQSxHQUFULENBQUQsSUFBa0IsQ0FBQ04sT0FBT0ssU0FBUCxDQUF2QixFQUEwQztBQUN4QyxXQUFPQSxVQUFVRyxZQUFWLEdBQXlCSCxVQUFVSSxZQUExQztBQUNEOztBQUVEO0FBQ0EsTUFBTUMsUUFBUUgsSUFBSUksZ0JBQUosQ0FBcUJMLElBQUlNLElBQXpCLENBQWQ7QUFDQSxNQUFNQyxhQUFhQyxTQUFTSixNQUFNSyxnQkFBTixDQUF1QixhQUF2QixDQUFULEVBQWdELEVBQWhELENBQW5CO0FBQ0EsTUFBTUMsY0FBY0YsU0FBU0osTUFBTUssZ0JBQU4sQ0FBdUIsY0FBdkIsQ0FBVCxFQUFpRCxFQUFqRCxDQUFwQjs7QUFFQSxTQUFPRixhQUFhUCxJQUFJTSxJQUFKLENBQVNLLFdBQXRCLEdBQW9DRCxXQUFwQyxHQUFrRFQsSUFBSVcsVUFBN0Q7QUFDRCIsImZpbGUiOiJpc092ZXJmbG93aW5nLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzV2luZG93IGZyb20gJ2RvbS1oZWxwZXJzL3F1ZXJ5L2lzV2luZG93JztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJ2RvbS1oZWxwZXJzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IG93bmVyV2luZG93IGZyb20gJ2RvbS1oZWxwZXJzL293bmVyV2luZG93JztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9keShub2RlKSB7XG4gIHJldHVybiBub2RlICYmIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYm9keSc7XG59XG5cbi8vIERvIHdlIGhhdmUgYSBzY3JvbGwgYmFyP1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPdmVyZmxvd2luZyhjb250YWluZXIpIHtcbiAgY29uc3QgZG9jID0gb3duZXJEb2N1bWVudChjb250YWluZXIpO1xuICBjb25zdCB3aW4gPSBvd25lcldpbmRvdyhkb2MpO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmICghaXNXaW5kb3coZG9jKSAmJiAhaXNCb2R5KGNvbnRhaW5lcikpIHtcbiAgICByZXR1cm4gY29udGFpbmVyLnNjcm9sbEhlaWdodCA+IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gIH1cblxuICAvLyBUYWtlcyBpbiBhY2NvdW50IHBvdGVudGlhbCBub24gemVybyBtYXJnaW4gb24gdGhlIGJvZHkuXG4gIGNvbnN0IHN0eWxlID0gd2luLmdldENvbXB1dGVkU3R5bGUoZG9jLmJvZHkpO1xuICBjb25zdCBtYXJnaW5MZWZ0ID0gcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWxlZnQnKSwgMTApO1xuICBjb25zdCBtYXJnaW5SaWdodCA9IHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1yaWdodCcpLCAxMCk7XG5cbiAgcmV0dXJuIG1hcmdpbkxlZnQgKyBkb2MuYm9keS5jbGllbnRXaWR0aCArIG1hcmdpblJpZ2h0IDwgd2luLmlubmVyV2lkdGg7XG59XG4iXX0=

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindow;
function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}
module.exports = exports["default"];

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ariaHidden = ariaHidden;
exports.hideSiblings = hideSiblings;
exports.showSiblings = showSiblings;
var BLACKLIST = ['template', 'script', 'style'];

function isHidable(node) {
  return node.nodeType === 1 && BLACKLIST.indexOf(node.tagName.toLowerCase()) === -1;
}

function siblings(container, mount, callback) {
  mount = [].concat(mount); // eslint-disable-line no-param-reassign
  [].forEach.call(container.children, function (node) {
    if (mount.indexOf(node) === -1 && isHidable(node)) {
      callback(node);
    }
  });
}

function ariaHidden(show, node) {
  if (!node) {
    return;
  }
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function hideSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(true, node);
  });
}

function showSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(false, node);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTW9kYWxcXG1hbmFnZUFyaWFIaWRkZW4uanMiXSwibmFtZXMiOlsiYXJpYUhpZGRlbiIsImhpZGVTaWJsaW5ncyIsInNob3dTaWJsaW5ncyIsIkJMQUNLTElTVCIsImlzSGlkYWJsZSIsIm5vZGUiLCJub2RlVHlwZSIsImluZGV4T2YiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJzaWJsaW5ncyIsImNvbnRhaW5lciIsIm1vdW50IiwiY2FsbGJhY2siLCJjb25jYXQiLCJmb3JFYWNoIiwiY2FsbCIsImNoaWxkcmVuIiwic2hvdyIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm1vdW50Tm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFlZ0JBLFUsR0FBQUEsVTtRQVdBQyxZLEdBQUFBLFk7UUFJQUMsWSxHQUFBQSxZO0FBOUJoQixJQUFNQyxZQUFZLENBQUMsVUFBRCxFQUFhLFFBQWIsRUFBdUIsT0FBdkIsQ0FBbEI7O0FBRUEsU0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7QUFDdkIsU0FBT0EsS0FBS0MsUUFBTCxLQUFrQixDQUFsQixJQUF1QkgsVUFBVUksT0FBVixDQUFrQkYsS0FBS0csT0FBTCxDQUFhQyxXQUFiLEVBQWxCLE1BQWtELENBQUMsQ0FBakY7QUFDRDs7QUFFRCxTQUFTQyxRQUFULENBQWtCQyxTQUFsQixFQUE2QkMsS0FBN0IsRUFBb0NDLFFBQXBDLEVBQThDO0FBQzVDRCxVQUFRLEdBQUdFLE1BQUgsQ0FBVUYsS0FBVixDQUFSLENBRDRDLENBQ2xCO0FBQzFCLEtBQUdHLE9BQUgsQ0FBV0MsSUFBWCxDQUFnQkwsVUFBVU0sUUFBMUIsRUFBb0MsZ0JBQVE7QUFDMUMsUUFBSUwsTUFBTUwsT0FBTixDQUFjRixJQUFkLE1BQXdCLENBQUMsQ0FBekIsSUFBOEJELFVBQVVDLElBQVYsQ0FBbEMsRUFBbUQ7QUFDakRRLGVBQVNSLElBQVQ7QUFDRDtBQUNGLEdBSkQ7QUFLRDs7QUFFTSxTQUFTTCxVQUFULENBQW9Ca0IsSUFBcEIsRUFBMEJiLElBQTFCLEVBQWdDO0FBQ3JDLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1Q7QUFDRDtBQUNELE1BQUlhLElBQUosRUFBVTtBQUNSYixTQUFLYyxZQUFMLENBQWtCLGFBQWxCLEVBQWlDLE1BQWpDO0FBQ0QsR0FGRCxNQUVPO0FBQ0xkLFNBQUtlLGVBQUwsQ0FBcUIsYUFBckI7QUFDRDtBQUNGOztBQUVNLFNBQVNuQixZQUFULENBQXNCVSxTQUF0QixFQUFpQ1UsU0FBakMsRUFBNEM7QUFDakRYLFdBQVNDLFNBQVQsRUFBb0JVLFNBQXBCLEVBQStCO0FBQUEsV0FBUXJCLFdBQVcsSUFBWCxFQUFpQkssSUFBakIsQ0FBUjtBQUFBLEdBQS9CO0FBQ0Q7O0FBRU0sU0FBU0gsWUFBVCxDQUFzQlMsU0FBdEIsRUFBaUNVLFNBQWpDLEVBQTRDO0FBQ2pEWCxXQUFTQyxTQUFULEVBQW9CVSxTQUFwQixFQUErQjtBQUFBLFdBQVFyQixXQUFXLEtBQVgsRUFBa0JLLElBQWxCLENBQVI7QUFBQSxHQUEvQjtBQUNEIiwiZmlsZSI6Im1hbmFnZUFyaWFIaWRkZW4uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCTEFDS0xJU1QgPSBbJ3RlbXBsYXRlJywgJ3NjcmlwdCcsICdzdHlsZSddO1xuXG5mdW5jdGlvbiBpc0hpZGFibGUobm9kZSkge1xuICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBCTEFDS0xJU1QuaW5kZXhPZihub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkgPT09IC0xO1xufVxuXG5mdW5jdGlvbiBzaWJsaW5ncyhjb250YWluZXIsIG1vdW50LCBjYWxsYmFjaykge1xuICBtb3VudCA9IFtdLmNvbmNhdChtb3VudCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgW10uZm9yRWFjaC5jYWxsKGNvbnRhaW5lci5jaGlsZHJlbiwgbm9kZSA9PiB7XG4gICAgaWYgKG1vdW50LmluZGV4T2Yobm9kZSkgPT09IC0xICYmIGlzSGlkYWJsZShub2RlKSkge1xuICAgICAgY2FsbGJhY2sobm9kZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyaWFIaWRkZW4oc2hvdywgbm9kZSkge1xuICBpZiAoIW5vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHNob3cpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlU2libGluZ3MoY29udGFpbmVyLCBtb3VudE5vZGUpIHtcbiAgc2libGluZ3MoY29udGFpbmVyLCBtb3VudE5vZGUsIG5vZGUgPT4gYXJpYUhpZGRlbih0cnVlLCBub2RlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93U2libGluZ3MoY29udGFpbmVyLCBtb3VudE5vZGUpIHtcbiAgc2libGluZ3MoY29udGFpbmVyLCBtb3VudE5vZGUsIG5vZGUgPT4gYXJpYUhpZGRlbihmYWxzZSwgbm9kZSkpO1xufVxuIl19

/***/ })

});