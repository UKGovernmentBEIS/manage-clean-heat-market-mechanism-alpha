using AutoMapper;
using CHMM.DataImport.Logic.Helpers;
using CHMM.DataImport.Logic.Models;
using Microsoft.EntityFrameworkCore;

namespace CHMM.DataImport.Logic.Core.Out
{
    public class PostgreSql : IPostgreSql
    {
        private readonly DataContext context;

        public PostgreSql(
            DataContext context)
        {
            this.context = context;
        }

        public void Set(RootEntity data)
        {
            context.Database.Migrate();

            context.Data.Add(data);
            context.SaveChanges();
        }
    }
}
