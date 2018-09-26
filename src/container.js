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
        <div id="container-header">
          <a id="header-right" href='https://popup.taboola.com/en/' target="_blank">
            Sponsored Links By Taboola
            <img id="image-logo" src='http://popup.taboola.com/images/adchoice-logo.jpg' height='13px'/>
          </a>
          <span id="header-left">
            From Around the Web
          </span>
        </div>
        ${this.renderItems()}
      </div>`
    )
  }
}
