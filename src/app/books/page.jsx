import BookCard from '@/components/BookCard';

const booksPage = async () => {
  const res = await fetch('http://localhost:5000/books', { cache: 'no-store' });
  const books = await res.json();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-center py-4 text-4xl text-fuchsia-300 font-semibold">
        Books : {books.length}
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default booksPage;
