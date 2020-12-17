class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  renderItems = () => {
    this._items.forEach(item => this._renderer(item));
  }

  addItem = (element, isPrepend = false) => {
    isPrepend
      ? document.querySelector(this._containerSelector).prepend(element)
      : document.querySelector(this._containerSelector).append(element);
  }
}

export default Section;