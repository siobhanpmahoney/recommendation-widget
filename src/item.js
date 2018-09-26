class Item {
  constructor(item) {
    Object.keys(item).forEach((k) => {

      return this[k] = item[k]

    })

  }

  render() {

    return (
      `<li>${this.name}</li>`
    )
  }
}


// <div data-id=${this.id} data-item-title=${this.name}>
//   <a title=${this.name} href=${this.url} target = "_blank" class="item-thumbnail-href">
//     <div class = "thumbBlock_holder">
//         <span class = "thumbnail-overlay">
//
//         </span>
//
//         <span class = "branding">
//           ${this.name}
//         </span>
//
//     </div>
//   </a>
// </div>
