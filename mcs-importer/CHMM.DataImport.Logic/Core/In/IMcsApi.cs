using CHMM.DataImport.Logic.Models;

namespace CHMM.DataImport.Logic.Core.In
{
    public interface IMcsApi
    {
        Task<string> GetAsync();
    }
}
