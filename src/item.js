class Item {

  constructor(item) {
    Object.keys(item).forEach((k) => {
      return this[k] = item[k]
    })
  }

  render() {
    return (
      `
      <div data-id=${this.id} data-item-title='${this.name}' class='item-container'>


          <div class='image-wrapper'>

            <image src='${this.thumbnail[0].url}' class="thumbnail"/>

          </div>

          <div class='item-title-wrapper'>
            ${this.name}
          </div>

          <div class='item-bottom-branding'>
            ${this.branding}
          </div>


      </div>`
    )
  }
}
