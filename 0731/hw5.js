function Book(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
}

// Book 프로토타입에 공통 프로퍼티 추가
Book.prototype.publicationDate = '';
Book.prototype.pageCount = 0;

// 예시로 Book 객체 생성
const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 10.99);

// 프로토타입 프로퍼티 설정
book.publicationDate = '2024';
book.pageCount = 218;


// 객체 정보 출력
console.log(`Title: ${book.title}, Author: ${book.author}, Price: ${book.price}, Publication Date: ${book.publicationDate}, Page Count: ${book.pageCount}`);


