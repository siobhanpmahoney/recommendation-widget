class Item {

  constructor(item) {
    Object.keys(item).forEach((k) => {
      return this[k] = item[k]
    })
  }

  render() {
    console.log("in item")
    return (
      `
      <div data-id=${this.id} data-item-title='${this.name}' class='item-container'>


          <div class='image-wrapper'>

            <a href='${this.url}'><image src='${this.thumbnail[0].url}' class="thumbnail"/></a>

          </div>

          <div class='item-title-wrapper'>
            <a href='${this.url}'>${this.name}</a>
          </div>

          <div class='item-bottom-branding'>
            ${this.branding}
          </div>


      </div>`
    )
  }
}
