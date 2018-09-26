class Container {
  constructor(allItems) {
    this.allItems = allItems
  }

  renderItems() {
    return this.allItems.map((item) =>{
      let itemDiv = new Item(item)
      return itemDiv.render()
    }).join("")
  }

  render() {

    return (
      `<div class="items">
      ${this.renderItems()}
      </div>`
    )
  }
}
