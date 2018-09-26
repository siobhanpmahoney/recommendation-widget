class Container {
  constructor(apiUrl) {
    this.allItems = []
    this.apiUrl = apiUrl

    this.loadAllItems()


  }

  loadAllItems() {
    fetch(this.apiUrl)
    .then(response => response.json())
    .then(json => {
      json.list.forEach((i) =>{
        let newItem = new Item(i)
        return this.allItems.push(newItem.render())

      })
    })

  }

  renderItems() {

    return this.allItems.map((item) => itemDiv).join("")
  }

  render() {
    // this.loadAllItems()
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
