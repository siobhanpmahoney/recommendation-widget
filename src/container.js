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
      itemDiv.render()
    }).join("")
  }

  render() {
    console.log(this.renderItems())
    return (
      `<div>
      <span>hi</span>
      <ul>
      ${this.renderItems()}
      </ul>
      </div>`
    )
  }
}
