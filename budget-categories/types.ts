/**
 * Type definition for the returned object from fetchTransactions
 */
interface Transaction {
  accountingDate: string;
  interestDate: string;
  accountName: string;
  transactionType: string;
  text: string;
  amount: number;
}

interface TransactionsObject {
  items: Array<any>;
  name: string;
  version: string;
  status: number;
}

interface CategoryOptions {
  date: Date;
  desc: string;
  expense: number;
  income: number;
}

type Month = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';
type SheetNameList = [Month, string];
