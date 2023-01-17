export const options = {
  totalItems: 20,
  itemsPerPage: 1,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  usageStatistics: false,
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    disabledMoveButton:
      '<span class="btn-hidden tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
    moveButton: ({ type }) => {
      let template = '';

      if (type === 'first') {
        template =
          '<a href="#" class="tui-page-btn tui-first custom-class-first">' +
          '<span class="tui-ico-first">1</span>' +
          '</a>';
      }
      if (type === 'prev') {
        template =
          '<a href="#" class="arrow tui-page-btn tui-prev custom-class-prev tui-first-child">' +
          '<span class="material-icons-outlined">arrow_back</span>' +
          '</a>';
      }

      if (type === 'next') {
        template =
          '<a href="#" class="arrow tui-page-btn tui-next custom-class-next">' +
          '<span class="material-icons-outlined">arrow_forward</span>' +
          '</a>';
      }

      if (type === 'last') {
        template =
          '<a href="#" class="tui-page-btn tui-last custom-class-last">' +
          '<span class="tui-ico-last">' +
          options.totalItems +
          '</span>' +
          '</a>';
      }

      return template;
    },
  },
};
