import BookForm from '../../components/bookform/BookForm';  // Importa o componente do formulário

const AdicionarLivro = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Adicionar Novo Livro</h1>
      <BookForm />  {/* Componente que contém o formulário para adicionar um novo livro */}
    </div>
  );
};

export default AdicionarLivro;


// nesse caso não precisa da linha de código do CSS - já estiliza na propria linha de comando 
//Isso que você está usando é Tailwind CSS. Diferente do CSS tradicional (arquivo .css com classes próprias),
//  no Tailwind você aplica as classes utilitárias diretamente no atributo className.