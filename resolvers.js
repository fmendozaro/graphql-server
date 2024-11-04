const resolvers = {
    Query: {
      books: () => [
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      ],
    },
  };
  
  module.exports = resolvers;