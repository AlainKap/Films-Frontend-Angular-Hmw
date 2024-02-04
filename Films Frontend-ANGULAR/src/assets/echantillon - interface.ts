interface Film {
  nom: string;
  annee: number;
  realisateur: string;
  synopsis: string;
};

const films: Film[] = [
  {
    nom: "Inception",
    annee: 2010,
    realisateur: "Christopher Nolan",
    synopsis: "Dom Cobb est un voleur expérimenté, spécialisé dans l'extraction de secrets enfouis au plus profond du subconscient pendant les rêves."
  },
  {
    nom: "The Shawshank Redemption",
    annee: 1994,
    realisateur: "Frank Darabont",
    synopsis: "Deux hommes condamnés à la prison à vie se lient d'amitié au fil des années, trouvant réconfort et rédemption par la musique et l'espoir."
  },
  {
    nom: "Pulp Fiction",
    annee: 1994,
    realisateur: "Quentin Tarantino",
    synopsis: "Différentes histoires entrelacées de criminels, de drogue et de violence à Los Angeles."
  },
  {
    nom: "The Dark Knight",
    annee: 2008,
    realisateur: "Christopher Nolan",
    synopsis: "Batman s'associe au procureur Harvey Dent pour tenter de démanteler le crime organisé à Gotham, mais les choses tournent mal."
  },
  {
    nom: "Forrest Gump",
    annee: 1994,
    realisateur: "Robert Zemeckis",
    synopsis: "L'histoire extraordinaire de Forrest Gump, un homme avec un QI inférieur à la moyenne, qui se retrouve involontairement au centre de nombreux événements historiques."
  },
  {
    nom: "The Matrix",
    annee: 1999,
    realisateur: "The Wachowskis",
    synopsis: "Un programmeur informatique découvre que le monde dans lequel il vit n'est qu'une simulation contrôlée par des machines intelligentes, et il rejoint une rébellion pour lutter contre elles."
  },
  {
    nom: "The Godfather",
    annee: 1972,
    realisateur: "Francis Ford Coppola",
    synopsis: "La saga de la famille Corleone, une puissante dynastie criminelle italo-américaine, dirigée par le patriarche Vito Corleone."
  },
  {
    nom: "Schindler's List",
    annee: 1993,
    realisateur: "Steven Spielberg",
    synopsis: "L'histoire vraie d'Oskar Schindler, un homme d'affaires allemand, qui a sauvé la vie de plus de mille juifs pendant l'Holocauste."
  },
  {
    nom: "The Lord of the Rings: The Fellowship of the Ring",
    annee: 2001,
    realisateur: "Peter Jackson",
    synopsis: "Un jeune hobbit doit détruire un anneau maléfique pour empêcher le seigneur des ténèbres Sauron de conquérir le monde."
  },
  {
    nom: "Fight Club",
    annee: 1999,
    realisateur: "David Fincher",
    synopsis: "Un employé de bureau insomniaque forme un club clandestin où les hommes peuvent exprimer leur masculinité à travers des combats physiques."
  }
];

