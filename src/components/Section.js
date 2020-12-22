class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach(item => this._renderer(item));
  }

  addItem(element, isPrepend = false) {
    isPrepend
      ? this._container.prepend(element)
      : this._container.append(element);
  }
}

export default Section;