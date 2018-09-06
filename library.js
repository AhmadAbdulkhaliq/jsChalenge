
class Library{
    constructor(){
        this.books=[]
        this.cart=[]
    }
    
    getBooks(){
        return this.books;
    }

    addBooks(data){
    this.books.push(data)
    let length=this.books.length
    return 'you add this book :' + JSON.stringify(this.books[length - 1]) ;
    }

    search(name){
        for(let i=0 ; i<this.books.length;i++){
        if(this.books[i].author.includes(name) || this.books[i].title.includes(name)){
            console.log( 'your search result is:' +  JSON.stringify(this.books[i]))
        }
    }
    return 'your search is done';
    }

    deleteBooks(name){
        for(let i=0 ; i<this.books.length;i++){
        if(this.books[i].title===name){
            return 'this book deleted from your store'+JSON.stringify(this.books.splice( i , 1));
        }
    }
    }

    addToCart(data){
        for(let i=0 ; i<this.books.length;i++){
            if(this.books[i].title===data){
                return 'your data pushed at index:'+this.cart.push(this.books[i])
            }
        }
    }

    getCart(){
        return this.cart;
    }

    deleteFromCard(data){
        for(let i=0 ; i<this.cart.length;i++){
            if(this.cart[i].title===data){
                return 'this book deleted from your cart:'+this.cart.splice( i , 1);
            }
        }
   }
   checkout(){
       if(this.cart.length>0){
           let CartDetail=`you buy ${this.cart.length} books `
           this.cart=[]
           return CartDetail;
       }else{
            return "you haven't anything in your cart"
       }
   }

}


// let newBook={
//     "author": "ahmad",
//     "country": "erbil",
//     "imageLink": "images/things-fall-apart.jpg",
//     "language": "English",
//     "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
//     "pages": 209,
//     "title": "art",
//     "year": 1958
//   }
//   let newBook1={
//     "author": "mohamed",
//     "country": "erbil",
//     "imageLink": "images/things-fall-apart.jpg",
//     "language": "English",
//     "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
//     "pages": 209,
//     "title": "coding",
//     "year": 1958
//   }
//   let newBook2={
//     "author": "jegr",
//     "country": "erbil",
//     "imageLink": "images/things-fall-apart.jpg",
//     "language": "English",
//     "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
//     "pages": 209,
//     "title": "javascript",
//     "year": 1958
//   }

// let library=new Library()

// library.addBooks(newBook)
// library.addBooks(newBook1)
// library.addBooks(newBook2)

// library.search('ahmad')
// library.deleteBooks('jegr')
// library.getBooks()

// library.addToCart('ahmad')
// library.addToCart('jegr')

// library.deleteFromCard("ahmad")
// library.getCart()
// library.checkout()
