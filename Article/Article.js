// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;


    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector(".expandButton");
    this.contentDrop = this.domElement.querySelectorAll(".article .one");

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "click to expand";

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));
  }

  expandArticle() {
      this.domElement.classList.toggle("article-open");
      this.contentDrop.forEach(par => {
        par.style.color = "red";
        
      });


      if(this.expandButton.textContent === "click to expand"){
        this.expandButton.textContent = "click to collapse";
      }else{
        this.expandButton.textContent = "click to expand";
      }
  }
}



let articles = document.querySelectorAll(".article");

articles.forEach(article => new Article(article));