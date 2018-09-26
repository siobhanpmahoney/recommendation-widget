class Widget {
  constructor(apiUrl) {
    this.apiUrl = apiUrl
    this.recommendations = []

  }

  init() {
    fetch(this.apiUrl)
    .then(response => response.json())
    .then(json => json.list.forEach((i) => this.recommendations.push(i)))
    .then(() => this.renderWidget())
  }


  renderWidget() {
    const listDiv = document.getElementById("widget-container");
    const container = new Container(this.recommendations)
    listDiv.innerHTML = container.render()
  }

}
