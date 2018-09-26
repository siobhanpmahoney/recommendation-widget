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

            <a href='${this.url}' target='_blank'><image src='${this.thumbnail[0].url}' class="thumbnail"/></a>

          </div>

          <div class='item-title-wrapper'>
            <a href='${this.url}' target='_blank'>${this.name}</a>
          </div>

          <a href='${this.url}' target='_blank'>
          <div class='item-bottom-branding'>
            <span class="category">${this.categories ? (
               `${this.categories[0]} | `
             )
               : (
                 ""
               )
             }</span>
               ${this.branding}
          </div>
          </a>


      </div>`
    )
  }
}
