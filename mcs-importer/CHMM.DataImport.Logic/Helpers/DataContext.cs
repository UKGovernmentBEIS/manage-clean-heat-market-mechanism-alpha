using CHMM.DataImport.Logic.Models;
using Microsoft.EntityFrameworkCore;

namespace CHMM.DataImport.Logic.Helpers
{
    public class DataContext : DbContext
    {
        public DataContext()
        {}
        public DataContext(DbContextOptions options) : base(options)
        { }

        // Currently have to uncomment to run:
        //   dotnet ef migrations add NullableStrings --verbose --project CHMM.DataImport.Logic --startup-project CHMM.DataImport.Lambda
        //   dotnet ef database update --project CHMM.DataImport.Logic --startup-project CHMM.DataImport.Lambda --verbose
        //protected override void OnConfiguring(DbContextOptionsBuilder options)
        //{
        //    options.UseNpgsql("Server=xxxxxxxxxx.xxxxxxxxxx.eu-west-2.rds.amazonaws.com;Port=5432;Database=xxxxxxxxxx;User Id=xxxxxxxxxx;Password=xxxxxxxxxx;");
        //}

        public DbSet<RootEntity> Data { get; set; }
    }
}
