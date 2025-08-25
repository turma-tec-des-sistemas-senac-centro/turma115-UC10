import { Link } from 'react-router-dom';
import styles from './BookCard.module.css';

const BookCard = ({ livro, onDelete }) => (
  <div className={styles.card}>
    <h2 className={styles.title}>{livro.titulo}</h2>
    <p className={styles.author}>{livro.autor}</p>
    <p className={styles.genre}>{livro.genero}</p>
    <p className={styles.price}>R$ {livro.preco}</p>
    <Link to={`/livro/${livro.id}`} className={styles.detailsLink}>Ver Detalhes</Link>
    <button onClick={() => onDelete(livro.id)} className={styles.deleteBtn}>
      Deletar
    </button>
  </div>
);

export default BookCard;

