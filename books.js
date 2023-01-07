
const books = [
  {
    "title": "Harry Potter and the Philosopher's Stone",
    "author": "J. K. Rowling",
    "tags": ["fantasy", "fiction", "series"],
    "pages": 223,
    "publication_year": 1997
  },
  {
    "title": "The Lightning Thief",
    "author": "Rick Riordan",
    "tags": ["fantasy", "fiction", "greek myth", "series"],
    "pages": 377,
    "publication_year": 2005
  },
  {
    "title": "Kira-Kira",
    "author": "Cynthia Kadohata",
    "tags": ["young adult", "fiction", "japanese american", "family"],
    "pages": 224,
    "publication_year": 2004
  },
  {
    "title": "Charlie and the Chocolate Factory",
    "author": "Roald Dahl",
    "tags": ["fiction", "middle grade"],
    "pages": 176,
    "publication_year": 1964
  },
  {
    "title": "Wonder",
    "author": "R. J. Palacio",
    "tags": ["middle grade", "discrimination"],
    "pages": 310,
    "publication_year": 2012
  },
  {
    "title": "The Fellowship of the Ring",
    "author": "J. R. R. Tolkien",
    "tags": ["fantasy", "fiction"],
    "pages": 423,
    "publication_year": 1954
  },
  {
    "title": "Good Omens",
    "author": "Neil Gaiman and Terry Pratchett",
    "tags": ["comedy", "fiction"],
    "pages": 288,
    "publication_year": 1990
  },
  {
    "title": "All American Boys",
    "author": "Brandom Kiely and Jason Reynolds",
    "tags": ["young adult", "black lives matter", "discrimination"],
    "pages": 219,
    "publication_year": 2015
  },
  {
    "title": "Coraline",
    "author": "Neil Gaiman",
    "tags": ["fiction", "horror"],
    "pages": 186,
    "publication_year": 2002
  },
  {
    "title": "The Kite Runner",
    "author": "Khaled Hosseini",
    "tags": ["historical fiction", "drama", "family", "international"],
    "pages": 372,
    "publication_year": 2003
  },
  {
    "title": "Harry Potter and the Chamber of Secrets",
    "author": "J. K. Rowling",
    "tags": ["fantasy", "fiction", "series"],
    "pages": 251,
    "publication_year": 1998
  },
  {
    "title": "Turtles All the Way Down",
    "author": "John Green",
    "tags": ["young adult", "fiction"],
    "pages": 286,
    "publication_year": 2017
  },
  {
    "title": "Six of Crows",
    "author": "Leigh Bardugo",
    "tags": ["series", "fantasy", "fiction", "heist"],
    "pages": 465,
    "publication_year": 2015
  },
  {
    "title": "Crooked Kingdom",
    "author": "Leigh Bardugo",
    "tags": ["series", "fantasy", "fiction", "heist"],
    "pages": 536,
    "publication_year": 2016
  },
  {
    "title": "Harry Potter and the Prisoner of Azkaban",
    "author": "J. K. Rowling",
    "tags": ["fantasy", "fiction", "series"],
    "pages": 317,
    "publication_year": 1999
  },
  {
    "title": "Out of My Mind",
    "author": "Sharon M. Draper",
    "tags": ["middle grade", "disability"],
    "pages": 295,
    "publication_year": 2010
  },
  {
    "title": "Freakonomics",
    "author": "Steven D. Levitt and Stephen J. Dubner",
    "tags": ["economics", "nonfiction"],
    "pages": 336,
    "publication_year": 2005
  },
  {
    "title": "Will Grayson, Will Grayson",
    "author": "	John Green and David Levithan",
    "tags": ["young adult", "fiction", "lgbt"],
    "pages": 310,
    "publication_year": 2010
  },
  {
    "title": "The Joy Luck Club",
    "author": "Amy Tan",
    "tags": ["family", "fiction", "chinese american"],
    "pages": 288,
    "publication_year": 1989
  },
  {
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "tags": ["drama", "fantasy", "international"],
    "pages": 163,
    "publication_year": 1988
  },
  {
    "title": "Mrs. Frisby and the Rats of NIMH",
    "author": "Robert C. O'Brien",
    "tags": ["science fiction", "fantasy"],
    "pages": 233,
    "publication_year": 1970
  },
  {
    "title": "The Hate U Give",
    "author": "Angie Thomas",
    "tags": ["young adult", "fiction", "black lives matter", "discrimination"],
    "pages": 444,
    "publication_year": 2017
  },
  {
    "title": "Things Fall Apart",
    "author": "Chinua Achebe",
    "tags": ["historical fiction"],
    "pages": 310,
    "publication_year": 1958
  },
  {
    "title": "The God of Small Things",
    "author": "Arundhati Roy",
    "tags": ["international", "fiction", "discrimination"],
    "pages": 340,
    "publication_year": 1997
  },
  {
    "title": "Harry Potter and the Goblet of Fire",
    "author": "J. K. Rowling",
    "tags": ["fantasy", "fiction", "series"],
    "pages": 636,
    "publication_year": 2000
  },
  {
    "title": "When Breath Becomes Air",
    "author": "Paul Kalanithi",
    "tags": ["biography", "cancer"],
    "pages": 208,
    "publication_year": 2016
  },
  {
    "title": "Daughter of Smoke and Bone",
    "author": "Laini Taylor",
    "tags": ["fantasy", "young adult"],
    "pages": 418,
    "publication_year": 2011
  },
  {
    "title": "Everything Leads to You",
    "author": "Nina LaCour",
    "tags": ["young adult", "lgbt", "movies"],
    "pages": 307,
    "publication_year": 2014
  },
  {
    "title": "Fablehaven",
    "author": "Brandon Mull",
    "tags": ["series", "fantasy", "middle grade"],
    "pages": 359,
    "publication_year": 2006
  },
  {
    "title": "The Sea of Monsters",
    "author": "Rick Riordan",
    "tags": ["fantasy", "fiction", "greek myth", "series"],
    "pages": 279,
    "publication_year": 2006
  },
  {
    "title": "The Goose Girl",
    "author": "Shannon Hale",
    "tags": ["fairy tale", "fantasy", "middle grade"],
    "pages": 383,
    "publication_year": 2003
  },
  {
    "title": "Princess Academy",
    "author": "Shannon Hale",
    "tags": ["fairy tale", "fantasy", "middle grade"],
    "pages": 314,
    "publication_year": 2005
  },
  {
    "title": "Avalon: Web of Magic",
    "author": "Charlotte Fullerton",
    "tags": ["fantasy", "series", "middle grade"],
    "pages": 141,
    "publication_year": 2001
  },
  {
    "title": "The Titan's Curse",
    "author": "Rick Riordan",
    "tags": ["fantasy", "fiction", "greek myth", "series"],
    "pages": 312,
    "publication_year": 2007
  },
  {
    "title": "Dear Martin",
    "author": "Nic Stone",
    "tags": ["young adult", "black lives matter"],
    "pages": 226,
    "publication_year": 2017
  },
  {
    "title": "Harry Potter and the Deathly Hallows",
    "author": "J. K. Rowling",
    "tags": ["fantasy", "fiction", "series"],
    "pages": 607,
    "publication_year": 2007
  },
  {
    "title": "The Outsiders",
    "author": "S. E. Hinton",
    "tags": ["young adult", "discrimination"],
    "pages": 194,
    "publication_year": 1967
  },
];
