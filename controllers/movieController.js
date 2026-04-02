 const dbConnection = require('../data/db');



 function index (req, res) {
    const query = 'SELECT * FROM movies';
    dbConnection.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Errore del server', 
            message: err.message });
      }
      res.json(results);
    });

 }

function show (req, res) {
    const movieId = Number(req.params.id);
    if (isNaN(movieId)) {
    return res.status(400).json({ error: 'invalid id', message: 'ID non valido' })
  }



    const queryMovies = 'SELECT * FROM movies WHERE id = ?';
    const queryReviews = 'SELECT * FROM reviews WHERE movie_id = ?';


    dbConnection.query(queryMovies, [movieId], (err, movies) => {
        if (err) {
            return res.status(500).json({ error: 'Errore del server', 
                message: err.message });
        }
        if (movies.length === 0 || movies[0].id == null) {
            return res.status(404).json({ error: 'Film non trovato' });
        }
        const movie = movies[0];
        console.log(movie)

   
   
    dbConnection.query(queryReviews, [movieId], (err, reviews) => {
            if (err) {
                return res.status(500).json({ error: 'Errore del server', message: err.message });
      }
       movie.reviews = reviews
            
            res.json({ movie, reviews });
        });
    });

}


module.exports = {
  index,
  show
}   