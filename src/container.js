class Container {
  constructor(allItems) {
    this.allItems = allItems


  }
  //
  // loadAllItems() {
  //   fetch(this.apiUrl)
  //   .then(response => response.json())
  //   .then(json => {
  //     json.list.forEach((i) =>{
  //       let newItem = new Item(i)
  //       return this.allItems.push(newItem.render())
  //
  //     })
  //   })
  //
  // }

  renderItems() {

    return this.allItems.map((item) =>{
      let itemDiv = new Item(item)
      return itemDiv.render()
    })
  }

  render() {

    return (
      `<div>
      <span>hi</span>
      <ul class="items">
      ${this.renderItems()}
      </ul>
      </div>`
    )
  }
}
