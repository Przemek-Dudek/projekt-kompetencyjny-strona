export interface BorrowedBook {
  authors: string[];
  cover: string;
  dateDue: string;
  description: string;
  genre: string;
  itemId: string;
  loanId: string;
  title: string;
}

export interface AvailableBook {
  Description: string;
  authors: string;
  bookId: string;
  cover: string;
  genre: string;
  isAvailable: boolean;
  publisher: string;
  quantity: number;
  title: string;
} 