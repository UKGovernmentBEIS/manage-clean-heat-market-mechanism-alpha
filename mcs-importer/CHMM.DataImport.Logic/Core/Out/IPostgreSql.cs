using CHMM.DataImport.Logic.Models;

namespace CHMM.DataImport.Logic.Core.Out
{
    public interface IPostgreSql
    {
        public void Set(RootEntity data);
    }
}
