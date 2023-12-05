function AuthorConstructor( name, birthYear,  nationality){
this.name=name;
this.birthYear=birthYear;
this.nationality=nationality;
}

function BookConstructor(title,author,genre,price){
this.title=title;
this.author=author
this.genre=genre;
this.price=price;

}

BookConstructor.prototype.getInfo=function(){
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: ${this.price}`);
    console.log("-------------");
}

var jkRowling = new AuthorConstructor("J.K. Rowling", 1965, "British");
var harryPotterBook = new BookConstructor("Harry Potter and the Philosopher's Stone", jkRowling, "Fantasy", 20.99);

harryPotterBook.getInfo();
