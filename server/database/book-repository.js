
class BookRepository {
    constructor(connectionPool) {
        this.connectionPool = connectionPool;
    }
    save(book,callback) {
        this.connectionPool.getPool().query('insert into books set ?', book,callback);

    }
    get(id,callback) {
        this.connectionPool.getPool().query('select * from books where id = ?', id, callback);
    }
    getAll(callback) {
        this.connectionPool.getPool().query('select * from books',callback);
    }
    update(book,id,callback) {
        this.connectionPool.getPool().query('update books set ? where id = ?', [book,id],callback);
    }
    delete(id,callback) {
        this.connectionPool.getPool().query('delete from books where id = ?',id,callback);
    }
}

module.exports = BookRepository;