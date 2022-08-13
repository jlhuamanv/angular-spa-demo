export class LibrosServices{
  private libros = ['Libro de Algebra', 'Libro de Aritmetica', 'El Grafico Revista'];

  agregarLibro(libroNombre: string){
    this.libros.push(libroNombre);
  }

  obtenerLibros(){
    return [...this.libros];
  }

}
