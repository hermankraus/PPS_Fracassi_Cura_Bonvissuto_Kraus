using WorkRepAPI.Context;
using WorkRepAPI.Data.Interfaces;

namespace WorkRepAPI.Data.Implementations
{
    public class Repository : IRepository
    {
        internal readonly pps_databaseContext _context;

        public Repository(pps_databaseContext context)
        {
            _context = context;
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
